#!/usr/bin/env node
/**
 * Crop licensed site photos to the 1200×630 share size Facebook, WhatsApp,
 * and LinkedIn expect. Sources are files already in public/images — no new
 * stock and no generated imagery. The default card adds the Doctor Yachts
 * name on top of the homepage marina photo.
 *
 * Re-run after replacing a source photo: node scripts/generate-og-images.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = path.join(root, "public/images");
const outDir = path.join(imagesDir, "og");

const WIDTH = 1200;
const HEIGHT = 630;
const MAX_BYTES = 200 * 1024;

/** One output file per unique source. Page metadata points at these paths. */
const CROPS = [
  { file: "service-engine.jpg", source: "service-engine.jpg" },
  { file: "service-electrical.jpg", source: "service-electrical.jpg" },
  { file: "service-cooling.jpg", source: "service-cooling.jpg" },
  { file: "service-diagnostics.jpg", source: "service-diagnostics.jpg" },
  { file: "service-maintenance.jpg", source: "service-maintenance.jpg" },
  { file: "service-systems.jpg", source: "service-systems.jpg" },
  { file: "service-outboard.jpg", source: "service-outboard.jpg" },
  { file: "service-mobile-repair.jpg", source: "service-mobile-repair.webp" },
  { file: "service-upholstery.jpg", source: "service-upholstery-canvas.webp" },
  { file: "service-monthly.jpg", source: "service-monthly-maintenance.webp" },
  { file: "location-fort-lauderdale.jpg", source: "yacht-intracoastal.jpg" },
  { file: "location-pompano-beach.jpg", source: "yacht-dockside-pair.jpg" },
  { file: "location-dania-beach.jpg", source: "yacht-marina-gold.jpg" },
  { file: "location-hollywood-fl.jpg", source: "yacht-cruising.jpg" },
  { file: "location-miami.jpg", source: "location-miami.jpg" },
  { file: "location-palm-beach.jpg", source: "yacht-night.jpg" },
  { file: "about.jpg", source: "marine-mechanic.jpg" },
];

function brandOverlay() {
  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#070b12" stop-opacity="0"/>
      <stop offset="48%" stop-color="#070b12" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#070b12" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#shade)"/>
  <rect x="56" y="478" width="64" height="3" fill="#c9a24a"/>
  <text x="56" y="538" fill="#f7f4ee" font-family="Inter" font-size="54" font-weight="700">Doctor Yachts</text>
  <text x="56" y="578" fill="#d4b66a" font-family="Inter" font-size="24" font-weight="500">Mobile boat mechanic · Fort Lauderdale</text>
</svg>`);
}

async function cover(sourceName) {
  return sharp(path.join(imagesDir, sourceName))
    .rotate()
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" });
}

async function toJpeg(pipeline) {
  let quality = 78;
  let buffer = await pipeline.clone().jpeg({ quality, mozjpeg: true }).toBuffer();
  while (buffer.length > MAX_BYTES && quality > 52) {
    quality -= 4;
    buffer = await pipeline.clone().jpeg({ quality, mozjpeg: true }).toBuffer();
  }
  return { buffer, quality };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const jobs = [...CROPS];

  const branded = await cover("yacht-marina-gold.jpg");
  const brandedBuffer = await branded
    .clone()
    .composite([{ input: brandOverlay(), top: 0, left: 0 }])
    .toBuffer();
  jobs.unshift({
    file: "default.jpg",
    source: "yacht-marina-gold.jpg",
    pipeline: sharp(brandedBuffer),
  });

  for (const job of jobs) {
    const pipeline = job.pipeline ?? (await cover(job.source));
    const { buffer, quality } = await toJpeg(pipeline);
    const dest = path.join(outDir, job.file);
    await writeFile(dest, buffer);
    const meta = await sharp(buffer).metadata();
    if (meta.width !== WIDTH || meta.height !== HEIGHT) {
      throw new Error(`${job.file} is ${meta.width}x${meta.height}, expected ${WIDTH}x${HEIGHT}`);
    }
    const kb = (buffer.length / 1024).toFixed(1);
    console.log(
      `${job.file}\t${meta.width}x${meta.height}\t${kb} KB\tq${quality}\tfrom ${job.source}`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
