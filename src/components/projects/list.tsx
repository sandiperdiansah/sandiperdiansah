import ButtonPrimary from '@/components/button/ButtonPrimary';
import { MotionDiv } from '@/components/Motion';
import { ProjectType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const List = ({ title, description, links, tech, thumbnail }: ProjectType) => {
    return (
        <MotionDiv
            key={title}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="bg-opacity-0 group-hover:bg-opacity-20 absolute inset-0 bg-black transition-all duration-300"></div>
            </div>
            <div className="flex-1">
                <h3
                    className="mb-3 text-xl font-semibold"
                    style={{ color: 'var(--foreground)' }}
                >
                    {title}
                </h3>
                <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: 'var(--secondary)' }}
                >
                    {description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                    {tech.map((icon, i) => {
                        const IconComponent = icon.icon;

                        return IconComponent ? (
                            <div
                                key={i}
                                className="flex items-center gap-1 rounded-full border px-2 py-1 text-xs"
                                style={{
                                    borderColor: 'var(--primary)',
                                    color: 'var(--primary)',
                                }}
                            >
                                <IconComponent className="h-3 w-3" />
                                <span>{icon.label}</span>
                            </div>
                        ) : (
                            <span
                                key={i}
                                className="border px-2 py-1 text-xs"
                                style={{
                                    borderColor: 'var(--secondary)',
                                    color: 'var(--foreground)',
                                }}
                            >
                                {icon.label}
                            </span>
                        );
                    })}
                </div>
                <div className="flex gap-3">
                    <ButtonPrimary
                        href={links.demo}
                        aria-label="view demo"
                    >
                        <FaExternalLinkAlt
                            aria-hidden="true"
                            className="relative z-10 h-4 w-4"
                        />{' '}
                        Demo
                    </ButtonPrimary>
                    <Link
                        href={links.source}
                        className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 px-4 py-2 font-medium transition-all duration-300 hover:shadow-lg"
                        style={{
                            borderColor: 'var(--secondary)',
                            color: 'var(--secondary)',
                        }}
                    >
                        <FaGithub className="relative z-10 h-4 w-4" />
                        <span className="relative z-10">Code</span>
                        <div
                            className="absolute inset-0 -translate-x-full transform transition-transform duration-300 group-hover/btn:translate-x-0"
                            style={{
                                backgroundColor: 'var(--secondary)',
                                opacity: 0.1,
                            }}
                        ></div>
                    </Link>
                </div>
            </div>
        </MotionDiv>
    );
};

export default List;
