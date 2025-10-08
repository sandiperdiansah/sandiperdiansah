'use client';

import ButtonPrimary from '@/components/button/ButtonPrimary';
import { useUseTextAnimation } from '@/hooks/useTextAnimation';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { FadeIn, MotionDiv, ScaleIn } from './Motion';

const Hero = () => {
    const { text } = useUseTextAnimation();

    return (
        <section
            id="home"
            className="flex min-h-screen items-center justify-center p-4 pt-20 md:p-6"
            style={{ backgroundColor: 'var(--background)' }}
        >
            <div className="mx-auto max-w-4xl text-center">
                <MotionDiv
                    className="mb-8 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ScaleIn className="relative mb-6 h-32 w-32 overflow-hidden rounded-full">
                        <Image
                            src="/profile.jpg"
                            alt="Sandi Perdiansah"
                            fill
                            sizes="100%"
                            className="object-cover object-center"
                        />
                    </ScaleIn>
                    <h1
                        className="mb-4 text-4xl font-bold md:text-6xl"
                        style={{ color: 'var(--foreground)' }}
                    >
                        Hi, I&apos;m{' '}
                        <span style={{ color: 'var(--primary)' }}>Sandi Perdiansah</span>
                    </h1>
                    <div className="mb-8 h-8 text-lg md:text-xl">
                        <span style={{ color: 'var(--secondary)' }}>
                            {text}
                            <span className="animate-pulse">|</span>
                        </span>
                    </div>
                    <ButtonPrimary href="#projects">View my work</ButtonPrimary>
                </MotionDiv>
                <FadeIn transition={{ delay: 1 }}>
                    <Link
                        href="#about"
                        className="hover:text-primary flex items-center justify-center space-x-2 text-sm transition-colors duration-300"
                        style={{ color: 'var(--secondary)' }}
                    >
                        <span>Scroll Down</span>
                        <FaChevronDown
                            className="animate-bounce"
                            size={16}
                        />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
