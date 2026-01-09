import "./globals.css";
import type {Metadata} from "next";
import Script from 'next/script';
import {AuthProvider} from "@/components/auth/AuthProvider";
import {AppHeader} from "@/components/layout/AppHeader";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Love-Note";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - MBTI 연애 결혼 썸 고민 정리 AI 대화`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "MBTI 기반 연애 상담, 결혼 상담, 썸 고민 해결 서비스. MBTI 연애 가이드, MBTI 결혼 가이드, MBTI 썸 가이드로 관계 고민과 대화 정리를 도와드립니다.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }, // 커스텀 아이콘 우선
      { url: "/favicon.ico", sizes: "any" }, // 폴백용 (나중에 커스텀 ICO로 교체 필요)
    ],
    shortcut: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - MBTI 연애 결혼 썸 고민 정리 AI 대화`,
    description: "MBTI 기반으로 연애, 결혼, 썸에서 이야기를 나누고 대화를 정리해가는 서비스. MBTI 연애 가이드, MBTI 결혼 가이드, MBTI 썸 가이드로 관계 고민과 대화를 정리해요.",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <head>
            {/* Favicon - 커스텀 아이콘 우선 설정 */}
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
            {/* 구조화된 데이터 (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: SITE_NAME,
                        url: SITE_URL,
                        description: "MBTI 기반 관계 가이드와 상황별 대화 정리를 제공하는 AI 서비스",
                        logo: `${SITE_URL}/icon.svg`,
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: SITE_NAME,
                        url: SITE_URL,
                        description: "MBTI 기반 관계 가이드와 상황별 대화 정리를 제공합니다.",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: {
                                "@type": "EntryPoint",
                                urlTemplate: `${SITE_URL}/faq?search={search_term_string}`,
                            },
                            "query-input": "required name=search_term_string",
                        },
                    }),
                }}
            />
            {/* 1. 구글 애드센스 스크립트 추가 */}
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5936532559612748"
                crossOrigin="anonymous"
                strategy="afterInteractive"
            />
            {/* Google Tag Manager */}
            {GTM_ID && (
                <Script
                    id="gtm-head"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                              })(window,document,'script','dataLayer','${GTM_ID}');
                            `,
                    }}
                />
            )}
            {/*title은 metadata가 자동 생성함 */}
            {/* <title>러브노트</title> */} 
        </head>
        <body>
            
        {/* GTM noscript */}
        {GTM_ID && (
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{display: 'none', visibility: 'hidden'}}
                />
            </noscript>
        )}
        <AuthProvider>
        <AppHeader />
            {children}
        </AuthProvider>
        </body>
        </html>
    );
}
