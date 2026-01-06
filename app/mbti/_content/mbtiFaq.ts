// app/mbti/_content/mbtiFaq.ts
import type { CategoryKey } from "@/app/mbti/_content/categoryInfo";
import type { SectionItem } from "@/app/mbti/_content/mbtiCategorySections";
import { getFaqsByMbtiCategory } from "@/app/mbti/_content/faqDatabase";

export type FaqItem = { q: string; a: string };

type MbtiAxes = {
  EI: "E" | "I";
  SN: "S" | "N";
  TF: "T" | "F";
  JP: "J" | "P";
};

// MBTI 축 추출
export function mbtiAxes(mbti: string): MbtiAxes {
  const m = (mbti ?? "").toUpperCase();
  return {
    EI: m[0] === "E" ? "E" : "I",
    SN: m[1] === "S" ? "S" : "N",
    TF: m[2] === "T" ? "T" : "F",
    JP: m[3] === "J" ? "J" : "P",
  };
}

// ✅ 새로운 데이터베이스 기반 FAQ 생성
export function buildFaqs(params: {
  mbtiUpperCase: string;
  category: CategoryKey;
  categoryTitle?: string;
  sections: Pick<SectionItem, "content">[];
}): FaqItem[] {
  const { mbtiUpperCase, category } = params;

  // 데이터베이스에서 해당 MBTI + 카테고리의 FAQ 가져오기
  const faqs = getFaqsByMbtiCategory(mbtiUpperCase, category);
  
  // FaqItem 형식으로 변환
  return faqs.map(f => ({
    q: f.q,
    a: f.a
  }));
}

// FAQPage JSON-LD 생성
export function buildFaqJsonLd(faqs: FaqItem[]): string {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return JSON.stringify(jsonLd);
}