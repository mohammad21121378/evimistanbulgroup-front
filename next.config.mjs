import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['admin.evimistanbulgroup.com'],
    },
};

export default withNextIntl(nextConfig);
