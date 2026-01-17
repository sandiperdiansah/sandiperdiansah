import { theme } from '@/theme/theme';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'My Mantine app',
    description: 'I have followed setup instructions carefully',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html
            lang="en"
            {...mantineHtmlProps}
        >
            <head>
                <ColorSchemeScript />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
};

export default Layout;
