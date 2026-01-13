'use client';

import NextTopLoader from 'nextjs-toploader';

export const TopLoader = () => {
    return (
        <NextTopLoader
            color="var(--primary)"
            height={2}
            showSpinner={false}
            shadow={false}
            easing="ease"
            speed={200}
        />
    );
};
