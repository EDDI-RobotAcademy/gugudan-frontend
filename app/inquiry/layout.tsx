import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Love-Note";

export const metadata: Metadata = {
  title: "1:1 문의",
  description: "러브노트 서비스에 대한 궁금한 점을 1:1로 문의해주세요. 빠른 시간 내에 답변드리겠습니다.",
  alternates: {
    canonical: "/inquiry",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/inquiry`,
    siteName: SITE_NAME,
    title: `1:1 문의 | ${SITE_NAME}`,
    description: "러브노트 서비스에 대한 궁금한 점을 1:1로 문의해주세요.",
    locale: "ko_KR",
    images: [
      {
        url: `${SITE_URL}/og/default.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - 1:1 문의`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `1:1 문의 | ${SITE_NAME}`,
    description: "러브노트 서비스에 대한 궁금한 점을 1:1로 문의해주세요.",
    images: [`${SITE_URL}/og/default.png`],
  },
  robots: {
    index: false, // 개인 정보 포함 페이지이므로 인덱싱 제외
    follow: true,
  },
};

export default function InquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
