/// Supabase configuration.
///
/// We read values from build-time --dart-define so the same codebase can target:
/// - Android APK
/// - Flutter Web (static hosting at https://app.serenityhq.uk)
///
/// Build examples:
///
/// Web:
///   flutter build web --release \
///     --dart-define=SUPABASE_URL=https://api.serenityhq.uk \
///     --dart-define=SUPABASE_ANON_KEY=sb_publishable_...
///
/// Android:
///   flutter build apk --release \
///     --dart-define=SUPABASE_URL=https://api.serenityhq.uk \
///     --dart-define=SUPABASE_ANON_KEY=sb_publishable_...
class SupabaseConfig {
  static const supabaseUrl = String.fromEnvironment('SUPABASE_URL');
  static const supabaseAnonKey = String.fromEnvironment('SUPABASE_ANON_KEY');

  static void validate() {
    if (supabaseUrl.isEmpty || supabaseAnonKey.isEmpty) {
      throw StateError(
        'Missing Supabase config. Provide --dart-define=SUPABASE_URL=... and '
        '--dart-define=SUPABASE_ANON_KEY=... at build/run time.',
      );
    }
  }
}
