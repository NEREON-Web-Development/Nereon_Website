#!/usr/bin/env bash
set -euo pipefail

# Run this from the deployed repo directory in Plesk (usually httpdocs).
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

# Web root to serve files from (recommended: ./public in Plesk).
WEB_ROOT="${PLESK_WEB_ROOT:-$ROOT_DIR/public}"

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

NODE_BIN_DIR="$(dirname "$NPM_BIN")"
export PATH="$NODE_BIN_DIR:$PATH"

if ! command -v node >/dev/null 2>&1; then
	echo "[deploy-plesk] ERROR: node not found in PATH even after npm detection." >&2
	exit 1
fi

echo "[deploy-plesk] Using npm: $NPM_BIN"
echo "[deploy-plesk] Using node: $(command -v node)"

echo "[deploy-plesk] Installing dependencies..."
"$NPM_BIN" ci --omit=dev

echo "[deploy-plesk] Building Vite app..."
"$NPM_BIN" run build

echo "[deploy-plesk] Publishing dist to web root: $WEB_ROOT"
mkdir -p "$WEB_ROOT"

# Clear old build artifacts to prevent stale hashed files.
rm -f "$WEB_ROOT/index.html"
rm -rf "$WEB_ROOT/assets"

cp -f dist/index.html "$WEB_ROOT/index.html"
cp -R dist/assets "$WEB_ROOT/assets"

echo "[deploy-plesk] Done. Serving built assets from: $WEB_ROOT"
