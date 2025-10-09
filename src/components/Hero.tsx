'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center py-20">
            {/* Background Effects */}
            <div className="absolute top-1/3 left-1/4 h-10 w-10 animate-pulse rounded-full bg-purple-600/5 blur-3xl filter md:h-96 md:w-96 dark:bg-purple-600/10" />
            <div className="absolute right-1/4 bottom-1/4 h-10 w-10 animate-pulse rounded-full bg-indigo-600/5 blur-3xl filter delay-700 md:h-80 md:w-80 dark:bg-indigo-600/10" />

            {/* Main Content */}
            <div className="relative z-10 container mx-auto max-w-7xl px-8 lg:px-12">
                <div className="flex flex-col items-center lg:items-start">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl text-center lg:text-left"
                    >
                        {/* Pre-title */}
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-6 inline-block rounded-full bg-purple-500/5 px-4 py-1.5 text-sm font-medium text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
                        >
                            Full Stack Developer
                        </motion.span>

                        <div className="space-y-4">
                            <h1 className="text-5xl leading-tight font-bold text-gray-800 dark:text-white">
                                Hi, I&apos;m{' '}
                                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    Sandi Perdiansah
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="mt-8 mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl dark:text-gray-300">
                            A dedicated Full Stack Developer who loves crafting modern,
                            scalable, and user-centric web applications with clean design
                            and powerful performance.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col justify-center gap-5 sm:flex-row lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-white shadow-xl transition-all duration-300 hover:shadow-purple-500/25"
                            >
                                <span className="absolute inset-0 -translate-x-full -skew-x-12 transform bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                                <Link
                                    href="#projects"
                                    className="relative flex items-center justify-center gap-2"
                                >
                                    View Projects
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </Link>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group rounded-xl border border-purple-500/20 bg-transparent px-8 py-4 text-purple-600 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/5 dark:border-purple-500/30 dark:text-purple-400 dark:hover:bg-purple-500/10"
                            >
                                <Link
                                    href="#contact"
                                    className="flex items-center justify-center gap-2"
                                >
                                    Contact Me
                                    <svg
                                        className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h14m-7-7l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </motion.button>
                        </div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 flex items-center justify-center gap-8 lg:justify-start"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="h-10 w-10 rounded-full border-2 border-purple-500/20 bg-purple-500/5 dark:border-purple-500/30 dark:bg-purple-900/30"
                                    />
                                ))}
                            </div>
                            <div className="text-gray-500 dark:text-gray-400">
                                <span className="font-semibold text-purple-600 dark:text-purple-400">
                                    10+
                                </span>{' '}
                                Projects Completed
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
