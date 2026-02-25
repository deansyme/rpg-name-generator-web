# HEARTBEAT.md

# Serenity heartbeat tasks
# Goal: every ~30 minutes, check this list and do the work / send updates.
# HEARTBEAT.md is a *short active queue*, not a full backlog.
# Rules:
# - Keep <= 5 Active tasks (move extra items to Notion/GitHub/backlog docs)
# - Each task should be actionable + verifiable (clear next step)
# - On each heartbeat: REMOVE done tasks, EDIT tasks to the next concrete step

## Active tasks
- Serenity Command Centre: Flutter app (Android + Web) — **PAUSED** (self-hosted Supabase was overloading the VPS; waiting on Dean to decide backend: hosted Supabase vs VPS upgrade vs alternative).
- Google APIs: waiting on Dean to choose OAuth vs service account + confirm Google account to own the GCP project (checklist ready: `projects/google-api-setup/CHECKLIST.md`).
- Email sweep (every heartbeat / ~30 mins): use **Gmail API (OAuth refresh token)** to check `serenitytherealm@gmail.com` for new important/urgent emails; **always** ping Dean on Telegram for any **unread** email from `@subcold.com` (script: `node gmail/check-unread.cjs --from @subcold.com`) **and** also check for **new replies** from key people (even if already marked read), e.g. Lauren (script: `node gmail/check-unread.cjs --all --from lauren@subcold.com --q "newer_than:2d"`).
- Memory hygiene: every few days, distill recent `memory/YYYY-MM-DD.md` into `MEMORY.md` + relevant `projects/*/{STATUS,DECISIONS,RUNBOOK}.md` (keep MEMORY.md short).

## Waiting on Dean
- Realm of Adventure website (P0): Blocked until funds available for Shopify billing. (Optional: we can put up a free temporary landing page so the domain isn’t dead.)
- Campaign Codex: Redesign planned when Copilot usage resets (**28th**). When ready, paste **repo URL + production URL + staging/preview URL** so I can update `projects/campaign-codex/STATUS.md`.

## Upcoming (tomorrow)
- (none)
