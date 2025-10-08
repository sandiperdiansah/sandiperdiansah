import { MotionDiv } from '@/components/Motion';
import { ButtonLinkProps } from '@/types';
import Link from 'next/link';

const ButtonPrimary = ({ children, href = '/', ...props }: ButtonLinkProps) => {
    return (
        <MotionDiv
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                href={href}
                className="group relative inline-block overflow-hidden rounded-full border-2 px-8 py-2 font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                    borderColor: 'var(--primary)',
                    color: 'var(--primary)',
                }}
                {...props}
            >
                <span className="relative z-10 transition-colors group-hover:text-white flex items-center justify-center gap-2">
                    {children}
                </span>
                <div
                    className="absolute inset-0 -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0"
                    style={{ backgroundColor: 'var(--primary)' }}
                ></div>
            </Link>
        </MotionDiv>
    );
};

export default ButtonPrimary;
