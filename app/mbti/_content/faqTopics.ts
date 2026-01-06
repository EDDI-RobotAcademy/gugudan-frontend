// app/mbti/_content/faqTopics.ts

export type FaqTopicKey =
  // 썸 전용
  | "crush_signals"    // 호감·신호
  | "crush_contact"    // 밀당·연락
  | "crush_confession" // 고백·진전
  | "crush_dating"     // 데이트
  | "crush_tips"       // 꼬시기·팁
  // 연애 전용
  | "dating_affection"   // 애정 표현
  | "dating_contact"     // 대화·연락
  | "dating_conflict"    // 갈등·싸움
  | "dating_lifestyle"   // 데이트·일상
  | "dating_breakup"     // 이별·관계
  // 결혼 전용
  | "marriage_values"    // 결혼관·가치관
  | "marriage_lifestyle" // 가정생활
  | "marriage_conflict"  // 소통·갈등
  | "marriage_children"  // 육아·자녀
  | "marriage_family";   // 시댁·명절

type FaqTopicDef = {
  key: FaqTopicKey;
  title: string;
  hintKeywords: string[];
  category: "crush" | "dating" | "marriage"; // 카테고리 추가
};

export const FAQ_TOPICS: FaqTopicDef[] = [
  // === 썸 ===
  {
    key: "crush_signals",
    title: "호감 · 신호",
    category: "crush",
    hintKeywords: ["호감", "좋아", "관심", "신호", "표시", "눈치"],
  },
  {
    key: "crush_contact",
    title: "밀당 · 연락",
    category: "crush",
    hintKeywords: ["연락", "답장", "먼저", "밀당", "카톡", "메시지"],
  },
  {
    key: "crush_confession",
    title: "고백 · 진전",
    category: "crush",
    hintKeywords: ["고백", "진전", "확신", "타이밍", "썸", "기간"],
  },
  {
    key: "crush_dating",
    title: "데이트",
    category: "crush",
    hintKeywords: ["데이트", "만남", "첫", "주기", "장소"],
  },
  {
    key: "crush_tips",
    title: "꼬시기 · 팁",
    category: "crush",
    hintKeywords: ["꼬시", "어필", "호감", "매력", "방법", "팁"],
  },

  // === 연애 ===
  {
    key: "dating_affection",
    title: "애정 표현",
    category: "dating",
    hintKeywords: ["애정", "스킨십", "사랑", "표현", "애교"],
  },
  {
    key: "dating_contact",
    title: "대화 · 연락",
    category: "dating",
    hintKeywords: ["연락", "대화", "답장", "카톡", "소통"],
  },
  {
    key: "dating_conflict",
    title: "갈등 · 싸움",
    category: "dating",
    hintKeywords: ["싸움", "갈등", "화", "풀", "원인"],
  },
  {
    key: "dating_lifestyle",
    title: "데이트 · 일상",
    category: "dating",
    hintKeywords: ["데이트", "기념일", "선물", "여행", "일상"],
  },
  {
    key: "dating_breakup",
    title: "이별 · 관계",
    category: "dating",
    hintKeywords: ["이별", "헤어", "권태기", "장기", "유지"],
  },

  // === 결혼 ===
  {
    key: "marriage_values",
    title: "결혼관 · 가치관",
    category: "marriage",
    hintKeywords: ["결혼", "배우자", "기준", "생각", "가치관"],
  },
  {
    key: "marriage_lifestyle",
    title: "가정생활",
    category: "marriage",
    hintKeywords: ["집안일", "경제", "생활", "패턴", "돈"],
  },
  {
    key: "marriage_conflict",
    title: "소통 · 갈등",
    category: "marriage",
    hintKeywords: ["부부", "싸움", "대화", "소통", "갈등"],
  },
  {
    key: "marriage_children",
    title: "육아 · 자녀",
    category: "marriage",
    hintKeywords: ["육아", "자녀", "아이", "교육", "양육"],
  },
  {
    key: "marriage_family",
    title: "시댁 · 명절",
    category: "marriage",
    hintKeywords: ["시댁", "처가", "명절", "가족", "시어머니"],
  },
];

// 카테고리별로 필터링하는 헬퍼 함수
export function getTopicsByCategory(category: "crush" | "dating" | "marriage") {
  return FAQ_TOPICS.filter((t) => t.category === category);
}

export function safeTopicKey(raw: string): FaqTopicKey {
  const found = FAQ_TOPICS.find((t) => t.key === raw);
  return found ? found.key : "dating_affection";
}

export function getTopicDef(key: FaqTopicKey): FaqTopicDef {
  return FAQ_TOPICS.find((t) => t.key === key) || FAQ_TOPICS[5]; // dating_affection
}