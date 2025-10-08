'use client';

import { MotionDiv } from '@/components/Motion';
import { NAV_ITEMS } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass fixed top-0 z-50 flex h-16 w-full items-center justify-center px-4">
            <ul className="hidden space-x-8 md:flex">
                {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors duration-300"
                            style={{ color: 'var(--secondary)' }}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            <MotionDiv
                className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-4`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
            >
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="hover:text-primary block py-2 transition-colors duration-300"
                        style={{ color: 'var(--secondary)' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
            </MotionDiv>
        </nav>
    );
};

export default Navbar;
