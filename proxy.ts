import { getSession } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export const proxy = async (req: NextRequest) => {
    const { pathname } = req.nextUrl;
    const session = await getSession();

    // proxy cms
    if (!session && pathname.startsWith('/cms') && pathname !== '/cms/sign-in') {
        return NextResponse.redirect(new URL('/cms/sign-in', req.url));
    }

    if (session && pathname === '/cms/sign-in') {
        return NextResponse.redirect(new URL('/cms', req.url));
    }

    if (session && pathname === '/cms') {
        return NextResponse.redirect(new URL('/cms/dashboard', req.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/cms/:path*'],
};
