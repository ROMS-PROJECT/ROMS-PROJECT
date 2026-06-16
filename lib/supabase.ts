import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Next.js 개발 모드에서 파일 저장 시(Hot Reload) 클라이언트가 중복 생성되는 경고를 방지합니다.
const globalForSupabase = globalThis as unknown as {
  supabase: ReturnType<typeof createClient> | undefined;
};

export const supabase =
  globalForSupabase.supabase ?? createClient(supabaseUrl, supabaseKey);

if (process.env.NODE_ENV !== 'production') globalForSupabase.supabase = supabase;