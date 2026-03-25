import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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