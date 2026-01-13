import prisma from '@/prisma/prisma';
import { userSeeder } from '@/prisma/seeders/user-seeder';

(async () => {
    try {
        console.log('SEEDING...');
        await userSeeder(prisma);

        console.log('SEEDING COMPLETED');
    } catch (error) {
        console.log('SEEDING FAILED', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
