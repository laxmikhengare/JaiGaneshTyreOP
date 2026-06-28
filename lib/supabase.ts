import { createClient } from "@supabase/supabase-js";

// Server-only client using the service-role key. Never import this in client code.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null; // not configured — caller falls back to console log
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
