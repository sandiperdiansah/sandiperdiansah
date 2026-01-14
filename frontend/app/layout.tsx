import { Toaster } from '@/components/ui/sonner';
import { TanstackProvider } from '@/providers/TanstackProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

const geist = Geist({
    variable: '--font-geist',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'My personal portfolio',
};

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={`${geistMono.variable} ${geist.variable} antialiased`}>
                <ThemeProvider>
                    <TanstackProvider>
                        <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
                            {children}
                            <Toaster
                                position="top-right"
                                duration={3000}
                                theme="system"
                            />
                        </div>
                    </TanstackProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
