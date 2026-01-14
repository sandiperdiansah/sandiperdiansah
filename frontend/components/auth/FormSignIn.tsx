'use client';

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

export const FormSignIn = () => {
    return (
        <form className="space-y-4">
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
