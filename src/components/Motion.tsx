'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

// Common animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
};

const scaleIn = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: 'spring' as const, stiffness: 200 },
};

// Reusable motion components
export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionSection = motion.section;
export const MotionImg = motion.img;
export const MotionLink = motion.a;

// Pre-configured components with common animations
export function FadeInUp({ children, ...props }: HTMLMotionProps<'div'>) {
    return (
        <MotionDiv
            {...fadeInUp}
            {...props}
        >
            {children}
        </MotionDiv>
    );
}

export function FadeIn({ children, ...props }: HTMLMotionProps<'div'>) {
    return (
        <MotionDiv
            {...fadeIn}
            {...props}
        >
            {children}
        </MotionDiv>
    );
}

export function ScaleIn({ children, ...props }: HTMLMotionProps<'div'>) {
    return (
        <MotionDiv
            {...scaleIn}
            {...props}
        >
            {children}
        </MotionDiv>
    );
}

export function FadeInOnScroll({
    children,
    delay = 0,
    ...props
}: HTMLMotionProps<'div'> & { delay?: number }) {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </MotionDiv>
    );
}
