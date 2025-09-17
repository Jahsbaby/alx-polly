import { NextResponse } from 'next/server';
import { prisma as db } from '../../../../../lib/db';

export async function GET(request, { params }) {
    const { id } = params;
    const poll = await getPollById(id);

    if (!poll) {
        return NextResponse.json({ message: 'Poll not found' }, { status: 404 });
    }

    return NextResponse.json(poll);
}

export async function PUT(request, { params }) {
    const { id } = params;
    const data = await request.json();
    const updatedPoll = await updatePoll(id, data);

    if (!updatedPoll) {
        return NextResponse.json({ message: 'Poll not found or update failed' }, { status: 404 });
    }

    return NextResponse.json(updatedPoll);
}

export async function DELETE(request, { params }) {
    const { id } = params;
    const deleted = await deletePoll(id);

    if (!deleted) {
        return NextResponse.json({ message: 'Poll not found or delete failed' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Poll deleted successfully' });
}