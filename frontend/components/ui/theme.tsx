'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();

    if (!resolvedTheme) {
        return (
            <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled
                aria-label="theme-toggle"
            >
                <Sun className="size-5 opacity-0" />
            </Button>
        );
    }

    const onClick = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClick}
            aria-label="theme-toggle"
        >
            {resolvedTheme === 'dark' ? (
                <Moon className="size-5" />
            ) : (
                <Sun className="size-5 text-yellow-500" />
            )}
        </Button>
    );
};
