/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    images: { domains: ['images3.memedroid.com'] },
    reactStrictMode: true,
    trailingSlash: false,

    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@styles': path.resolve('./src/styles'),
            '@components': path.resolve('./src/components'),
        };

        return config;
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
