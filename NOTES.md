# AnvilAI — Project Notes

## Live URLs
- **Website:** https://anvilresponder.com
- **Dashboard:** https://web-production-5bf4f.up.railway.app/login
- **Login:** christian92martel@gmail.com / anvil2026

## GitHub Repos
- **Landing page:** https://github.com/christian92martel-cloud/anvil-ai-landing
- **LeadEngine backend:** https://github.com/christian92martel-cloud/leadengine

## Hosting
- **Landing page:** GitHub Pages (free), custom domain anvilresponder.com via Namecheap
- **LeadEngine backend:** Railway (web-production-5bf4f.up.railway.app)

## Namecheap
- **Username:** Marty92
- **Domain:** anvilresponder.com
- **DNS config (Advanced DNS):**
  - A record `@` → `185.199.108.153`
  - A record `@` → `185.199.109.153`
  - A record `@` → `185.199.110.153`
  - A record `@` → `185.199.111.153`
  - CNAME `www` → `christian92martel-cloud.github.io`

## Key Details
- Domain registrar: Namecheap (anvilresponder.com)
- DNS: 4x A records pointing to GitHub Pages IPs + CNAME www -> github.io
- Railway env vars: ANTHROPIC_API_KEY, TWILIO_*, SENDGRID_*, SECRET_KEY, DATABASE_URL (Postgres addon required)
- Client ID for form submissions: 1
- Database persists via Railway Postgres addon — auto-seeds default client on startup if missing

---

## Business Cost Breakdown (June 2026)

### YOUR ACTUAL Monthly Subscriptions (bills you're paying now)

| Service | Plan | Monthly Cost |
|---------|------|--------------|
| Claude Pro (Claude Code CLI) | Pro | $20.00 |
| Anthropic API (Claude Haiku for AI responses) | Build | $25.00 |
| Railway (backend hosting) | Pro | $20.00 + usage |
| SendGrid (email) | TBD — need to confirm plan | $19.95 (Essentials) or TBD |
| Twilio (SMS) | Pay-as-you-go | $0 base + per-msg usage |
| Namecheap (domain) | .com renewal | ~$1.22 (annualized) |
| GitHub | Free | $0 |
| Backblaze B2 (backups) | Pay-as-you-go | ~$0.01 |
| **Total subscriptions (before any clients)** | | **~$86-87/mo** |

**Note:** You're spending ~$86/mo before you have a single client. This is your burn rate.
- Annualized: ~$1,032/year in fixed overhead

### Per-Client Variable Costs (~200 leads/month estimate)

| Line Item | Unit Cost | Qty/Month | Monthly Cost |
|-----------|-----------|-----------|--------------|
| Claude Haiku 4.5 (AI responses) | ~$0.002/response | 200 | $0.40 |
| Twilio outbound SMS | ~$0.011/msg | 200 | $2.20 |
| Twilio inbound SMS | ~$0.011/msg | 200 | $2.20 |
| Twilio phone number (per client) | $1.15/mo | 1 | $1.15 |
| SendGrid email (marginal) | ~$0.0004/email | 200 | $0.08 |
| **Per-client variable total** | | | **~$6.04/mo** |

### True Per-Client Cost at Scale (including subscriptions)

| Clients | Subs/Client | Variable/Client | Total/Client | Margin at $297/mo | Annual Revenue |
|---------|-------------|-----------------|--------------|-------------------|----------------|
| 1 | $86.00 | $6.04 | ~$92.04 | $204.96 (69.0%) | $3,564 |
| 5 | $17.20 | $6.04 | ~$23.24 | $273.76 (92.2%) | $17,820 |
| 10 | $8.60 | $6.04 | ~$14.64 | $282.36 (95.1%) | $35,640 |
| 25 | $3.44 | $6.04 | ~$9.48 | $287.52 (96.8%) | $89,100 |
| 50 | $1.72 | $6.04 | ~$7.76 | $289.24 (97.4%) | $178,200 |
| 84 | $1.02 | $6.04 | ~$7.06 | $289.94 (97.6%) | $299,376 |

### Breakeven Analysis

