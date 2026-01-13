import z from 'zod';

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().nonempty({ error: 'Password is required' }).min(6, {
        error: 'Password must be at least 6 characters long',
    }),
});
