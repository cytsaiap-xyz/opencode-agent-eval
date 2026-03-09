#!/usr/bin/env bash
set -uo pipefail

# run-benchmark-evals.sh — Run VitaBench (400) + DeepPlanning (240) evals.
# All tests are offline (no web access required).
#
# Usage:
#   ./run-benchmark-evals.sh                                    # run all 640
#   ./run-benchmark-evals.sh --suite vitabench                  # all 400 VitaBench
#   ./run-benchmark-evals.sh --suite vitabench-delivery          # 100 delivery
#   ./run-benchmark-evals.sh --suite vitabench-instore           # 100 instore
#   ./run-benchmark-evals.sh --suite vitabench-ota               # 100 OTA
#   ./run-benchmark-evals.sh --suite vitabench-cross_domain      # 100 cross-domain
#   ./run-benchmark-evals.sh --suite deepplan                   # all 240 DeepPlanning
#   ./run-benchmark-evals.sh --suite deepplan-travel            # 120 travel
#   ./run-benchmark-evals.sh --suite deepplan-shopping          # 120 shopping (L1+L2+L3)
#   ./run-benchmark-evals.sh --suite deepplan-shopping-L1       # 50 shopping L1
#   ./run-benchmark-evals.sh --suite deepplan-shopping-L2       # 50 shopping L2
#   ./run-benchmark-evals.sh --suite deepplan-shopping-L3       # 20 shopping L3
#   ./run-benchmark-evals.sh --eval vitabench-delivery-001      # single eval
#   ./run-benchmark-evals.sh --range 1-10 --suite vitabench-delivery  # first 10

MODEL="opencode/minimax-m2.5-free"
SUITE=""
SINGLE_EVAL=""
RANGE=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --model) MODEL="${2:?--model requires a value}"; shift 2 ;;
    --suite) SUITE="${2:?--suite requires a value}"; shift 2 ;;
    --eval) SINGLE_EVAL="${2:?--eval requires a value}"; shift 2 ;;
    --range) RANGE="${2:?--range requires a value (e.g., 1-10)}"; shift 2 ;;
    --help|-h)
      cat << 'HELP'
Usage: ./run-benchmark-evals.sh [OPTIONS]

Options:
  --model <provider/model>   Model to test (default: opencode/minimax-m2.5-free)
  --suite <suite-name>       Run a specific suite (see below)
  --eval <eval-name>         Run a single eval by name
  --range <start-end>        Run only tasks #start to #end within the suite (e.g., 1-10)

Suites (640 total tasks):
  VitaBench (400 tasks — multi-constraint reasoning, from meituan-longcat/vitabench):
    vitabench                All 400 VitaBench tasks
    vitabench-delivery       100 delivery domain tasks
    vitabench-instore        100 in-store domain tasks
    vitabench-ota            100 OTA (hotel/flight/train) tasks
    vitabench-cross_domain   100 cross-domain tasks

  DeepPlanning (240 tasks — planning & optimization, from QwenLM/Qwen-Agent):
    deepplan                 All 240 DeepPlanning tasks
    deepplan-travel          120 travel planning tasks
    deepplan-shopping        120 shopping tasks (all levels)
    deepplan-shopping-L1      50 shopping level 1 (basic)
    deepplan-shopping-L2      50 shopping level 2 (+ budget)
    deepplan-shopping-L3      20 shopping level 3 (+ coupons)

Examples:
  ./run-benchmark-evals.sh --suite vitabench-delivery --model nvidia/moonshotai/kimi-k2.5
  ./run-benchmark-evals.sh --suite deepplan-travel --range 1-10
  ./run-benchmark-evals.sh --eval vitabench-ota-042
HELP
      exit 0
      ;;
    *) shift ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
EVALS_DIR="$SCRIPT_DIR/evals"

# ── Build eval list ──
EVAL_LIST=()

if [ -n "$SINGLE_EVAL" ]; then
  EVAL_LIST=("$SINGLE_EVAL")
else
  # Determine prefix filter
  PREFIX=""
  case "${SUITE}" in
    vitabench)              PREFIX="vitabench-" ;;
    vitabench-delivery)     PREFIX="vitabench-delivery-" ;;
    vitabench-instore)      PREFIX="vitabench-instore-" ;;
    vitabench-ota)          PREFIX="vitabench-ota-" ;;
    vitabench-cross_domain) PREFIX="vitabench-cross_domain-" ;;
    deepplan)               PREFIX="deepplan-" ;;
    deepplan-travel)        PREFIX="deepplan-travel-" ;;
    deepplan-shopping)      PREFIX="deepplan-shopping-" ;;
    deepplan-shopping-L1)   PREFIX="deepplan-shopping-L1-" ;;
    deepplan-shopping-L2)   PREFIX="deepplan-shopping-L2-" ;;
    deepplan-shopping-L3)   PREFIX="deepplan-shopping-L3-" ;;
    "")                     PREFIX="" ;;  # all evals
    *)
      echo "ERROR: Unknown suite '$SUITE'. Run with --help for options."
      exit 1
      ;;
  esac

  # Collect matching eval dirs (sorted)
  for eval_dir in "$EVALS_DIR"/${PREFIX}*/; do
    [ -d "$eval_dir" ] || continue
    eval_name="$(basename "$eval_dir")"
    EVAL_LIST+=("$eval_name")
  done

  # Apply range filter
  if [ -n "$RANGE" ]; then
    RANGE_START="${RANGE%-*}"
    RANGE_END="${RANGE#*-}"
    FILTERED=()
    for i in "${!EVAL_LIST[@]}"; do
      n=$((i + 1))
      if [ "$n" -ge "$RANGE_START" ] && [ "$n" -le "$RANGE_END" ]; then
        FILTERED+=("${EVAL_LIST[$i]}")
      fi
    done
    EVAL_LIST=("${FILTERED[@]}")
  fi
