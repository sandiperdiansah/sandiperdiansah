import { factory } from '@/prisma/factory';
import { PrismaClient } from '@/prisma/generated/client';
import { ProjectCreateInput } from '@/prisma/generated/models';

export const projectsSeeder = async (prisma: PrismaClient): Promise<void> => {
    console.log('START, SEED#PROJECTS_SEED');

    const data = factory<ProjectCreateInput>(20, (index) => ({
        id: crypto.randomUUID(),
        name: `Project ${index + 1} name`,
        slug: `project-${index + 1}-slug`,
        description: `Project ${index + 1} description`,
        thumbnail: `https://source.unsplash.com/800x600/?software&sig=${index + 1}`,
    }));

    try {
        await prisma.project.createMany({
            data,
            skipDuplicates: true,
        });

        console.log('SUCCESS, SEED#PROJECTS_SEED');
    } catch (error) {
        console.log('ERROR, SEED#PROJECTS_SEED', error);
        process.exit(1);
    } finally {
        console.log('END, SEED#PROJECTS_SEED');
        await prisma.$disconnect();
    }
};
