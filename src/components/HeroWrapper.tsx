"use client";

import dynamic from 'next/dynamic';

const HeroGlobe = dynamic(() => import('@/components/HeroGlobe'), { ssr: false });

export default function HeroWrapper() {
  return <HeroGlobe />;
}
