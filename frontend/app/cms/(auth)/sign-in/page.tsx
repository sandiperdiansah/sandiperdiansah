'use client';

import { Button, PasswordInput, Space, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLock, IconMail } from '@tabler/icons-react';

const Page = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) =>
                value.length >= 6 ? null : 'Password must be at least 6 characters',
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
        // call API login here
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                label="Email"
                placeholder="Enter your email"
                leftSection={<IconMail size={18} />}
                {...form.getInputProps('email')}
            />

            <Space h="sm" />

            <PasswordInput
                label="Password"
                placeholder="Enter your password"
                leftSection={<IconLock size={18} />}
                {...form.getInputProps('password')}
            />

            <Space h="md" />

            <Button
                type="submit"
                fullWidth
            >
                Sign In
            </Button>
        </form>
    );
};

export default Page;