| Scenario | Breakeven Point |
|----------|----------------|
| Cover subscriptions only ($86/mo) | 1 client at $297 covers it |
| $300K/year target | 84 clients at $297/mo |
| $300K/year (mixed tiers) | ~60-82 clients depending on tier mix |

### API Unit Pricing Reference

- **Twilio SMS:** $0.0083/msg + ~$0.003 carrier surcharge = ~$0.011/msg
- **Twilio phone number:** $1.15/mo (local), $2.15/mo (toll-free)
- **SendGrid Essentials 50K:** $19.95/mo base
- **Claude Haiku 4.5:** $1.00/M input tokens, $5.00/M output tokens
- **Railway Pro:** $20/mo per seat + usage (Flask + Postgres ~$10-15 usage)
- **Backblaze B2:** $0.006/GB/mo storage, free upload, $0.01/GB download
- **Namecheap .com renewal:** ~$14.18-$14.98/year

---

## Revenue Target: $300K/Year

- **At $297/mo single tier:** Need 84 clients ($299,376/yr)
- **At mixed tiers (e.g. $149/$249/$349/$549):** ~60-82 clients depending on mix
- **Current clients:** 0 (product built, sales not started)
- **Margins are very high** (~96-97%) because per-client costs are only ~$6-10/mo

---

## Competitive Position (June 2026)

### Direct Competitors

| Competitor | Price | vs AnvilAI |
|------------|-------|------------|
| Hatch (Yelp) | $600+/mo | AnvilAI is 1/2 to 1/3 the price, matches features except voice |
| LeadTruffle | $229-629/mo + $299 setup | AnvilAI beats on features (chat widget, kanban, attribution, multi-lang), no setup fee |
| Callingly | $100-750/mo | Speed-to-lead focused, no email/chat/qualification |
| ServiceAgent | $0-279/mo | Free tier but credit-based, less feature-rich |
| GoHighLevel | $194+/mo (with AI) | General purpose, not contractor-specific |
| AgentZap | $109-899/mo + $399 setup | Voice-only, deep FSM integrations |
| Housecall Pro + AI | $764-864/mo total | Full FSM, very expensive with AI add-ons |
| ServiceTitan | $245-398/tech/mo | Enterprise FSM, extremely expensive |

### AnvilAI Feature Advantages
- AI SMS + Email + Chat Widget + Web Form (most competitors only do 1-2 channels)
- Auto-qualification with configurable fields
- Configurable follow-up sequences
- Pipeline/Kanban board
- Revenue tracking & lead values
- Marketing attribution & ROI
- Multi-language (11 languages)
- CSV import/export
- Custom AI tone, greeting, business rules
- No setup fee, no per-message fees
- 2-minute response guarantee (or month free)

### AnvilAI Feature Gaps (Tier 4 Roadmap)
- **AI voice/phone answering** — not yet built
- **Missed-call text-back** — not yet built
- **Multi-location/franchise support** — not yet built
- **Reputation management (review requests)** — not yet built

---

## Pricing Strategy — TODO (Pick Up Here Tomorrow)

### Current State
- Landing page has **single tier at $297/mo**
- Demo script and outreach templates are **outdated** (mention "free week" which landing page doesn't offer)
- No tier logic in backend (all clients get everything)

### Decision Needed: Tier Structure
Options discussed:
- **Option A:** Keep single tier at $297/mo (simple, need 84 clients)
- **Option B:** 3 tiers at $199/$349/$549
- **Option C:** 4 tiers (add Tier 4 with voice/phone features at premium price)

### Tier 4 Concept (Premium/Enterprise)
Would include everything in lower tiers PLUS:
- AI voice/phone answering
- Missed-call text-back
- Multi-location support
- Dedicated account manager
- Custom AI training
- Priority SLA support
- API access
- Price TBD — competitors charge $600-$1,500+ for equivalent

### Open Questions
1. What price for each tier?
2. What features go in which tier? (need to decide feature gating)
3. Do we need tier logic in the backend, or just on the landing page for now?
4. Need to understand true costs better before finalizing (cost analysis above helps)
5. Demo script and outreach templates need rewriting to match current product
