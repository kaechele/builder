import {
  PUBLIC_SUPABASE_PUBLIC_KEY,
  PUBLIC_SUPABASE_URL,
} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_PUBLIC_KEY,
  {
    // auth: {
    //   autoRefreshToken: true,
    //   persistSession: true,
    // },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  },
);
