'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: 'My Ui Explore',
        description:
            'My UI Explore is a collection of design experiments built with Next.js and Tailwind CSS. It showcases modern UI components, smooth animations, and responsive layouts — all crafted to inspire creativity and simplify interface development for future web projects.',
        image: '/myuiexplore.png',
        tags: ['Next.js', 'Tailwindcss'],
        demoUrl: 'https://my-ui-explore.vercel.app',
        githubUrl: 'https//github.com/sandiperdiansah/my-ui-explore.git',
        color: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Landing Page Boilerplate',
        description:
            'Landing Page Boilerplate is a starter template built with Next.js and Tailwind CSS, designed for quickly creating modern, responsive, and high-performance landing pages. It includes clean layouts, reusable components, and smooth animations for a professional web presence.',
        image: '/lp.png',
        tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
        demoUrl: 'https://next-js-boilerplate-landing-page.vercel.app/',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        title: 'Travel Open Trip',
        description:
            'Travel Open Trip is a web platform for discovering and booking open trip packages easily. It allows users to explore destinations, view trip details, and manage bookings with a modern and responsive interface built using Laravel and Tailwind CSS.',
        image: '/travelopentrip.png',
        tags: ['Laravel', 'PHP', 'TailwindCSS'],
        demoUrl: 'https://h44nss.github.io/travelwme-17',
        color: 'from-blue-500 to-indigo-500',
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative bg-white py-20 dark:bg-black"
        >
            {/* Background Effects */}
            <div className="absolute right-0 bottom-0 h-96 w-full bg-gradient-to-t from-purple-100/20 via-transparent to-transparent dark:from-purple-900/20" />

            <div className="relative z-10 container mx-auto max-w-7xl px-8 lg:px-12">
                {/* Section Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl dark:from-purple-400 dark:to-indigo-400"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                    >
                        Showcasing some of my recent work and passion projects
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50"
                        >
                            {/* Project Image section */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="16rem"
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-30" />

                                {/* Floating Tags*/}
                                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-lg border border-white/10 bg-transparent px-3 py-1 text-sm text-white backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8">
                                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                                    {project.title}
                                </h3>
                                <p className="mb-8 line-clamp-3 text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>

                                {/* Action Buttons with Updated Design */}
                                <div className="flex flex-col gap-4 md:flex-row">
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.demoUrl}
                                        className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-2.5 text-white shadow-lg shadow-purple-500/20 transition-colors hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                                    >
                                        Live Demo
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </motion.a>
                                    {project.githubUrl && (
                                        <motion.a
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            href={project.githubUrl}
                                            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-gray-800 shadow-lg shadow-gray-200/20 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:shadow-gray-900/20 dark:hover:bg-gray-700/50"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                />
                                            </svg>
                                            View Code
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
