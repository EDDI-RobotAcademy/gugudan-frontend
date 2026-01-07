"use client";

import { useState } from "react";
import { SurveyModal } from "@/components/modal/Surveymodal";
import { fallbackSurveyContent, type SurveyContent } from "@/components/modal/_content/survey";

export default function SurveyTestButton() {
  const [open, setOpen] = useState(false);
  const [surveyContent, setSurveyContent] = useState<SurveyContent>(fallbackSurveyContent);
  const [loading, setLoading] = useState(false);

  const fetchSurvey = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/survey/questions`,
        { credentials: "include" }
      );

      if (!res.ok) return;

      const data = await res.json();

      // ✅ show=false면 테스트 버튼에서는 폴백으로라도 띄울지 선택
      if (!data?.show) {
        setSurveyContent(fallbackSurveyContent);
        setOpen(true);
        return;
      }
      // ✅ show=true면 설문 렌더
      setSurveyContent({
        title: data.title,
        subtitle: data.subtitle,
        footer: data.footer,
        questions: data.questions ?? [],
      });

      setOpen(true);
    } catch (e) {
      console.error("Failed to fetch survey:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async (answers: Record<string, string>) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/survey/responses`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (response.ok) {
        console.log("Survey submitted successfully");
      } else {
        console.error("Survey submission failed:", response.status);
      }
    } catch (e) {
      console.error("Failed to submit survey:", e);
    } 
  };

  return (
    <>
      <button
        onClick={fetchSurvey}
        disabled={loading}
        className="
          fixed bottom-24 right-6 z-40
          px-4 py-3 rounded-full
          bg-pink-600 text-white font-medium
          shadow-lg hover:shadow-xl
          hover:bg-pink-700
          transition-all
          disabled:opacity-60
        "
      >
        {loading ? "불러오는 중..." : "설문 테스트"}
      </button>

      <SurveyModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onComplete={handleComplete}
        surveyContent={surveyContent}
      />
    </>
  );
}
