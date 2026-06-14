const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/ETH.geo.json', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const geojson = JSON.parse(data);
    
    let geometry = geojson.geometry;
    if (!geometry && geojson.features && geojson.features.length > 0) {
      geometry = geojson.features[0].geometry;
    } else if (!geometry && geojson.type === 'Feature') {
      geometry = geojson.geometry;
    }
    
    let coordinates = [];
    if (geometry.type === 'Polygon') {
      coordinates = geometry.coordinates[0];
    } else if (geometry.type === 'MultiPolygon') {
      let maxArea = 0;
      let maxPoly = [];
      geometry.coordinates.forEach(poly => {
        if (poly[0].length > maxArea) {
          maxArea = poly[0].length;
          maxPoly = poly[0];
        }
      });
      coordinates = maxPoly;
    }

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    coordinates.forEach(([x, y]) => {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    });

    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const scaleX = 2 / (maxX - minX);
    const scaleY = 2 / (maxY - minY);
    const scale = Math.min(scaleX, scaleY);

    const normalized = coordinates.map(([x, y]) => {
      return [
        (x - cx) * scale,
        (y - cy) * scale
      ];
    });

    // Write to TS file
    const tsContent = `export const ethiopiaHighResPolygon = ${JSON.stringify(normalized)};\n`;
    fs.writeFileSync('d:\\ycdf\\src\\components\\ethiopia-data.ts', tsContent);
    console.log('Successfully generated ethiopia-data.ts with ' + normalized.length + ' points.');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
