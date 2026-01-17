'use client';

import { AppShell, Burger, Group, NavLink, ScrollArea, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconHome,
    IconList,
    IconSettings,
    IconUserPlus,
    IconUsers,
} from '@tabler/icons-react';

export const CmsLayout = ({ children }: { children: React.ReactNode }) => {
    const [opened, { toggle }] = useDisclosure();

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
                        <Text fw={600}>My CMS</Text>
                    </Group>

                    <Text size="sm">Admin</Text>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <ScrollArea>
                    <NavLink
                        label="Dashboard"
                        leftSection={<IconHome size={16} />}
                    />

                    <NavLink
                        label="Users"
                        leftSection={<IconUsers size={16} />}
                        childrenOffset={12}
                    >
                        <NavLink
                            label="User List"
                            leftSection={<IconList size={14} />}
                        />
                        <NavLink
                            label="Create User"
                            leftSection={<IconUserPlus size={14} />}
                        />
                    </NavLink>

                    <NavLink
                        label="Settings"
                        leftSection={<IconSettings size={16} />}
                    />
                </ScrollArea>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};
