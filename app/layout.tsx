import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter',
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
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>
                    <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
                        {children}
                        <Toaster
                            position="top-right"
                            duration={3000}
                            // theme="system"
                            // className="w-2xs"
                        />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
