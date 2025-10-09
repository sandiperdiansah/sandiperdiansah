'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section
            id="about"
            className="relative bg-white py-20 dark:bg-black"
        >
            <div className="absolute right-0 bottom-0 h-96 w-full bg-gradient-to-t from-purple-100/20 via-transparent to-transparent dark:from-purple-900/20" />

            <div className="relative z-10 container mx-auto max-w-7xl px-8 lg:px-12">
                <div className="flex flex-col items-start gap-16 lg:flex-row">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <div className="group relative">
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-lg bg-white">
                                <Image
                                    src="/profile.jpg"
                                    alt="Sandi Perdiansah"
                                    width={600}
                                    height={700}
                                    className="object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                            About Me
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-300">
                            <p>
                                Hi! I&apos;m <strong>Sandi Perdiansah</strong>, a
                                passionate Full Stack Developer who loves building clean,
                                scalable, and user-focused digital experiences.
                            </p>

                            <p>
                                I enjoy turning ideas into functional and beautiful web
                                applications. With experience in both frontend and backend
                                development, I focus on creating seamless user interfaces
                                powered by reliable and efficient server-side logic.
                            </p>

                            <p>
                                Currently based in Indonesia, I spend most of my time
                                working on modern web technologies like React, Next.js,
                                and Node.js. Outside of coding, I like to explore new
                                frameworks, learn about product design, and occasionally
                                contribute to open-source projects.
                            </p>
                        </div>

                        {/* Skills Section */}
                        <div className="mt-12">
                            <h3 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">
                                Technologies I Work With
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    'React',
                                    'Next.js',
                                    'TypeScript',
                                    'TailwindCSS',
                                    'Express.js',
                                    'MongoDB',
                                    'PostgreSQL',
                                ].map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className="rounded-lg bg-white px-4 py-2 text-sm text-gray-700 shadow-sm ring-1 ring-purple-500/20 transition-all duration-300 hover:shadow hover:ring-purple-500/40 dark:bg-gray-800 dark:text-gray-300"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
                            {[
                                {
                                    number: '6+',
                                    label: 'Month',
                                    color: 'from-purple-600 to-indigo-600',
                                },
                                {
                                    number: '10+',
                                    label: 'Projects',
                                    color: 'from-blue-600 to-cyan-600',
                                },
                                {
                                    number: '20+',
                                    label: 'Clients',
                                    color: 'from-emerald-600 to-teal-600',
                                },
                                {
                                    number: '99%',
                                    label: 'Success',
                                    color: 'from-orange-600 to-amber-600',
                                },
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ y: -5 }}
                                    className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-md dark:bg-gray-800 dark:ring-gray-800/50"
                                >
                                    <div
                                        className={`bg-gradient-to-r text-2xl font-bold ${stat.color} bg-clip-text text-transparent`}
                                    >
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
