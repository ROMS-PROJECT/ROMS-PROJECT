import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types'; // 👈 추가!

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Next.js 개발 모드에서 핫 리로드(저장 시 자동 새로고침) 시 클라이언트가 중복 생성되는 것을 방지합니다.
const globalForSupabase = globalThis as unknown as {
  supabase: ReturnType<typeof createClient<Database>> | undefined;
};

// 👈 createClient 바로 뒤에 <Database> 추가!
export const supabase =
  globalForSupabase.supabase ?? createClient<Database>(supabaseUrl, supabaseKey);

if (process.env.NODE_ENV !== 'production') globalForSupabase.supabase = supabase;
