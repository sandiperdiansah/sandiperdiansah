'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'TypeScript', level: 80 },
            { name: 'TailwindCSS', level: 95 },
        ],
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Express', level: 80 },
            { name: 'MongoDB', level: 75 },
            { name: 'PostgreSQL', level: 70 },
        ],
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
            </svg>
        ),
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', level: 90 },
            { name: 'Vercel', level: 80 },
            { name: 'ChatGPT', level: 90 },
        ],
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        ),
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative bg-white py-20 dark:bg-black"
        >
            <div className="absolute top-0 right-0 h-96 w-full bg-gradient-to-b from-purple-100/20 via-transparent to-transparent dark:from-purple-900/20" />

            <div className="relative z-10 container mx-auto max-w-7xl px-8 lg:px-12">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl dark:from-purple-400 dark:to-indigo-400"
                    >
                        Technical Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                    >
                        A showcase of my technical skills and proficiency levels across
                        different domains
                    </motion.p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 }}
                            className="group relative rounded-2xl border border-gray-200/50 bg-white/50 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 dark:border-gray-700/50 dark:bg-gray-800/50 dark:shadow-gray-900/10 dark:hover:border-purple-500/50"
                        >
                            <div className="relative">
                                <div className="mb-8 flex items-center gap-4">
                                    <motion.span
                                        whileHover={{ scale: 1.1 }}
                                        className="rounded-xl bg-purple-500/10 p-3 text-purple-600 ring-1 ring-purple-500/20 dark:bg-purple-500/20 dark:text-purple-400 dark:ring-purple-500/30"
                                    >
                                        {category.icon}
                                    </motion.span>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay:
                                                    categoryIndex * 0.2 +
                                                    skillIndex * 0.1,
                                            }}
                                        >
                                            <div className="mb-2 flex justify-between">
                                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1.5,
                                                        ease: [0.34, 1.56, 0.64, 1],
                                                        delay:
                                                            categoryIndex * 0.2 +
                                                            skillIndex * 0.1,
                                                    }}
                                                    className="relative h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                                                >
                                                    {/* Animated Glow Effect */}
                                                    <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
