import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Love-Note";

export const metadata: Metadata = {
  title: `${SITE_NAME} - MBTI 연애 결혼 썸 고민 정리 AI 대화`,
  description: "MBTI 기반으로 연애, 결혼, 썸에서 이야기를 나누고 대화를 정리해가는 서비스. MBTI 연애 가이드, MBTI 결혼 가이드, MBTI 썸 가이드로 관계 고민과 대화를 정리해요. 연애 고민, 결혼 고민, 썸 고민을 AI와 함께 이야기하며 정리해보세요.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - MBTI 연애 결혼 썸 고민 정리 AI 대화`,
    description: "MBTI 기반으로 연애, 결혼, 썸에서 이야기를 나누고 대화를 정리해가는 서비스. MBTI 연애 가이드, MBTI 결혼 가이드, MBTI 썸 가이드로 관계 고민과 대화를 정리해요.",
    locale: "ko_KR",
    images: [
      {
        url: `${SITE_URL}/og/default.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - MBTI 연애 결혼 썸 고민 정리 AI 대화`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - MBTI 연애 결혼 썸 고민 정리 AI 대화`,
    description: "MBTI 기반으로 연애, 결혼, 썸에서 이야기를 나누고 대화를 정리해가는 서비스. MBTI 연애 가이드, MBTI 결혼 가이드, MBTI 썸 가이드로 관계 고민과 대화를 정리해요.",
    images: [`${SITE_URL}/og/default.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <HomeClient />;
}