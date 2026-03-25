import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        message: '안녕 😆 서버 응답이다!',
        time: new Date().toISOString(),
    });
}

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json({
        received: body,
        message: 'POST 잘 받았다 😎',
    });
}