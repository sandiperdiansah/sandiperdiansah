import prisma from '@/prisma/prisma';
import { projectsSeeder } from '@/prisma/seeders/projects-seeder';
import { userSeeder } from '@/prisma/seeders/users-seeder';

(async () => {
    try {
        console.log('SEEDING...');
        await userSeeder(prisma);
        await projectsSeeder(prisma);

        console.log('SEEDING COMPLETED');
    } catch (error) {
        console.log('SEEDING FAILED', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
