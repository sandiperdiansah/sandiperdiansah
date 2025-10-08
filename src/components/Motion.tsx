'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

// Common animation variants
const scaleIn = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: 'spring' as const, stiffness: 200 },
};

// Reusable motion components
export const MotionDiv = motion.div;
export const MotionH2 = motion.h2;

// Pre-configured components with common animations
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
