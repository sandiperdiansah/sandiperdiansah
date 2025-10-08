import { ProjectType, TechIconType } from '@/types';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
    SiExpress,
    SiFramer,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

export const NAV_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const HERO_TEXTS = [
    'Fullstack Web Developer',
    'React Enthusiast',
    'TypeScript Developer',
    'Javascript Developer',
];

export const PROJECTS: ProjectType[] = [
    {
        title: 'E-Commerce Dashboard',
        description:
            'A responsive admin panel built with Next.js, Tailwind CSS, and PostgreSQL for inventory management.',
        thumbnail:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',

        tech: [
            {
                icon: SiNextdotjs,
                label: 'Next.js',
            },
            {
                icon: SiTailwindcss,
                label: 'Tailwind',
            },
            {
                icon: SiPostgresql,
                label: 'PostgreSQL',
            },
        ],
        links: {
            demo: '#',
            source: '#',
        },
    },
];

export const TECH_ICONS: TechIconType = {
    'Next.js': SiNextdotjs,
    Tailwind: SiTailwindcss,
    PostgreSQL: SiPostgresql,
    React: FaReact,
    Express: SiExpress,
    MongoDB: SiMongodb,
    TypeScript: SiTypescript,
    'Framer Motion': SiFramer,
    'Node.js': FaNodeJs,
};
