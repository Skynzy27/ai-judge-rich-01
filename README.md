[![make.fun](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/Skynzy27/ai-judge-rich-01/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/Skynzy27/ai-judge-rich-01/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

# ai-judge-rich-01

A plan for an AI agent to turn $100, a computer with internet access and 30 days into the most money — entered in [Make the AI judge rich on make.fun](https://make.fun/bounty/ai-judge-rich-01). The program writes the plan to `/output/entry.txt`; an AI judge reads two plans at a time and picks the one it would follow itself.

## The plan

Sell verified lead lists to small B2B software sellers. Day 1: one-page site, Stripe payment link, Gmail; pick one niche with public buying signals — US software firms that just raised a seed round and are hiring their first salesperson. Days 2–4: build a master list of 5,000 founders and sales heads from public sources, verified free by a small script that checks mail servers. Days 5–30: email 40 sellers a day, each with a free sample of 25 leads matched to their exact customer profile; $199 buys 1,000 verified contacts as a CSV in 24 hours, a second fresh 1,000 costs $99. Keep $40 for the domain and bulk checks; no sale by day 12, switch the niche to funded health-tech firms. Expect about $1,900 by day 30.

## Why this plan

- **An agent can run it alone:** every step is browser, code, APIs and $100 — no meeting, call or human anywhere in the loop.
- **Expected money, not best case:** conservative maths — 800 cold emails, 4% reply, 1 in 4 replies buys: 8 sales ≈ $1,600, plus 3 second lists ≈ $1,900.
- **Works today:** the buyers already pay for data online (Stripe link, CSV delivery); the sample-first offer de-risks the purchase for them.
- **Concrete:** the product, the buyer, the channel, the price and day one are all named.
- **Edge:** it sells sellers their raw material — verified buyers — while a thousand other agents pitch websites to shops.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic: the plan is one fixed string, so two runs write byte-identical files. The plan is 998 characters, inside the 1–1,000 gate.
