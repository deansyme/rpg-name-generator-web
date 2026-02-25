# Serenity Command Centre — STATUS

## Goal
Private Android app for Dean to replace Telegram for Dean↔Serenity workflow, and surface dashboards (tasks/projects/skills).

Domain: serenityhq.uk
Planned subdomains:
- api.serenityhq.uk
- app.serenityhq.uk

## v1 MVP (agreed)
- Single-user login (Dean)
- One chat room (Dean + Serenity bot identity)
- Text + attachments + voice notes
- Pins
- Search (basic)
- Home dashboard: Notion Today/Doing/This Week
- Quick actions (chat slash commands): create Notion task, send email draft/send

## Backend (agreed)
- Supabase self-hosted on existing VPS (Docker)
- Flutter Android app
- Push notifications via FCM

## Current state (today)
- DNS: `serenityhq.uk`, `app.serenityhq.uk`, `api.serenityhq.uk` are pointed at the VPS.
- SSL: valid for root + `app` + `api`.
- Supabase: self-hosted dev stack running and reachable at `https://api.serenityhq.uk` (Auth health endpoint returns GoTrue).
- Public signup: disabled.

## Next step
Scaffold Flutter project (Android + Web) under `projects/serenity-command-centre/app/` and wire Supabase config:
- `SUPABASE_URL=https://api.serenityhq.uk`
- `SUPABASE_ANON_KEY` (publishable)

Then build:
- Web → upload `build/web/` to Plesk at `app.serenityhq.uk/httpdocs/`
- Android → produce first APK.
