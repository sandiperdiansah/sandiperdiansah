'use client'


import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

const ColorModeButton = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className="hover:bg-accent flex items-center justify-center rounded-lg p-2 transition-colors duration-300"
            aria-label="toggle theme"
        >
            {theme === 'dark' ? <LuMoon /> : <LuSun />}
        </button>
    );
};

export default ColorModeButton;
