import { createClient } from '@supabase/supabase-js'

export const supabaseInstance = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
)

export const supabaseReviewDB = supabaseInstance.from("reviews");