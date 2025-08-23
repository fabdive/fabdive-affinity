import { createBrowserClient } from '@supabase/ssr'

// ✅ Ne passe aucun argument ici — la config est lue automatiquement
export const supabase = createBrowserClient()
