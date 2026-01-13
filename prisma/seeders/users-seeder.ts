import { auth } from '@/lib/auth';
import { PrismaClient } from '@/prisma/generated/client';

export const userSeeder = async (prisma: PrismaClient): Promise<void> => {
    console.log('START, SEED#USERS_SEED');

    const ADMIN_NAME = process.env.ADMIN_NAME;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
        console.log('Admin credentials not found');
        await prisma.$disconnect();
        process.exit(1);
    }

    try {
        await auth.api.signUpEmail({
            body: {
                name: ADMIN_NAME,
                email: ADMIN_EMAIL,
                password: ADMIN_PASSWORD,
            },
        });

        console.log('SUCCESS, SEED#USERS_SEED');
    } catch (error) {
        console.log('ERROR, SEED#USERS_SEED', error);
        process.exit(1);
    } finally {
        console.log('END, SEED#USERS_SEED');
        await prisma.$disconnect();
    }
};
