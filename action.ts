'use server';

import { auth } from '@/lib/auth';
import { signInSchema } from '@/validation';
import { APIError } from 'better-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

type ActionResponse<T> = {
    data?: T;
    error?: {
        message?: string;
        fieldErrors?: Record<string, string[]>;
    };
};

// auth
export const signInAction = async (
    prev: unknown,
    formData: FormData,
): Promise<ActionResponse<void>> => {
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

        redirect('/cms/dashboard');
    } catch (error) {
        if (error instanceof APIError) {
            switch (error.body?.code) {
                case 'INVALID_EMAIL_OR_PASSWORD':
                    return {
                        error: {
                            message: error.body.message,
                        },
                    };

                default:
                    return {
                        error: {
                            message: 'Something went wrong',
                        },
                    };
            }
        }

        throw error;
    }
};

export const signOutAction = async () => {
    try {
        await auth.api.signOut({
            headers: await headers(),
        });

        redirect('/cms/sign-in');
    } catch (error) {
        throw error;
    }
};
