#!/usr/bin/env node
/**
 * Cloudflare Workers Builds runs `npx wrangler deploy` with an empty build
 * command. Wrangler 4 then delegates to `opennextjs-cloudflare deploy`, which
 * exits if `.open-next` was never compiled.
 *
 * This wrapper builds first, then hands off to the real wrangler CLI.
 */
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const args = process.argv.slice(2);
const cmd = args[0];
const needsOpenNext =
  cmd === "deploy" || (cmd === "versions" && args[1] === "upload");

if (needsOpenNext) {
  const openNextApi = require.resolve("@opennextjs/cloudflare");
  const openNextCli = path.join(path.dirname(openNextApi), "..", "cli", "index.js");
  const build = spawnSync(process.execPath, [openNextCli, "build"], {
    stdio: "inherit",
    env: process.env,
  });
  if (build.status !== 0) process.exit(build.status ?? 1);
}

const wranglerCli = path.join(
  path.dirname(require.resolve("wrangler/package.json")),
  "wrangler-dist",
  "cli.js",
);
const result = spawnSync(process.execPath, [wranglerCli, ...args], {
  stdio: "inherit",
  env: process.env,
});
process.exit(result.status ?? 1);
