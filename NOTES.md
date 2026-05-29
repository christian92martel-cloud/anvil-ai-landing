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

## Key Details
- Domain registrar: Namecheap (anvilresponder.com)
- DNS: 4x A records pointing to GitHub Pages IPs + CNAME www -> github.io
- Railway env vars: ANTHROPIC_API_KEY, TWILIO_*, SENDGRID_*, SECRET_KEY, DATABASE_PATH
- Client ID for form submissions: 1
- Database resets on Railway redeploy (no persistent volume) — auto-seeds on startup