fi

if [ ${#EVAL_LIST[@]} -eq 0 ]; then
  echo "ERROR: No evals found for suite='${SUITE:-all}' range='${RANGE:-all}'"
  exit 1
fi

PASS=0
FAIL=0
TOTAL=0
RESULTS=()

echo "════════════════════════════════════════════════"
echo "  Benchmark Evals (Offline)"
echo "  Model:  $MODEL"
echo "  Suite:  ${SUITE:-all}"
echo "  Range:  ${RANGE:-all}"
echo "  Evals:  ${#EVAL_LIST[@]}"
echo "════════════════════════════════════════════════"
echo ""

START_TIME="$(date +%s)"

for eval_name in "${EVAL_LIST[@]}"; do
  TOTAL=$((TOTAL + 1))
  echo "─── [$TOTAL/${#EVAL_LIST[@]}] $eval_name ───"

  if [ ! -d "$EVALS_DIR/$eval_name" ]; then
    echo "  ERROR: Eval directory not found: $EVALS_DIR/$eval_name"
    FAIL=$((FAIL + 1))
    RESULTS+=("SKIP  $eval_name (not found)")
    continue
  fi

  if "$SCRIPT_DIR/run-eval.sh" "evals/$eval_name" --model "$MODEL"; then
    PASS=$((PASS + 1))
    RESULTS+=("PASS  $eval_name")
  else
    FAIL=$((FAIL + 1))
    RESULTS+=("FAIL  $eval_name")
  fi

  echo ""
done

END_TIME="$(date +%s)"
DURATION=$((END_TIME - START_TIME))

# ── Summary ──
echo ""
echo "════════════════════════════════════════════════"
echo "  BENCHMARK RESULTS"
echo "════════════════════════════════════════════════"
echo ""

# Count by category
VB_PASS=0; VB_FAIL=0; VB_TOTAL=0
DP_PASS=0; DP_FAIL=0; DP_TOTAL=0

for r in "${RESULTS[@]}"; do
  if [[ "$r" == *"vitabench"* ]]; then
    VB_TOTAL=$((VB_TOTAL + 1))
    [[ "$r" == PASS* ]] && VB_PASS=$((VB_PASS + 1)) || VB_FAIL=$((VB_FAIL + 1))
  elif [[ "$r" == *"deepplan"* ]]; then
    DP_TOTAL=$((DP_TOTAL + 1))
    [[ "$r" == PASS* ]] && DP_PASS=$((DP_PASS + 1)) || DP_FAIL=$((DP_FAIL + 1))
  fi
done

if [ "$VB_TOTAL" -gt 0 ]; then
  echo "  VitaBench:     $VB_PASS/$VB_TOTAL pass ($(( VB_PASS * 100 / VB_TOTAL ))%)"
fi
if [ "$DP_TOTAL" -gt 0 ]; then
  echo "  DeepPlanning:  $DP_PASS/$DP_TOTAL pass ($(( DP_PASS * 100 / DP_TOTAL ))%)"
fi
echo ""
echo "  Total: $TOTAL | Pass: $PASS | Fail: $FAIL | Rate: $(( PASS * 100 / TOTAL ))%"
echo "  Duration: ${DURATION}s"
echo "════════════════════════════════════════════════"

# Save summary JSON
SUMMARY_FILE="$SCRIPT_DIR/results/benchmark-summary-$(date +%Y%m%d-%H%M%S).json"
mkdir -p "$SCRIPT_DIR/results"
cat > "$SUMMARY_FILE" << SJSON
{
  "model": "$MODEL",
  "suite": "${SUITE:-all}",
  "total": $TOTAL,
  "pass": $PASS,
  "fail": $FAIL,
  "pass_rate": $(( PASS * 100 / TOTAL )),
  "vitabench_pass": $VB_PASS,
  "vitabench_total": $VB_TOTAL,
  "deepplanning_pass": $DP_PASS,
  "deepplanning_total": $DP_TOTAL,
  "duration_s": $DURATION,
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
SJSON
echo "  Summary saved to: $SUMMARY_FILE"

# Exit with failure if any eval failed
[ "$FAIL" -eq 0 ]
