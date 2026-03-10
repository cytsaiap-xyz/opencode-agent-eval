#!/usr/bin/env bash
set -euo pipefail

# run-eval.sh — Run a single eval: opencode solves the task, pytest grades it.
# Usage:
#   ./run-eval.sh evals/01-fix-bug-off-by-one
#   ./run-eval.sh evals/01-fix-bug-off-by-one --model nvidia/moonshotai/kimi-k2.5

usage() {
  echo "Usage: $0 <eval-dir> [--model <provider/model>]"
  exit 1
}

# --- Parse args ---
EVAL_DIR=""
MODEL="nvidia/moonshotai/kimi-k2.5"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --model) MODEL="${2:?--model requires a value}"; shift 2 ;;
    --help|-h) usage ;;
    *) EVAL_DIR="$1"; shift ;;
  esac
done

[ -z "$EVAL_DIR" ] && usage

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RESULTS_DIR="$SCRIPT_DIR/results"
EVAL_NAME="$(basename "$EVAL_DIR")"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
WORK_DIR="$(mktemp -d)/eval-$EVAL_NAME"

mkdir -p "$RESULTS_DIR"

echo "============================================"
echo "  EVAL: $EVAL_NAME"
echo "  MODEL: $MODEL"
echo "  WORK DIR: $WORK_DIR"
echo "============================================"

# --- Step 1: Copy eval to temp work directory ---
echo "[1/6] Copying eval to work directory..."
cp -r "$SCRIPT_DIR/$EVAL_DIR" "$WORK_DIR"

# --- Step 2: Hide EVAL.py so agent cannot see grading criteria ---
echo "[2/6] Hiding EVAL.py from agent..."
EVAL_PY="$WORK_DIR/EVAL.py"
EVAL_PY_HIDDEN="$WORK_DIR/.EVAL.py.hidden"
if [ -f "$EVAL_PY" ]; then
  mv "$EVAL_PY" "$EVAL_PY_HIDDEN"
else
  echo "ERROR: No EVAL.py found in $EVAL_DIR"
  exit 1
fi

# --- Step 3: Copy opencode.json into work dir ---
echo "[3/6] Setting up opencode config..."
cp "$SCRIPT_DIR/opencode.json" "$WORK_DIR/opencode.json"

# --- Step 4: Install dependencies ---
echo "[4/6] Installing dependencies..."
if [ -f "$WORK_DIR/requirements.txt" ]; then
  pip install -q -r "$WORK_DIR/requirements.txt" 2>&1 | tail -5
fi

# --- Step 5: Run opencode on the prompt ---
echo "[5/6] Running opencode agent..."
PROMPT="$(cat "$WORK_DIR/PROMPT.md")"
AGENT_START="$(date +%s)"

opencode run "$PROMPT" \
  --model "$MODEL" \
  --dir "$WORK_DIR" \
  2>&1 | tee "$WORK_DIR/agent-output.log" || true

AGENT_END="$(date +%s)"
AGENT_DURATION=$((AGENT_END - AGENT_START))
echo "  Agent finished in ${AGENT_DURATION}s"

# --- Step 6: Restore EVAL.py and run pytest ---
echo "[6/6] Grading with pytest..."
mv "$EVAL_PY_HIDDEN" "$EVAL_PY"

# Run pytest
GRADE_START="$(date +%s)"
set +e
PYTEST_OUTPUT="$(cd "$WORK_DIR" && python -m pytest EVAL.py -v 2>&1)"
PYTEST_EXIT=$?
set -e
GRADE_END="$(date +%s)"
GRADE_DURATION=$((GRADE_END - GRADE_START))

echo "$PYTEST_OUTPUT"

# --- Determine result ---
if [ $PYTEST_EXIT -eq 0 ]; then
  RESULT="PASS"
  echo ""
  echo "  RESULT: PASS"
else
  RESULT="FAIL"
  echo ""
  echo "  RESULT: FAIL"
fi

echo "  Grading took ${GRADE_DURATION}s"
echo "  Work dir preserved at: $WORK_DIR"

# --- Save JSON result ---
RESULT_FILE="$RESULTS_DIR/${EVAL_NAME}_${TIMESTAMP}.json"
cat > "$RESULT_FILE" << RJSON
{
  "eval": "$EVAL_NAME",
  "model": "$MODEL",
  "result": "$RESULT",
  "agent_duration_s": $AGENT_DURATION,
  "grade_duration_s": $GRADE_DURATION,
  "timestamp": "$TIMESTAMP",
  "work_dir": "$WORK_DIR",
  "pytest_exit_code": $PYTEST_EXIT
}
RJSON

echo "  Result saved to: $RESULT_FILE"
echo ""

# Return exit code matching result
[ "$RESULT" = "PASS" ]
