import z from 'zod';

export const findAllQuerySchema = z.object({
    page: z.number().min(1, { error: 'Page must be at least 1 ' }).optional(),
    limit: z.number().min(1, { error: 'Limit must be at least 1 ' }).optional(),
    search: z.string().optional(),
    order: z.enum(['createdAt', 'updatedAt', 'name', 'slug']).optional(),
    sort: z.enum(['asc', 'desc']).optional(),
    isArchive: z.boolean().optional(),
});

export type FindAllQuerySchema = z.infer<typeof findAllQuerySchema>;

export const signInSchema = z.object({
    email: z.email(),
    password: z
        .string()
        .min(6, {
            error: 'Password must be at least 6 characters long',
        })
        .nonempty({ error: 'Password is required' }),
});

export const createProjectSchema = z.object({
    name: z
        .string()
        .min(3, { error: 'Name must be at least 3 characters long' })
        .nonempty({ error: 'Name is required' }),
    slug: z
        .string()
        .min(3, { error: 'Slug must be at least 3 characters long' })
        .nonempty({ error: 'Slug is required' }),
    description: z.string().optional(),
    thumbnail: z.url().optional(),
});

export const updateProjectSchema = z.object({
    name: z
        .string()
        .min(3, { error: 'Name must be at least 3 characters long' })
        .optional(),
    slug: z
        .string()
        .min(3, { error: 'Slug must be at least 3 characters long' })
        .optional(),
    description: z.string().optional(),
    thumbnail: z.url().optional(),
});
