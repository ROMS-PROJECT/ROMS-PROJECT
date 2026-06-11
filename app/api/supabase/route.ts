import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

/**
 * 프론트엔드에서 데이터를 요청하면, 이 파일이 Supabase에서 데이터를 가져와서 꺼내와 전달해 주는 역할
 * @returns 
 */

export async function GET() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) {
        console.log(error);
        return NextResponse.json({ error: error.message });
    }

    return NextResponse.json(data);
}