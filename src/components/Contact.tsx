'use client';

import { MotionH2, MotionDiv } from '@/components/Motion';
import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
} from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'sandiperdiansah.info@gmail.com',
            link: 'mailto:sandiperdiansah.info@gmail.com',
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+62 812-3456-7890',
            link: 'tel:+6281234567890',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Jakarta, Indonesia',
            link: '#',
        },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            link: 'https://github.com/sandiperdiansah',
            color: '#333',
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            link: 'https://linkedin.com/in/sandi-perdiansah',
            color: '#0077b5',
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            link: 'https://instagram.com/sandiperdiansah_',
            color: '#e4405f',
        },
    ];

    return (
        <section
            id="contact"
            className="px-4 py-20 md:px-6"
            style={{ backgroundColor: 'var(--accent)' }}
        >
            <div className="mx-auto max-w-6xl">
                <MotionH2
                    className="mb-12 text-center text-4xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Let&apos;s Connect
                </MotionH2>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Info */}
                    <MotionDiv
                        className="glass rounded-2xl p-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3
                            className="mb-6 text-2xl font-semibold"
                            style={{ color: 'var(--foreground)' }}
                        >
                            Get In Touch
                        </h3>
                        <p
                            className="mb-8 text-lg leading-relaxed"
                            style={{ color: 'var(--secondary)' }}
                        >
                            I&apos;m always excited to work on new projects and collaborate
                            with amazing people. Whether you have a project in mind or
                            just want to chat about technology, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-full"
                                        style={{ backgroundColor: 'var(--primary)' }}
                                    >
                                        <info.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p
                                            className="text-sm font-medium"
                                            style={{ color: 'var(--secondary)' }}
                                        >
                                            {info.label}
                                        </p>
                                        {info.link !== '#' ? (
                                            <Link
                                                href={info.link}
                                                className="hover:text-primary text-lg font-semibold transition-colors duration-300"
                                                style={{ color: 'var(--foreground)' }}
                                            >
                                                {info.value}
                                            </Link>
                                        ) : (
                                            <p
                                                className="text-lg font-semibold"
                                                style={{ color: 'var(--foreground)' }}
                                            >
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </MotionDiv>

                    {/* Social Links */}
                    <MotionDiv
                        className="glass rounded-2xl p-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3
                            className="mb-6 text-2xl font-semibold"
                            style={{ color: 'var(--foreground)' }}
                        >
                            Follow Me
                        </h3>
                        <p
                            className="mb-8 text-lg leading-relaxed"
                            style={{ color: 'var(--secondary)' }}
                        >
                            Stay connected and check out my latest projects and thoughts
                            on technology and development.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-1">
                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={social.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 rounded-lg border-2 p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        style={{
                                            borderColor: 'var(--secondary)',
                                            backgroundColor: 'var(--background)',
                                        }}
                                    >
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-current"
                                            style={{ backgroundColor: social.color }}
                                        >
                                            <social.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p
                                                className="font-semibold"
                                                style={{ color: 'var(--foreground)' }}
                                            >
                                                {social.name}
                                            </p>
                                            <p
                                                className="text-sm"
                                                style={{ color: 'var(--secondary)' }}
                                            >
                                                Follow me on {social.name}
                                            </p>
                                        </div>
                                        <div className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
    );
};

export default Contact;
