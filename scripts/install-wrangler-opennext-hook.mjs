#!/usr/bin/env node
/**
 * Point `npx wrangler` at scripts/wrangler-with-opennext.mjs after install.
 * Unlink the npm symlink first — writing through it overwrites wrangler's
 * real bin/wrangler.js.
 */
import { chmodSync, existsSync, mkdirSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const binDir = path.join(root, "node_modules", ".bin");
const wrapper = path.join(root, "scripts", "wrangler-with-opennext.mjs");
const node = process.execPath;

if (!existsSync(path.join(root, "node_modules", "wrangler"))) {
  process.exit(0);
}

mkdirSync(binDir, { recursive: true });

function writeShim(dest, contents, mode) {
  if (existsSync(dest)) unlinkSync(dest);
  writeFileSync(dest, contents);
  if (mode) chmodSync(dest, mode);
}

writeShim(
  path.join(binDir, "wrangler"),
  `#!/bin/sh
exec "${node}" "${wrapper}" "$@"
`,
  0o755,
);

writeShim(
  path.join(binDir, "wrangler.cmd"),
  `@echo off\r\n"${node}" "${wrapper}" %*\r\n`,
);
