import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        minimumCacheTTL: 60 * 60 * 24 * 365,
    },
};

export default nextConfig;
