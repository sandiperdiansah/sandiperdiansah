import type { NextConfig } from 'next';

const NEXT_EXPERIMENTAL_VIEW_TRANSITION =
    process.env.NEXT_EXPERIMENTAL_VIEW_TRANSITION! === 'true';
const NEXT_IMAGES_REMOTE_PATTERN = process.env.NEXT_IMAGES_REMOTE_PATTERN!.split(',');

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        viewTransition: NEXT_EXPERIMENTAL_VIEW_TRANSITION,
    },
    images: {
        remotePatterns: NEXT_IMAGES_REMOTE_PATTERN.map((pattern) => ({
            protocol: 'https',
            hostname: pattern,
            pathname: '/**',
        })),
    },
};

export default nextConfig;
