import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Love-Note";

export const metadata: Metadata = {
  title: "자주 묻는 질문 (FAQ) | 서비스 이용 안내",
  description: "러브노트 서비스 이용 방법, 기능 사용법, 계정 관리, 문의 방법 등에 대한 자주 묻는 질문과 답변을 확인해보세요. 서비스 사용 중 궁금한 점을 빠르게 해결할 수 있습니다.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    title: `자주 묻는 질문 (FAQ) | 서비스 이용 안내 | ${SITE_NAME}`,
    description: "러브노트 서비스 이용 방법, 기능 사용법, 계정 관리, 문의 방법 등에 대한 자주 묻는 질문과 답변을 확인해보세요.",
    locale: "ko_KR",
    images: [
      {
        url: `${SITE_URL}/og/default.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - 자주 묻는 질문`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `자주 묻는 질문 (FAQ) | 서비스 이용 안내 | ${SITE_NAME}`,
    description: "러브노트 서비스 이용 방법, 기능 사용법, 계정 관리, 문의 방법 등에 대한 자주 묻는 질문과 답변을 확인해보세요.",
    images: [`${SITE_URL}/og/default.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
