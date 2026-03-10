#!/usr/bin/env bash
set -euo pipefail

# Run this from the deployed repo directory in Plesk (usually httpdocs).
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "[deploy-plesk] Installing dependencies..."
npm ci

echo "[deploy-plesk] Building Vite app..."
npm run build

echo "[deploy-plesk] Publishing dist to web root..."
rm -f index.html
cp -f dist/index.html ./index.html
rm -rf assets
cp -R dist/assets ./assets

echo "[deploy-plesk] Done. Serving built assets from web root."
