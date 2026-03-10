#!/usr/bin/env bash
set -euo pipefail

# Run this from the deployed repo directory in Plesk (usually httpdocs).
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

find_npm() {
	if command -v npm >/dev/null 2>&1; then
		command -v npm
		return 0
	fi

	for p in \
		/opt/plesk/node/22/bin/npm \
		/opt/plesk/node/20/bin/npm \
		/opt/plesk/node/18/bin/npm \
		/usr/local/bin/npm \
		/usr/bin/npm; do
		if [ -x "$p" ]; then
			echo "$p"
			return 0
		fi
	done

	return 1
}

NPM_BIN="$(find_npm || true)"
if [ -z "$NPM_BIN" ]; then
	echo "[deploy-plesk] ERROR: npm not found. Install/enable Node.js in Plesk (Node.js Toolkit) or deploy via GitHub Actions FTP." >&2
	exit 1
fi

echo "[deploy-plesk] Using npm: $NPM_BIN"

echo "[deploy-plesk] Installing dependencies..."
"$NPM_BIN" ci

echo "[deploy-plesk] Building Vite app..."
"$NPM_BIN" run build

echo "[deploy-plesk] Publishing dist to web root..."
rm -f index.html
cp -f dist/index.html ./index.html
rm -rf assets
cp -R dist/assets ./assets

echo "[deploy-plesk] Done. Serving built assets from web root."
