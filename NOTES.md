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

### Per-Client Variable Costs (~200 leads/month estimate)

| Line Item | Unit Cost | Qty/Month | Monthly Cost |
|-----------|-----------|-----------|--------------|
| Claude Haiku 4.5 (AI responses) | ~$0.002/response | 200 | $0.40 |
| Twilio outbound SMS | ~$0.011/msg | 200 | $2.20 |
| Twilio inbound SMS | ~$0.011/msg | 200 | $2.20 |
| Twilio phone number (per client) | $1.15/mo | 1 | $1.15 |
| SendGrid email (marginal) | ~$0.0004/email | 200 | $0.08 |
| **Per-client variable total** | | | **~$6.04/mo** |

### Fixed Infrastructure Costs (shared across all clients)

| Item | Monthly Cost |
|------|--------------|
| Railway hosting (Flask + Postgres) | ~$10-15 |
| SendGrid Essentials (50K plan) | $19.95 |
| Namecheap domain (annualized) | ~$1.22 |
| A2P 10DLC registration (amortized) | ~$2-5 |
| Backblaze B2 backups | ~$0.01 (negligible) |
| **Total fixed** | **~$33-41/mo** |

### Per-Client Cost at Scale

| Clients | Fixed/Client | Variable/Client | Total/Client | Margin at $297/mo |
|---------|--------------|-----------------|--------------|-------------------|
| 10 | $3.50 | $6.04 | ~$9.54 | $287.46 (96.8%) |
| 25 | $1.50 | $6.04 | ~$7.54 | $289.46 (97.5%) |
| 50 | $0.75 | $6.04 | ~$6.79 | $290.21 (97.7%) |
| 84 | $0.45 | $6.04 | ~$6.49 | $290.51 (97.8%) |

### API Unit Pricing Reference

- **Twilio SMS:** $0.0083/msg + ~$0.003 carrier surcharge = ~$0.011/msg
- **Twilio phone number:** $1.15/mo (local), $2.15/mo (toll-free)
- **SendGrid Essentials 50K:** $19.95/mo base
- **Claude Haiku 4.5:** $1.00/M input tokens, $5.00/M output tokens
- **Railway Hobby:** $5/mo + usage (~$10-15 total for small app + Postgres)
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
