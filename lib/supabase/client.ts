'use client'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

export const useSupabase = () => {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  return supabase
}
