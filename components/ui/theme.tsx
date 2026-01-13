'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const onClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={onClick}
            aria-label="theme-toggle"
        >
            {theme === 'dark' ? (
                <Moon className="size-5" />
            ) : (
                <Sun className="size-5 text-yellow-500" />
            )}
        </Button>
    );
};
