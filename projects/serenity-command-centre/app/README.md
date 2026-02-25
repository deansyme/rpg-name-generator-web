# Serenity Command Centre — App (Flutter)

Targets:
- Android
- Web (served at https://app.serenityhq.uk)

## Local prerequisites
- Flutter SDK installed

## Create the Flutter project (run from repo root)
```bash
cd projects/serenity-command-centre/app
flutter create --platforms=android,web serenity_command_centre
```

## Configure Supabase
After project creation, set:
- `SUPABASE_URL=https://api.serenityhq.uk`
- `SUPABASE_ANON_KEY=<publishable key>`

See `serenity_command_centre/lib/config/supabase.dart`.
