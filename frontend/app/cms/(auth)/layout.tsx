import { Center, Paper } from '@mantine/core';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Center
            mih="100vh"
            component="main"
        >
            <Paper
                component="section"
                w="100%"
                p="xl"
                radius="md"
                maw={400}
                shadow="sm"
            >
                {children}
            </Paper>
        </Center>
    );
};

export default Layout;
