# opencode-agent-eval

**640 offline LLM agent evaluation tasks** adapted from [VitaBench](https://github.com/meituan-longcat/vitabench) (ICLR 2026) and [DeepPlanning](https://github.com/QwenLM/Qwen-Agent/tree/main/benchmark/deepplanning) (Qwen, Jan 2026), for testing with [opencode](https://github.com/opencode-ai/opencode).

All tests run **fully offline** — no web searches or external API calls required.

## Task Summary

| Suite | Domain | Tasks | Source |
|---|---|---|---|
| **VitaBench** | Delivery | 100 | [meituan-longcat/vitabench](https://github.com/meituan-longcat/vitabench) |
| | In-store | 100 | |
| | OTA (hotel/flight/train) | 100 | |
| | Cross-domain | 100 | |
| **DeepPlanning** | Travel Planning | 120 | [QwenLM/Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) |
| | Shopping L1 (basic) | 50 | |
| | Shopping L2 (+ budget) | 50 | |
| | Shopping L3 (+ coupons) | 20 | |
| **Total** | | **640** | |

## How It Works

Each of the 640 tasks is a standalone eval directory:

```
evals/vitabench-delivery-001/
├── PROMPT.md           # Task description for the agent
├── EVAL.ts             # Hidden vitest assertions (grading)
├── solution.ts         # Skeleton with TODO stubs
├── environment.json    # Embedded task data (stores, products, etc.)
├── expected.json       # Ground truth (expected orders/answers)
├── package.json
└── tsconfig.json
```

**VitaBench tasks**: The agent reads environment data (stores, products, weather, user profile) and implements `solve()` to return the correct orders matching the user's natural language request. Graded against expected store IDs, product IDs, prices, and rubrics.

**DeepPlanning Travel tasks**: The agent reads the trip query and constraint metadata, then implements `planTrip()` to return the correct itinerary. Graded against hard constraints (specific hotel names, train numbers, restaurants, attractions, budgets).

**DeepPlanning Shopping tasks**: The agent parses a shopping request and implements `buildCart()` to return the optimal product selection. Graded on structural validity, budget compliance (L2+), and coupon optimization (L3).

## Usage

```bash
# Run ALL 640 evals
./run-benchmark-evals.sh

# Run with a specific model
./run-benchmark-evals.sh --model nvidia/moonshotai/kimi-k2.5

# ── Run by suite ──
./run-benchmark-evals.sh --suite vitabench              # all 400 VitaBench
./run-benchmark-evals.sh --suite vitabench-delivery      # 100 delivery
./run-benchmark-evals.sh --suite vitabench-instore       # 100 in-store
./run-benchmark-evals.sh --suite vitabench-ota           # 100 OTA
./run-benchmark-evals.sh --suite vitabench-cross_domain  # 100 cross-domain
./run-benchmark-evals.sh --suite deepplan                # all 240 DeepPlanning
./run-benchmark-evals.sh --suite deepplan-travel         # 120 travel
./run-benchmark-evals.sh --suite deepplan-shopping       # all 120 shopping
./run-benchmark-evals.sh --suite deepplan-shopping-L1    # 50 shopping L1
./run-benchmark-evals.sh --suite deepplan-shopping-L2    # 50 shopping L2
./run-benchmark-evals.sh --suite deepplan-shopping-L3    # 20 shopping L3

# ── Run a range ──
./run-benchmark-evals.sh --suite vitabench-delivery --range 1-10   # first 10

# ── Run single eval ──
./run-benchmark-evals.sh --eval vitabench-ota-042

# ── See help ──
./run-benchmark-evals.sh --help
```

## Regenerating Evals

To regenerate all 640 evals from the original source data:

```bash
# Clone source repos
git clone https://github.com/meituan-longcat/vitabench /tmp/vitabench-source
git clone https://github.com/QwenLM/Qwen-Agent /tmp/deepplanning-source

# Generate
python3 generate-all-evals.py
```

## Requirements

- [opencode](https://github.com/opencode-ai/opencode) CLI installed
- Node.js 18+
- An LLM model configured via `opencode.json`

## Credits

- **VitaBench**: Meituan LongCat team — [paper](https://arxiv.org/abs/2509.26490) | [repo](https://github.com/meituan-longcat/vitabench) | [leaderboard](https://vitabench.github.io/)
- **DeepPlanning**: Qwen team (Alibaba) — [paper](https://arxiv.org/abs/2601.18137) | [repo](https://github.com/QwenLM/Qwen-Agent) | [website](https://qwenlm.github.io/Qwen-Agent/en/benchmarks/deepplanning/)
