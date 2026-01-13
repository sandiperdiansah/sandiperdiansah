import prisma from '@/prisma/prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { headers } from 'next/headers';

const TRUSTED_ORIGINS = process.env.BETTER_AUTH_TRUSTED_ORIGINS!.split(',');

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
    trustedOrigins: TRUSTED_ORIGINS,
    plugins: [nextCookies()],
});

export const getSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return session;
};
