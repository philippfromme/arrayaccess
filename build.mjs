import sharp from 'sharp';
import { readFileSync } from 'fs';

const sizes = [32, 64, 128, 256, 512];
const svg = readFileSync('logo.svg');

for (const size of sizes) {
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(`logo-${size}.png`);

  await sharp(svg)
    .resize(size, size)
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(`logo-${size}-white.png`);

  console.log(`logo-${size}.png, logo-${size}-white.png`);
}
