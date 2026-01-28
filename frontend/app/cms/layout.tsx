'use client';

import {
    AppShell,
    Burger,
    Button,
    Group,
    NavLink,
    ScrollArea,
    Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [opened, { toggle }] = useDisclosure();
    const pathname = usePathname();

    if (pathname === '/cms/sign-in') {
        return children;
    }

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 280,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group
                    h="100%"
                    px="md"
                    justify="space-between"
                >
                    <Group>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Button
                            component={Link}
                            href="/cms/dashboard"
                            variant="transparent"
                            color="dark"
                            fw="bold"
                        >
                            CMS
                        </Button>
                    </Group>

                    <Text size="sm">Admin</Text>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <ScrollArea>
                    <NavLink
                        component={Link}
                        href="/cms/dashboard"
                        label="Dashboard"
                        leftSection={
                            <IconHome
                                size={20}
                                strokeWidth={1.5}
                            />
                        }
                    />
                </ScrollArea>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};

export default Layout;
