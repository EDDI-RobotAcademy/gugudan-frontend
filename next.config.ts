import type {NextConfig} from "next";

const cloudfrontDomain = process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN;

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { 
                protocol: "https", 
                hostname: cloudfrontDomain || "" 
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com", 
            },
        ],
    },

    async rewrites() {
        return [
            {
                source: '/og/default.png',
                destination: '/og?type=default',
            },
            {
                source: '/og/mbti-default.png',
                destination: '/og?type=mbti-default',
            },
        ];
    },

    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store",
                    },
                ],
            },
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
