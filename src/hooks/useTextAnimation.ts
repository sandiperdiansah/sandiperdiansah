'use client';

import { HERO_TEXTS } from '@/constants';
import { useEffect, useState } from 'react';

export const useUseTextAnimation = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const currentFullText = HERO_TEXTS[currentIndex];

        if (currentText.length < currentFullText.length) {
            const timeout = setTimeout(() => {
                setCurrentText(currentFullText.slice(0, currentText.length + 1));
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % HERO_TEXTS.length);
                setCurrentText('');
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [currentText, currentIndex]);

    return { text: currentText };
};
