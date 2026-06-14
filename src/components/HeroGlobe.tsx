"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ethiopiaHighResPolygon as ethiopiaPolygon } from './ethiopia-data';

// --- Textures ---
function createMaleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(64, 30, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(64, 50);
  ctx.lineTo(64, 90);
  ctx.lineTo(40, 120);
  ctx.lineTo(64, 90);
  ctx.lineTo(88, 120);
  ctx.lineTo(64, 90);
  ctx.moveTo(64, 60);
  ctx.lineTo(30, 70);
  ctx.moveTo(64, 60);
  ctx.lineTo(98, 70);
  ctx.lineWidth = 14;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
  return new THREE.CanvasTexture(canvas);
}

function createFemaleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(64, 30, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(64, 50);
  ctx.lineTo(40, 110);
  ctx.lineTo(88, 110);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(64, 60);
  ctx.lineTo(30, 80);
  ctx.moveTo(64, 60);
  ctx.lineTo(98, 80);
  ctx.lineWidth = 12;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
  return new THREE.CanvasTexture(canvas);
}

// Check if point is inside a 2D polygon using ray casting
function isPointInPolygon(point: number[], vs: number[][]) {
  let x = point[0], y = point[1];
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    let xi = vs[i][0], yi = vs[i][1];
    let xj = vs[j][0], yj = vs[j][1];
    let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function EthiopiaSolidMap() {
  const groupRef = useRef<THREE.Group>(null);
  const [maleTexture, setMaleTexture] = useState<THREE.Texture | null>(null);
  const [femaleTexture, setFemaleTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    setMaleTexture(createMaleTexture());
    setFemaleTexture(createFemaleTexture());
  }, []);

  // 1. Generate 3D Landmass Shape
  const mapShape = useMemo(() => {
    const shape = new THREE.Shape();
    const scale = 4.0;
    shape.moveTo(ethiopiaPolygon[0][0] * scale, ethiopiaPolygon[0][1] * scale);
    for (let i = 1; i < ethiopiaPolygon.length; i++) {
      shape.lineTo(ethiopiaPolygon[i][0] * scale, ethiopiaPolygon[i][1] * scale);
    }
    return shape;
  }, []);

  // 2. Scatter Avatars & Create Glowing Constellation Network
  const { malePosArray, femalePosArray, staticLinesArray } = useMemo(() => {
    const scale = 4.0;
    const mPts: THREE.Vector3[] = [];
    const fPts: THREE.Vector3[] = [];
    const allPeople: THREE.Vector3[] = [];

    // Scatter 120 people across the ground for a rich network
    for (let i = 0; i < 120; i++) {
      let valid = false;
      let pos = new THREE.Vector3();
      let attempts = 0;
      while (!valid && attempts < 100) {
        const x = (Math.random() - 0.5) * 2 * scale;
        const y = (Math.random() - 0.5) * 2 * scale;
        if (isPointInPolygon([x / scale, y / scale], ethiopiaPolygon)) {
          pos.set(x, y, 0.35); // on ground
          valid = true;
        }
        attempts++;
      }
      
      if (valid) {
        if (i % 2 === 0) mPts.push(pos);
        else fPts.push(pos);
        allPeople.push(pos);
      }
    }

    // Prepare arrays for React Three Fiber
    const mPosArray = new Float32Array(mPts.length * 3);
    mPts.forEach((p, i) => { mPosArray[i*3] = p.x; mPosArray[i*3+1] = p.y; mPosArray[i*3+2] = p.z; });

    const fPosArray = new Float32Array(fPts.length * 3);
    fPts.forEach((p, i) => { fPosArray[i*3] = p.x; fPosArray[i*3+1] = p.y; fPosArray[i*3+2] = p.z; });

    // Generate Beautiful Glowing Web (Direct Connections)
    const lineVerts: number[] = [];
    const maxDist = 1.6;

    for (let i = 0; i < allPeople.length; i++) {
      let neighbors = [];
      for (let j = 0; j < allPeople.length; j++) {
        if (i === j) continue;
        const dist = allPeople[i].distanceTo(allPeople[j]);
        if (dist < maxDist) {
          neighbors.push({ pt: allPeople[j], dist });
        }
      }
      
      neighbors.sort((a, b) => a.dist - b.dist);
      const closest = neighbors.slice(0, 3); // Connect to max 3 nearest neighbors

      closest.forEach(neighbor => {
        // Direct straight lines, perfectly connected
        lineVerts.push(allPeople[i].x, allPeople[i].y, allPeople[i].z);
        lineVerts.push(neighbor.pt.x, neighbor.pt.y, neighbor.pt.z);
      });
    }

    const staticLinesArray = new Float32Array(lineVerts);

    return { 
      malePosArray: mPosArray,
      femalePosArray: fPosArray,
      staticLinesArray
    };
  }, []);

  const { camera } = useThree();
  const targetCameraPos = useRef(new THREE.Vector3(0, -5, 8));

  useFrame((state, delta) => {
    // 1. Parallax Depth (Camera Movement)
    const mouseX = (state.pointer.x * 2.5);
    const mouseY = (state.pointer.y * 1.5);
    
    targetCameraPos.current.set(mouseX, mouseY - 5, 8);
    camera.position.lerp(targetCameraPos.current, 0.05);
    camera.lookAt(0, 0, 0);

    // 2. Interactive Map Tilting (Map tilts towards cursor)
    if (groupRef.current) {
      // state.pointer.y is positive at top, negative at bottom
      // positive X rotation tips the top towards the camera
      const targetRotationX = state.pointer.y * 0.35;
      
      // state.pointer.x is positive at right, negative at left
      // negative Y rotation tips the right side towards the camera
      const targetRotationY = state.pointer.x * -0.35;

      // Smoothly interpolate the rotation for a fluid feeling
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* The Solid 3D Landmass */}
      <mesh receiveShadow castShadow>
        <extrudeGeometry args={[mapShape, { 
          depth: 0.3, 
          bevelEnabled: true, 
          bevelThickness: 0.05, 
          bevelSize: 0.05, 
          bevelSegments: 3 
        }]} />
        <meshStandardMaterial 
          color="#1e293b" // dark slate
          roughness={0.8} 
          metalness={0.1}
        />
      </mesh>

      {/* Gold Border Outline */}
      <lineLoop>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array(ethiopiaPolygon.flatMap(p => [p[0]*4.0, p[1]*4.0, 0.01])), 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#fbbf24" linewidth={2} />
      </lineLoop>

      {/* Male Figures */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[malePosArray, 3]} />
        </bufferGeometry>
        {maleTexture && (
          <pointsMaterial size={0.6} color="#34d399" map={maleTexture} transparent opacity={1} depthTest={false} depthWrite={false} blending={THREE.NormalBlending} />
        )}
      </points>

      {/* Female Figures */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[femalePosArray, 3]} />
        </bufferGeometry>
        {femaleTexture && (
          <pointsMaterial size={0.6} color="#fbbf24" map={femaleTexture} transparent opacity={1} depthTest={false} depthWrite={false} blending={THREE.NormalBlending} />
        )}
      </points>

      {/* GORGEOUS Glowing Solid Web */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[staticLinesArray, 3]} />
        </bufferGeometry>
        <lineBasicMaterial 
          color="#2dd4bf" // Bright cyan/teal
          transparent 
          opacity={0.7} 
          linewidth={2} 
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroGlobe() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 to-white pt-20">
      <div className="absolute inset-0 z-0 opacity-100">
        <Canvas camera={{ position: [0, -2, 9], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" castShadow />
          <directionalLight position={[-5, -10, 8]} intensity={1.5} color="#0D9488" />
          <directionalLight position={[0, -5, 5]} intensity={1} color="#fbbf24" />
          <EthiopiaSolidMap />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 pointer-events-auto mt-10"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
            Building The Foundation
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
            Empowering <span className="text-teal-400 drop-shadow-md">Ethiopian</span>
            <br />
            <span className="text-gold">Youth</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 pointer-events-auto"
        >
          <Link href="/programs" className="btn-primary w-full sm:w-auto justify-center shadow-xl shadow-teal/20 transform hover:-translate-y-1 transition-all">
            Explore Our Impact
            <ArrowRight size={18} />
          </Link>
          <Link href="/volunteer" className="btn-outline w-full sm:w-auto justify-center bg-white/80 backdrop-blur-md transform hover:-translate-y-1 transition-all">
            Get Involved
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
