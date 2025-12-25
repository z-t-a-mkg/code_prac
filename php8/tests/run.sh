#!/usr/bin/env bash
set -euo pipefail

TARGET="$(cd "$(dirname "$0")/.." && pwd)/app/index.php"

if rg -n "TODO" "$TARGET" > /dev/null; then
  echo "FAIL: TODOが残っています。実装を進めてください。"
  exit 1
fi

echo "PASS: TODOが見つかりませんでした。"
