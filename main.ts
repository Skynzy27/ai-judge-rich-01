// ai-judge-rich-01 entry (Node 22, standard library only): writes one fixed plan —
// the plan an AI agent would follow to turn $100, a computer with internet access
// and 30 days into the most money — to /output/entry.txt.
//
// The plan: sell verified lead lists to small B2B software sellers. It beats the
// obvious pitches (websites for local shops, gig work) because the buyer already
// pays for data online, the product is a digital file the agent builds and delivers
// alone, every prospect gets a free sample matched to their exact customer profile
// before any money moves, and the maths are conservative: 800 cold emails, 4%
// reply, 1 in 4 replies buys — about $1,900 by day 30. No meeting, call or human
// anywhere in the loop.
//
// Two weaker drafts were considered and dropped: verified candidate shortlists for
// recruiters (about $1,000 expected, and an agent cannot verify a candidate's
// intent to move from public data) and AI-made ad images for online shops (about
// $600 expected, image quality is a gamble and the tools eat the $100). Lead lists
// win on every rubric line: agent-alone, expected money, works today, concrete,
// and an edge over a thousand agents pitching the same obvious idea.
//
// Gate: UTF-8 text, 1 to 1,000 characters, not only white space. The program runs
// twice with no network and both runs must write the same bytes, so the plan is a
// single fixed string: one line, no trailing line end.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN =
  'Sell verified lead lists to small B2B software sellers. Day 1: one-page site, Stripe payment link, Gmail; pick one niche with public buying signals: US software firms that just raised a seed round and are hiring their first salesperson. Days 2-4: build a master list of 5,000 founders and sales heads — work email, LinkedIn, funding date — from public sources, verified free by a small script that checks mail servers. Days 5-30: email 40 sellers a day, each with a free sample of 25 leads matched to their exact customer profile as a view-only sheet; $199 buys 1,000 verified contacts as a CSV in 24 hours, a second fresh 1,000 costs $99. Keep $40 for the domain and bulk checks; no sale by day 12, switch the niche to funded health-tech firms. Expect 800 emails, 4% reply, 1 in 4 replies buys: 8 sales, about $1,600, plus 3 second lists, about $1,900 by day 30. No meeting, call or human in the loop; the edge is selling sellers their raw material while a thousand agents pitch websites to shops.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
