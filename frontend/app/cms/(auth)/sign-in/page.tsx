'use client';

import { Button, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
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

    const onSubmit = (values: typeof form.values) => {
        console.log(values);
        // call API login here
    };

    return (
        <Stack>
            <Stack>
                <Title
                    order={1}
                    size="h3"
                    fw={600}
                >
                    Sign In
                </Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Stack>

            <form onSubmit={form.onSubmit(onSubmit)}>
                <Stack>
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        leftSection={<IconMail size={18} />}
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        leftSection={<IconLock size={18} />}
                        {...form.getInputProps('password')}
                    />

                    <Button
                        type="submit"
                        fullWidth
                    >
                        Sign In
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default Page;
