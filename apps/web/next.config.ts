import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // Enable experimental features for better monorepo support
    experimental: {
        // Allow importing from parent directories (for shared packages)
        externalDir: true,
    },

    // Environment variables
    env: {
        NEXT_PUBLIC_API_URL:
            process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
        NEXT_PUBLIC_WS_URL:
            process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001',
    },

    // Webpack configuration for monorepo
    webpack: (config, { isServer }) => {
        // Allow importing from packages directory
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        }

        return config
    },
}

export default nextConfig
