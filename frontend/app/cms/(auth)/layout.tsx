import { Center, Container } from '@mantine/core';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container
            pos="absolute"
            mih="100vh"
        >
            <Center
                h="100%"
                maw={400}
            >
                {children}
            </Center>
        </Container>
    );
};

export default Layout;
