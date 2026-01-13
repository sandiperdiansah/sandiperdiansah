'use server';

import { auth } from '@/lib/auth';
import { generateUniqueSlug } from '@/lib/utils';
import { Project } from '@/prisma/generated/client';
import { ProjectWhereInput } from '@/prisma/generated/models';
import prisma from '@/prisma/prisma';
import {
    DefaultCreateResponse,
    DefaultDeleteResponse,
    DefaultFindAllResponse,
    DefaultFindOneResponse,
    DefaultUpdateResponse,
} from '@/types';
import {
    createProjectSchema,
    findAllQuerySchema,
    FindAllQuerySchema,
    signInSchema,
    updateProjectSchema,
} from '@/validation';
import { APIError } from 'better-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

// auth
export const signInAction = async (
    prev: unknown,
    formData: FormData,
): Promise<DefaultCreateResponse<void>> => {
    const payload = signInSchema.safeParse(Object.fromEntries(formData));

    if (!payload.success) {
        return {
            error: {
                fieldErrors: payload.error.flatten().fieldErrors,
            },
        };
    }

    try {
        await auth.api.signInEmail({
            body: {
                ...payload.data,
            },
        });

        console.log('SUCCESS, ACTION#AUTH_SIGNIN');
        return { message: 'sign in successfull' };
    } catch (error) {
        console.log('ERROR, ACTION#AUTH_SIGNIN', error);

        if (error instanceof APIError) {
            switch (error.body?.code) {
                case 'INVALID_EMAIL_OR_PASSWORD':
                    return {
                        error: {
                            general: error.body.message,
                        },
                    };

                default:
                    return {
                        error: {
                            general: 'Something went wrong',
                        },
                    };
            }
        }

        throw error;
    }
};

export const signOutAction = async () => {
    await auth.api.signOut({
        headers: await headers(),
    });

    redirect('/cms/sign-in');
};

// projects
export const createProjectAction = async (
    prev: unknown,
    formData: FormData,
): Promise<DefaultCreateResponse<Project>> => {
    const payload = createProjectSchema.safeParse(Object.fromEntries(formData));

    if (!payload.success) {
        return {
            error: {
                fieldErrors: payload.error.flatten().fieldErrors,
            },
        };
    }

    try {
        await checkSameProject(payload.data.slug);

        const entity = await prisma.project.create({
            data: {
                ...payload.data,
                slug: generateUniqueSlug(payload.data.slug),
            },
        });

        console.log('SUCCESS, ACTION#PROJECT_CREATE', entity);
        return {
            message: 'create project successfull',
            data: { ...entity },
        };
    } catch (error) {
        console.log('ERROR, ACTION#PROJECT_CREATE', error);

        if (error instanceof Error && error.message === 'PROJECT_ALREADY_EXISTS') {
            return {
                error: {
                    general: 'Project already exists',
                },
            };
        }

        throw error;
    }
};

export const findAllProjectAction = async (
    query: FindAllQuerySchema,
): Promise<DefaultFindAllResponse<Project>> => {
    const payload = findAllQuerySchema.safeParse(query);

    if (!payload.success) {
        return {
            error: {
                fieldErrors: payload.error.flatten().fieldErrors,
            },
        };
    }

    const {
        page = 1,
        limit = 10,
        search,
        order = 'createdAt',
        sort = 'desc',
        isArchive,
    } = payload.data;

    try {
        const where: ProjectWhereInput = {
            ...(search && {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { slug: { contains: search, mode: 'insensitive' } },
                ],
            }),
            ...(isArchive ? {} : { deletedAt: null }),
        };

        const [data, count] = await prisma.$transaction([
            prisma.project.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                orderBy: { [order]: sort },
            }),
            prisma.project.count({ where }),
        ]);

        console.log('SUCCESS, ACTION#PROJECT_FIND_ALL', data);
        return {
            message: 'find all project successfull',
            data: {
                data,
                meta: {
                    page,
                    limit,
                    totalItems: count,
                    totalPages: Math.ceil(count / limit),
                },
            },
        };
    } catch (error) {
        console.log('ERROR, ACTION#PROJECT_FIND_ALL', error);
        throw error;
    }
};

