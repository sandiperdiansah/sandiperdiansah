import { Providers } from '@/components/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sandi Perdiansah - Fullstack Web Developer',
    description:
        'Portfolio of Sandi Perdiansah, specializing in fullstack web development with React, Next.js, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={`${inter.className} min-h-screen`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
