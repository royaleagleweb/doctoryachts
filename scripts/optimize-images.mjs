#!/usr/bin/env node
/**
 * Write responsive WebP siblings for /public/images.
 *
 * Cloudflare Workers (OpenNext) do not run sharp. Unless wrangler defines an
 * IMAGES binding, /_next/image returns the original file for every srcset
 * width. These variants are copied with the rest of public/ into
 * .open-next/assets and served as static files.
 *
 * Original JPEG/WebP/PNG files are left in place for OG, schema, and any
 * direct /images/... URL.
 */
import { readFileSync } from "node:fs";
import { readdir, rm, stat, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "public/images");
const outDir = path.join(srcDir, "opt");
const variants = JSON.parse(
  readFileSync(path.join(root, "src/lib/image-variants.json"), "utf8"),
);

const WIDTHS = [...variants.widths].sort((a, b) => a - b);
const QUALITY = variants.quality;
const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function mapPool(items, limit, fn) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (queue.length) {
      const item = queue.shift();
      await fn(item);
    }
  });
  await Promise.all(workers);
}

async function needsWrite(outPath, srcMtimeMs) {
  try {
    const out = await stat(outPath);
    return out.mtimeMs < srcMtimeMs;
  } catch {
    return true;
  }
}

async function main() {
  const stampPath = path.join(outDir, "manifest.json");
  const stampBody = JSON.stringify({ widths: WIDTHS, quality: QUALITY, format: "webp" });
  let previousStamp = "";
  try {
    previousStamp = readFileSync(stampPath, "utf8");
  } catch {
    previousStamp = "";
  }
  if (previousStamp !== stampBody) {
    await rm(outDir, { recursive: true, force: true });
  }
  await mkdir(outDir, { recursive: true });

  const sources = (await readdir(srcDir)).filter((name) =>
    SOURCE_EXT.has(path.extname(name).toLowerCase()),
  );
  const expected = new Set(["manifest.json"]);
  let written = 0;
  let skipped = 0;

  await mapPool(sources, 4, async (name) => {
    const srcPath = path.join(srcDir, name);
    const srcStat = await stat(srcPath);
    const base = path.basename(name, path.extname(name));
    const meta = await sharp(srcPath).metadata();
    const srcWidth = meta.width ?? WIDTHS[WIDTHS.length - 1];

    for (const width of WIDTHS) {
      const filename = `${base}-${width}.webp`;
      expected.add(filename);
      const outPath = path.join(outDir, filename);
      if (!(await needsWrite(outPath, srcStat.mtimeMs))) {
        skipped += 1;
        continue;
      }
      const target = Math.min(width, srcWidth);
      await sharp(srcPath)
        .rotate()
        .resize({ width: target, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(outPath);
      written += 1;
    }
  });

  const existing = await readdir(outDir);
  for (const name of existing) {
    if (!expected.has(name)) {
      await rm(path.join(outDir, name), { force: true });
    }
  }
  await writeFile(stampPath, stampBody);

  console.log(
    `optimize-images: ${sources.length} sources, wrote ${written}, up to date ${skipped}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
