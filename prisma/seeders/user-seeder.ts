import { auth } from '@/lib/auth';
import { PrismaClient } from '@/prisma/generated/client';

export const userSeeder = async (prisma: PrismaClient) => {
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

        console.log('SUCCESS, SEEDER#USER_SEEDER');
    } catch (error) {
        console.log('ERROR, SEEDER#USER_SEEDER', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};
