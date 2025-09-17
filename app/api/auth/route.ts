import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { email, password } = await request.json();

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }

        return NextResponse.json({ message: 'User logged in successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
    }
}

export async function REGISTER(request: Request) {
    const { email, password } = await request.json();

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred during registration' }, { status: 500 });
    }
}