export const findOneProjectAction = async (
    id: string,
): Promise<DefaultFindOneResponse<Project>> => {
    try {
        const entity = await prisma.project.findUnique({
            where: {
                id,
            },
        });

        if (!entity) {
            return {
                error: {
                    general: 'Project not found',
                },
            };
        }

        console.log('SUCCESS, ACTION#PROJECT_FIND_ONE', entity);
        return {
            message: 'find one project successfull',
            data: { ...entity },
        };
    } catch (error) {
        console.log('ERROR, ACTION#PROJECT_FIND_ONE', error);
        throw error;
    }
};

export const updateProjectAction = async (
    prev: unknown,
    formData: FormData,
    id: string,
): Promise<DefaultUpdateResponse<Project>> => {
    const payload = updateProjectSchema.safeParse(Object.fromEntries(formData));

    if (!payload.success) {
        return {
            error: {
                fieldErrors: payload.error.flatten().fieldErrors,
            },
        };
    }

    try {
        const entity = await findOneProjectAction(id);

        if (payload.data.slug && entity.data?.slug !== payload.data.slug) {
            await checkSameProject(payload.data.slug);
        }

        const response = await prisma.project.update({
            where: { id },
            data: {
                ...payload.data,
                slug: payload.data.slug
                    ? generateUniqueSlug(payload.data.slug)
                    : entity.data?.slug,
            },
        });

        console.log('SUCCESS, ACTION#PROJECT_UPDATE', response);
        return {
            message: 'update project successfull',
            data: { ...response },
        };
    } catch (error) {
        console.log('ERROR, ACTION#PROJECT_UPDATE', error);

        if (error instanceof Error && error.message === 'PROJECT_ALREADY_EXISTS') {
            return {
                error: {
                    general: 'Project already exists',
                },
            };
        }

        throw error;
    }
};

export const deleteProjectAction = async (
    id: string,
): Promise<DefaultDeleteResponse<void>> => {
    try {
        const entity = await findOneProjectAction(id);
        await prisma.project.update({
            where: { id },
            data: { deletedAt: new Date() },
        });

        console.log('SUCCESS, ACTION#PROJECT_DELETE', entity.data);
        return { message: 'delete project successfull' };
    } catch (error) {
        console.log('ERROR, ACTION#PROJECT_DELETE', error);
        throw error;
    }
};

export const restoreProjectAction = async (
    id: string,
): Promise<DefaultDeleteResponse<void>> => {
    try {
        const entity = await findOneProjectAction(id);
        await prisma.project.update({
            where: { id },
            data: { deletedAt: null },
        });

        console.log('SUCCESS, ACTION#PROJECT_RESTORE', entity.data);
        return { message: 'restore project successfull' };
    } catch (error) {
        console.log('ERROR, ACTION#PROJECT_RESTORE', error);
        throw error;
    }
};

export const forceDeleteProjectAction = async (
    id: string,
): Promise<DefaultDeleteResponse<void>> => {
    try {
        const entity = await findOneProjectAction(id);
        await prisma.project.delete({
            where: { id },
        });

        console.log('SUCCESS, ACTION#PROJECT_FORCE_DELETE', entity.data);
        return { message: 'force delete project successfull' };
    } catch (error) {
        console.log('ERROR, ACTION#PROJECT_FORCE_DELETE', error);
        throw error;
    }
};

export const checkSameProject = async (slug: string): Promise<void> => {
    const entity = await prisma.project.findUnique({
        where: { slug },
    });

    if (entity) {
        throw new Error('PROJECT_ALREADY_EXISTS');
    }
};
