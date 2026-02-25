# Serenity Command Centre — RUNBOOK

## DNS
Add A records:
- api.serenityhq.uk → 217.154.43.216
- app.serenityhq.uk → 217.154.43.216
(Optional) @ → 217.154.43.216

## Deployment outline (target)
- Reverse proxy (nginx/traefik/caddy) terminates TLS
- Supabase self-hosted (docker compose)
- App landing (static) at app.serenityhq.uk (optional)

## Security
- Disable public signup
- Single Dean user
- Service role key server-only
- Optional: IP allowlist for admin endpoints

## Backups
- Nightly Postgres dump + storage sync
- Weekly offsite copy to Drive (optional)
