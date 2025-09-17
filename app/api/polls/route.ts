import { NextResponse } from 'next/server';
import { prisma as db } from '../../../lib/db';

export async function GET() {
    const polls = await db.poll.findMany();
    return NextResponse.json(polls);
}

export async function POST(request: Request) {
    const { title, options } = await request.json();
    const newPoll = await db.poll.create({
        data: {
            title,
            options,
        },
    });
    return NextResponse.json(newPoll, { status: 201 });
}