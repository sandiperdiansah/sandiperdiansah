'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle body overflow when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
    ];

    if (!mounted) return null;

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed z-50 w-full transition-all duration-500 ${
                    scrolled
                        ? 'bg-white/80 py-4 shadow-lg backdrop-blur-md dark:bg-black/80'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group relative"
                        >
                            <motion.span
                                className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                SP
                            </motion.span>
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-500/50 transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* Controls */}
                        <div className="flex items-center gap-4">
                            {/* Theme Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                    setTheme(theme === 'dark' ? 'light' : 'dark')
                                }
                                className="cursor-pointer transition-colors"
                            >
                                {theme === 'dark' ? (
                                    <motion.svg
                                        initial={{ rotate: -30 }}
                                        animate={{ rotate: 0 }}
                                        className="h-7 w-7 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            clipRule="evenodd"
                                        />
                                    </motion.svg>
                                ) : (
                                    <motion.svg
                                        initial={{ rotate: 30 }}
                                        animate={{ rotate: 0 }}
                                        className="h-5 w-5 text-purple-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </motion.svg>
                                )}
                            </motion.button>

                            {/* Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="cursor-pointer p-2 transition-colors"
                            >
                                <div className="flex h-6 w-6 flex-col justify-center gap-1.5">
                                    <span
                                        className={`block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-gray-300 ${
                                            isMenuOpen ? 'translate-y-2 rotate-45' : ''
                                        }`}
                                    />
                                    <span
                                        className={`block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-gray-300 ${
                                            isMenuOpen ? 'opacity-0' : ''
                                        }`}
                                    />
                                    <span
                                        className={`block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-gray-300 ${
                                            isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                                        }`}
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/*Menu Overlay*/}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md"
                            style={{
                                zIndex: 49, // Just below navbar
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-full border-l border-gray-400/5 bg-white shadow-2xl sm:w-80 dark:bg-black"
                            style={{
                                zIndex: 51, // Above navbar
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex min-h-screen flex-col">
                                {/* Menu Header */}
                                <div className="border-b border-purple-500/10 p-6 dark:border-purple-500/5">
                                    <div className="flex items-center justify-between">
                                        <h2 className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-lg font-semibold text-transparent">
                                            Navigation
                                        </h2>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-full p-2 transition-colors hover:bg-purple-500/10"
                                        >
                                            <svg
                                                className="h-6 w-6 text-gray-600 dark:text-gray-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Menu Links */}
                                <nav className="no-scrollbar flex-1 overflow-y-hidden px-4 py-6">
                                    <div className="no-scrollbar grid gap-2 overflow-y-hidden">
                                        {navLinks.map((link, index) => (
                                            <motion.div
                                                key={link.label}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="no-scrollbar overflow-hidden"
                                            >
                                                <Link
                                                    href={link.href}
                                                    className="group no-scrollbar relative flex items-center rounded-xl p-4 text-gray-800 transition-all duration-300 hover:bg-purple-500/5 dark:text-gray-200 dark:hover:bg-purple-900/10"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {/* Animated Dot Indicator */}
                                                    <span className="absolute left-0 h-8 w-1 origin-left scale-y-0 rounded-r-full bg-purple-500 transition-transform group-hover:scale-y-100" />

                                                    {/* Link Content */}
                                                    <div className="ml-2 flex items-center gap-4">
                                                        {/* you can add icons guys if you want ......for each link here */}
                                                        <span className="h-2 w-2 rounded-full bg-purple-500/50 transition-transform group-hover:scale-150" />

                                                        {/* Label with hover effect */}
                                                        <span className="no-scrollbar text-lg font-medium transition-transform group-hover:translate-x-1">
                                                            {link.label}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </nav>

                                {/* Menu Footer */}
                                <div className="border-t border-purple-500/10 p-6 dark:border-purple-500/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            © 2024 Sandi Perdiansah
                                        </span>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() =>
                                                setTheme(
                                                    theme === 'dark' ? 'light' : 'dark',
                                                )
                                            }
                                            className="rounded-full bg-purple-500/10 p-2 transition-colors hover:bg-purple-500/20"
                                        >
                                            {theme === 'dark' ? (
                                                <motion.svg
                                                    initial={{ rotate: -30 }}
                                                    animate={{ rotate: 0 }}
                                                    className="h-5 w-5 text-yellow-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                        clipRule="evenodd"
                                                    />
                                                </motion.svg>
                                            ) : (
                                                <motion.svg
                                                    initial={{ rotate: 30 }}
                                                    animate={{ rotate: 0 }}
                                                    className="h-5 w-5 text-purple-600"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                                </motion.svg>
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
