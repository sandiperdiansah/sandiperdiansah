'use client';

import { signInAction } from '@/action';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

export const FormSignIn = () => {
    const [state, formAction, isPending] = useActionState(signInAction, null);
    const router = useRouter();

    useEffect(() => {
        if (state?.error?.general) {
            toast.error(state.error.general);
        }
    }, [state?.error?.general]);

    useEffect(() => {
        if (state?.message) {
            toast.success(state.message);
            router.push('/cms/dashboard');
        }
    }, [state?.message, router]);

    return (
        <form
            action={formAction}
            className="space-y-4"
        >
            <Field>
                <FieldContent>
                    <FieldTitle className="mb-2">
                        <h1 className="text-xl font-bold">Sign in to CMS</h1>
                    </FieldTitle>
                    <FieldDescription>
                        Use your email and password to continue
                    </FieldDescription>

                    <FieldGroup className="mt-4">
                        <Field data-invalid={!!state?.error?.fieldErrors?.email}>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Input your email"
                                aria-invalid={!!state?.error?.fieldErrors?.email}
                            />
                            <FieldError className="text-red-500">
                                {state?.error?.fieldErrors?.email?.[0]}
                            </FieldError>
                        </Field>

                        <Field data-invalid={!!state?.error?.fieldErrors?.password}>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Input your password"
                                aria-invalid={!!state?.error?.fieldErrors?.password}
                            />
                            <FieldError className="text-red-500">
                                {state?.error?.fieldErrors?.password?.[0]}
                            </FieldError>
                        </Field>
                    </FieldGroup>
                </FieldContent>
            </Field>

            <Button
                type="submit"
                loading={isPending}
                disabled={isPending}
                className="w-full"
                aria-label="sign-in"
            >
                Sign In
            </Button>
        </form>
    );
};
