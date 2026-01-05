// app/mbti/[mbtiType]/[category]/faq/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

import { categoryInfo, type CategoryKey } from "@/app/mbti/_content/categoryInfo";
import { mbtiDescriptions } from "@/app/mbti/_content/mbtiMeta";
import { buildFaqs } from "@/app/mbti/_content/mbtiFaq";
import { getMbtiCategorySections } from "@/app/mbti/_content/mbtiCategorySections";
import { getTopicsByCategory } from "@/app/mbti/_content/faqTopics";

type Params = { mbtiType: string; category: string };

const VALID_CATEGORIES: CategoryKey[] = ["marriage", "dating", "crush"];
const VALID_MBTI = new Set(Object.keys(mbtiDescriptions)); // "INTJ" ...

function safeCategory(raw: string): CategoryKey {
  return VALID_CATEGORIES.includes(raw as CategoryKey) ? (raw as CategoryKey) : "dating";
}

function safeMbtiUpper(raw: string): string {
  const up = (raw ?? "").toString().toUpperCase();
  return VALID_MBTI.has(up) ? up : "MBTI";
}

function safeMbtiSlug(raw: string): string {
  // URL은 소문자 쓰는 걸 추천 (이미 소문자 URL 쓰고 있으면 그대로 유지)
  return (raw ?? "").toString().toLowerCase();
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { mbtiType, category: categoryRaw } = await params;

  const mbtiUpper = safeMbtiUpper(mbtiType);
  const mbtiSlug = safeMbtiSlug(mbtiType);
  const category = safeCategory(categoryRaw);

  const categoryTitle = categoryInfo[category]?.title ?? "연애";

  const title = `${mbtiUpper} ${categoryTitle} FAQ | 자주 묻는 질문`;
  const description = `${mbtiUpper}의 ${categoryTitle}에서 자주 나오는 질문을 주제별로 정리했어요. 애정표현, 연락, 갈등, 관계 속도 등.`;

  const canonical = `/mbti/${mbtiSlug}/${category}/faq`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description },
  };
}

export default async function MbtiFaqIndexPage(
  { params }: { params: Promise<Params> }
) {
  const { mbtiType, category: categoryRaw } = await params;

  const mbtiUpper = safeMbtiUpper(mbtiType);
  const mbtiSlug = safeMbtiSlug(mbtiType);
  const category = safeCategory(categoryRaw);

  const basePath = `/mbti/${mbtiSlug}/${category}`;

  const currentCategory = categoryInfo[category];
  const currentMBTI =
    mbtiDescriptions[mbtiUpper] || { name: "MBTI 유형", traits: [], oneLiner: "" };

  const sections = getMbtiCategorySections(mbtiUpper, category);
  const categoryTopics = getTopicsByCategory(category);

  const faqs = buildFaqs({
    mbtiUpperCase: mbtiUpper,
    category,
    categoryTitle: currentCategory.title,
    sections,
  });

  const topicCounts = categoryTopics.map((t) => {
    const count = faqs.filter((f) => {
      const text = `${f.q} ${f.a}`.toLowerCase();
      return t.hintKeywords.some((k) => text.includes(k.toLowerCase()));
    }).length;
    return { ...t, count };
  });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Back */}
          <div className="mb-8">
            <Link
              href={basePath}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-300 transition-colors"
            >
              ← {mbtiUpper} × {currentCategory.title} 가이드로
            </Link>
          </div>

          {/* Hero */}
          <div className={`bg-gradient-to-br ${currentCategory.bg} rounded-3xl p-8 md:p-12 mb-10`}>
            <div className="text-center">
              <div className="text-5xl mb-3">❓</div>

              <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                {mbtiUpper} × {currentCategory.title} 자주 묻는 질문
              </h1>

              <p className="mt-3 text-gray-700 dark:text-gray-200">
                {currentMBTI.name}
                {currentMBTI.oneLiner ? ` · ${currentMBTI.oneLiner}` : ""}
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                주제별로 골라서 빠르게 확인해보세요.
              </p>
            </div>
          </div>

          {/* Topics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topicCounts.map((t) => (
              <Link
                key={t.key}
                href={`${basePath}/faq/${t.key}`}
                className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {t.title}
                  </h2>
                </div>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  해당 주제에서 많이 나오는 질문을 모아봤어요.
                </p>

                <p className="mt-4 text-sm font-medium text-purple-700 dark:text-purple-200 group-hover:underline">
                  주제 보기 →
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            ※ MBTI 성향 기반 참고용 요약이며, 개인차가 있을 수 있어요.
          </p>
        </div>
      </div>
    </div>
  );
}
