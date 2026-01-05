// app/mbti/_content/faqDatabase.ts

import type { FaqTopicKey } from "./faqTopics";

export type FaqItem = {
  mbti: string;
  category: "crush" | "dating" | "marriage";
  topic: FaqTopicKey;
  q: string;
  a: string;
};

// 하... 나중에 DB로 들어가야됨.............
export const FAQ_DATABASE: FaqItem[] = [
  // INTP × 연애
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_affection",
    q: "INTP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "INTP는 말보다 행동으로 애정을 표현해요. 상대방이 관심 있는 주제를 깊이 탐구해서 공유하거나, 문제 해결을 도와주는 방식으로 사랑을 보여줍니다. 직접적인 감정 표현은 어색해할 수 있지만, 진심으로 좋아하면 시간과 에너지를 쏟아요."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_affection",
    q: "INTP는 스킨십을 어떻게 생각하나요?",
    a: "INTP는 스킨십에 신중한 편이에요. 충분히 친밀감이 쌓인 후에야 자연스럽게 받아들이며, 갑작스러운 스킨십은 부담스러워할 수 있어요. 하지만 편안한 관계가 되면 은근히 스킨십을 즐기기도 합니다."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_contact",
    q: "INTP는 연락을 자주 하는 편인가요?",
    a: "INTP는 연락 빈도가 많지 않은 편이에요. 할 말이 있을 때만 연락하는 스타일이라 상대방이 섭섭해할 수 있어요. 하지만 연락이 뜸하다고 관심이 없는 건 아니니 오해하지 마세요. 중요한 건 연락의 질이에요."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_contact",
    q: "INTP가 답장을 늦게 하는 이유는 무엇인가요?",
    a: "INTP는 생각에 빠져 있거나 다른 일에 몰두하면 연락을 잊어버리는 경우가 많아요. 고의로 무시하는 게 아니라 진짜 까먹는 거예요. 또는 완벽한 답변을 생각하느라 시간이 걸릴 수도 있습니다."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_conflict",
    q: "INTP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "INTP는 감정보다 논리로 접근해요. 화가 났을 때는 혼자 시간을 가지며 생각을 정리하는 걸 선호하니, 일단 시간을 주세요. 충분히 진정된 후 차분하게 대화하면 잘 풀립니다."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_conflict",
    q: "INTP는 갈등 상황에서 어떻게 반응하나요?",
    a: "INTP는 갈등이 생기면 감정적으로 대응하기보다 문제의 원인을 분석하려고 해요. 감정 표현이 서툴러서 차갑게 보일 수 있지만, 사실 내면으로는 깊이 고민하고 있어요. 논리적으로 풀어가려는 태도를 이해해주세요."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INTP는 어떤 데이트를 좋아하나요?",
    a: "INTP는 의미 있는 대화를 나눌 수 있는 데이트를 선호해요. 박물관, 전시회, 책방 같은 지적 호기심을 자극하는 곳이나, 조용한 카페에서 깊은 대화를 나누는 걸 좋아합니다. 번잡하거나 형식적인 데이트는 별로예요."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INTP는 기념일을 잘 챙기나요?",
    a: "INTP는 기념일을 중요하게 생각하지 않거나 까먹는 경우가 많아요. 형식적인 이벤트보다 진심 어린 시간을 더 가치있게 여기기 때문이에요. 하지만 상대방이 중요하게 생각한다는 걸 알면 노력해서 챙기려고 합니다."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_breakup",
    q: "INTP의 이별 징조는 무엇인가요?",
    a: "INTP는 관계에 회의감이 들면 점점 거리를 두기 시작해요. 대화가 줄어들고, 만남을 피하며, 감정적으로 철수하는 모습을 보입니다. 논리적으로 관계를 분석한 결과 맞지 않다고 판단하면 미련 없이 정리하는 편이에요."
  },
  {
    mbti: "INTP",
    category: "dating",
    topic: "dating_breakup",
    q: "INTP와 오래 연애하는 비결은?",
    a: "INTP의 독립성을 존중하고, 지적 자극을 주는 관계를 유지하는 게 중요해요. 서로의 개인 시간을 보장하면서도 깊이 있는 대화로 연결되어 있다는 느낌을 주세요. INTP는 이해받는다고 느끼면 오래 함께할 수 있어요."
  },

  // INTP × 썸
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_signals",
    q: "INTP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "INTP는 조용하지만 확실하게 신호를 보내요. 좋아하는 사람 앞에서는 평소보다 말이 많아지고, 자신의 생각이나 지식을 공유하려고 해요. 또한 상대방의 말을 경청하고 진지하게 대화를 이어가려는 모습을 보입니다."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_signals",
    q: "INTP가 관심 없을 때는 어떤 태도를 보이나요?",
    a: "INTP는 관심 없으면 최소한의 대화만 하고 빨리 끝내려고 해요. 형식적인 답변만 하거나, 대화를 이어가려는 노력을 전혀 하지 않아요. 호기심이나 탐구심이 전혀 보이지 않으면 관심이 없는 거예요."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_contact",
    q: "INTP는 썸 단계에서 먼저 연락하나요?",
    a: "INTP는 먼저 연락하는 걸 망설여요. 상대방이 부담스러워할까 봐 걱정하거나, 뭐라고 말해야 할지 고민하다가 시간이 지나가는 경우가 많아요. 하지만 진짜 관심 있으면 흥미로운 주제를 찾아서 먼저 말을 걸기도 합니다."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_contact",
    q: "INTP와 썸 탈 때 대화 주제는 무엇이 좋을까요?",
    a: "INTP는 지적 호기심을 자극하는 주제를 좋아해요. 과학, 철학, 책, 영화 분석 같은 깊이 있는 대화가 좋고, 일상적인 안부나 날씨 얘기보다는 '왜'와 '어떻게'에 대한 질문이 효과적이에요."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_confession",
    q: "INTP는 언제 고백하는 편인가요?",
    a: "INTP는 고백 타이밍을 계속 저울질하다가 늦어지는 경우가 많아요. 확신이 들 때까지 신중하게 관찰하고 분석하기 때문에, 상대방이 먼저 신호를 주거나 확실한 분위기가 조성되어야 움직이는 편이에요."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_confession",
    q: "INTP의 마음을 확인하는 방법은?",
    a: "INTP에게 직접 물어보는 게 가장 확실해요. 돌려 말하거나 눈치 게임을 하면 INTP는 알아채지 못할 수 있어요. 솔직하게 감정을 표현하고 질문하면, INTP도 논리적으로 자신의 감정을 정리해서 답해줄 거예요."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_dating",
    q: "INTP와 첫 데이트는 어디가 좋을까요?",
    a: "INTP는 조용하고 대화하기 좋은 곳을 선호해요. 카페, 서점, 작은 전시회처럼 부담 없이 이야기 나눌 수 있는 장소가 좋아요. 시끄럽거나 사람이 많은 곳은 INTP를 지치게 할 수 있으니 피하는 게 좋습니다."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_dating",
    q: "INTP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "INTP는 자주 만나는 걸 선호하지 않아요. 일주일에 1-2번 정도 의미 있는 만남을 갖는 걸 편하게 느끼고, 너무 자주 만나면 개인 시간이 부족해서 부담스러워할 수 있어요."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_tips",
    q: "INTP를 꼬시는 가장 효과적인 방법은?",
    a: "INTP의 지적 호기심을 자극하세요. 흥미로운 주제로 깊은 대화를 나누고, INTP의 생각을 존중하며 경청하는 모습을 보이면 효과적이에요. 또한 독립적이고 자기주관이 뚜렷한 모습을 보이면 INTP가 매력을 느낍니다."
  },
  {
    mbti: "INTP",
    category: "crush",
    topic: "crush_tips",
    q: "INTP가 싫어하는 행동은 무엇인가요?",
    a: "INTP는 논리 없는 감정 표현이나 지나친 집착을 싫어해요. 또한 형식적이고 뻔한 대화, 근거 없는 주장, 개인 시간을 침해하는 행동도 부담스러워합니다. INTP의 독립성을 존중하지 않으면 빠르게 거리를 둘 수 있어요."
  },

  // INTP × 결혼
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_values",
    q: "INTP의 결혼관은 어떤가요?",
    a: "INTP는 결혼을 신중하게 접근해요. 감정보다 논리적으로 판단하며, 평생을 함께할 파트너로서 지적 교감과 독립성 존중이 가능한지를 중요하게 봅니다. 결혼이 자신의 자유를 제약하지 않을지 깊이 고민하는 편이에요."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_values",
    q: "INTP가 배우자로 원하는 사람은?",
    a: "INTP는 지적으로 자극을 주고, 독립적이며, 자신만의 세계가 있는 사람을 원해요. 또한 INTP의 사고방식을 이해하고 존중해주며, 불필요한 감정 소모 없이 논리적으로 소통할 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INTP는 집안일을 잘 하나요?",
    a: "INTP는 집안일에 큰 관심이 없어요. 효율적인 시스템을 만들어 최소한으로 하려고 하거나, 자주 미루는 편이에요. 하지만 논리적으로 필요성을 이해하면 자신의 방식대로 해결하려고 노력합니다."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INTP의 경제관은 어떤가요?",
    a: "INTP는 돈 관리에 무심한 편이에요. 필요한 것에는 쓰지만 계획적으로 저축하거나 재테크에 신경 쓰지 않는 경우가 많아요. 다만 관심을 갖게 되면 효율적인 시스템을 연구해서 적용하기도 합니다."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INTP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "INTP는 감정적인 싸움을 피하고 논리적으로 접근하려고 해요. 일단 시간을 주고, 진정된 후 차분하게 문제의 원인과 해결책을 논의하는 게 효과적이에요. 감정을 폭발시키면 INTP는 더 멀어질 수 있어요."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INTP는 부부 대화를 잘 하나요?",
    a: "INTP는 의미 있는 대화는 잘하지만, 일상적인 소소한 대화는 서툴러요. 감정 공유보다 문제 해결 중심으로 대화하기 때문에, 배우자가 공감을 원할 때 답답함을 느낄 수 있어요. 명확하게 원하는 바를 말해주는 게 좋습니다."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_children",
    q: "INTP의 육아 스타일은 어떤가요?",
    a: "INTP는 아이의 호기심과 탐구심을 키워주는 데 관심이 많아요. 규칙보다 논리를 중시하고, 아이 스스로 생각하고 판단할 수 있도록 유도하는 편이에요. 다만 감정적 교감이나 스킨십은 서툴 수 있어요."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_children",
    q: "INTP는 자녀 교육을 어떻게 생각하나요?",
    a: "INTP는 아이의 자율성과 창의성을 존중하는 교육을 선호해요. 주입식 교육보다 스스로 탐구하고 배우도록 유도하며, 질문을 장려하고 논리적 사고를 키워주려고 합니다. 과도한 간섭이나 통제는 하지 않으려고 해요."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_family",
    q: "INTP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "INTP는 가족 모임이나 명절을 부담스러워해요. 형식적인 예의나 불필요한 사교가 에너지를 소모시키기 때문이에요. 하지만 배우자가 중요하게 생각한다면 최소한의 노력은 기울이려고 합니다."
  },
  {
    mbti: "INTP",
    category: "marriage",
    topic: "marriage_family",
    q: "INTP와 명절을 보내려면 어떻게 해야 하나요?",
    a: "INTP에게 명절은 에너지 소모가 큰 이벤트예요. 가능하면 시간을 짧게 하거나, 혼자만의 시간을 보장해주세요. 또한 형식적인 절차를 강요하기보다 INTP가 편하게 참여할 수 있는 역할을 주는 게 좋아요."
  },

  // INTJ × 연애
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_affection",
    q: "INTJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "INTJ는 직접적인 감정 표현보다 실질적인 행동으로 애정을 보여줘요. 미래를 함께 계획하거나, 상대방의 목표 달성을 돕는 방식으로 사랑을 표현합니다. 말보다 행동으로 책임감을 보이는 게 INTJ의 애정 표현이에요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_affection",
    q: "INTJ는 스킨십을 어떻게 생각하나요?",
    a: "INTJ는 스킨십에 신중하고 선택적이에요. 의미 없는 스킨십보다 진심이 담긴 친밀한 접촉을 선호하며, 충분히 신뢰가 쌓인 후에야 편안함을 느낍니다. 갑작스러운 스킨십은 부담스러워할 수 있어요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_contact",
    q: "INTJ는 연락을 자주 하는 편인가요?",
    a: "INTJ는 필요한 연락만 하는 편이에요. 의미 없는 잡담이나 형식적인 인사를 좋아하지 않고, 할 말이 있을 때만 연락합니다. 하지만 관계가 중요하다고 생각하면 규칙적으로 연락하는 패턴을 만들기도 해요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_contact",
    q: "INTJ와 대화할 때 주의할 점은?",
    a: "INTJ는 효율적이고 의미 있는 대화를 원해요. 핵심 없이 장황하게 말하거나, 감정만 늘어놓는 대화는 피하세요. 논리적이고 구조화된 대화를 선호하며, 결론과 해결책을 중시합니다."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "INTJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "INTJ는 감정보다 해결책에 집중해요. 문제의 원인을 논리적으로 분석하고, 앞으로 어떻게 개선할지 논의하는 게 효과적입니다. 감정적으로 몰아붙이면 벽을 쌓을 수 있으니 냉정하게 대화하세요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "INTJ는 갈등을 어떻게 해결하나요?",
    a: "INTJ는 갈등을 시스템 오류처럼 접근해요. 문제를 분석하고, 근본 원인을 파악한 뒤, 재발 방지를 위한 해결책을 제시합니다. 감정보다 효율성을 우선시하기 때문에 차갑게 느껴질 수 있지만, 관계 개선을 진지하게 고민하고 있어요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INTJ는 어떤 데이트를 좋아하나요?",
    a: "INTJ는 목적이 있는 데이트를 선호해요. 새로운 것을 배우거나 경험할 수 있는 활동, 깊은 대화를 나눌 수 있는 조용한 장소를 좋아합니다. 계획 없이 즉흥적인 데이트는 불편해할 수 있어요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INTJ는 일상에서 어떤 연인인가요?",
    a: "INTJ는 독립적이고 자기주도적인 연인이에요. 항상 함께 있기보다 각자의 시간을 중시하며, 효율적으로 시간을 관리하려고 합니다. 계획적이고 체계적인 라이프스타일을 선호해요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "INTJ의 이별 징조는 무엇인가요?",
    a: "INTJ는 관계에 미래가 없다고 판단하면 감정을 정리하기 시작해요. 점점 거리를 두고, 대화가 줄어들며, 냉정하게 변하는 모습을 보입니다. INTJ는 결정을 내리면 번복하지 않는 편이에요."
  },
  {
    mbti: "INTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "INTJ와 오래 연애하는 비결은?",
    a: "INTJ와는 지적 교감과 상호 성장이 가능한 관계를 만드는 게 중요해요. INTJ의 독립성을 존중하고, 함께 목표를 향해 나아가는 동반자 같은 관계를 유지하세요. INTJ는 가치 있는 관계라고 생각하면 헌신적이에요."
  },

  // INTJ × 썸
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_signals",
    q: "INTJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "INTJ는 조용하지만 의도적으로 신호를 보내요. 상대방에게 시간을 할애하고, 깊은 대화를 시도하며, 미래에 대한 얘기를 꺼내는 게 호감의 신호예요. INTJ가 개인적인 생각을 공유한다면 특별하게 생각하는 거예요."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_signals",
    q: "INTJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "INTJ는 관심 없으면 아예 시간을 쓰지 않아요. 최소한의 예의만 지키고, 대화를 빨리 끝내려고 하며, 개인적인 질문이나 미래에 대한 언급을 전혀 하지 않습니다."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_contact",
    q: "INTJ는 썸 단계에서 먼저 연락하나요?",
    a: "INTJ는 관심 있으면 전략적으로 연락해요. 목적 있는 대화나 의미 있는 주제로 먼저 말을 걸며, 상대방의 반응을 분석하면서 관계를 진전시킵니다. 무계획적인 연락은 하지 않아요."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_contact",
    q: "INTJ와 썸 탈 때 효과적인 대화법은?",
    a: "INTJ는 깊이 있고 지적인 대화를 좋아해요. 피상적인 잡담보다 철학, 미래, 목표, 흥미로운 아이디어에 대해 얘기하세요. 또한 논리적이고 구조화된 사고를 보여주면 INTJ가 매력을 느낍니다."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_confession",
    q: "INTJ는 언제 고백하나요?",
    a: "INTJ는 충분히 분석하고 성공 확률이 높다고 판단될 때 고백해요. 감정에 휘둘리기보다 논리적으로 관계의 가능성을 평가한 후 움직이며, 확신이 없으면 고백을 미루는 편이에요."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_confession",
    q: "INTJ의 마음을 확인하는 방법은?",
    a: "INTJ에게 직접 물어보는 게 가장 빠르고 정확해요. 돌려 말하거나 눈치 게임을 하면 INTJ는 신호를 놓칠 수 있어요. 솔직하고 명확하게 감정을 표현하면, INTJ도 논리적으로 답변해줄 거예요."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_dating",
    q: "INTJ와 첫 데이트는 어디가 좋을까요?",
    a: "INTJ는 의미 있고 조용한 장소를 선호해요. 미술관, 도서관, 카페처럼 깊은 대화를 나눌 수 있는 곳이 좋고, 시끄럽거나 산만한 환경은 피하세요. 계획된 데이트를 편안하게 느낍니다."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_dating",
    q: "INTJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "INTJ는 의미 있는 만남을 선호하기 때문에 자주 만나지 않을 수 있어요. 일주일에 1-2번 정도 질 높은 시간을 보내는 걸 선호하며, 너무 자주 만나면 부담스러워할 수 있습니다."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_tips",
    q: "INTJ를 꼬시는 효과적인 방법은?",
    a: "INTJ는 지적이고 독립적인 사람에게 끌려요. 자기주관이 뚜렷하고, 목표 지향적이며, 깊이 있는 대화가 가능한 모습을 보이세요. 또한 INTJ의 생각을 존중하고 논리적으로 소통하면 효과적입니다."
  },
  {
    mbti: "INTJ",
    category: "crush",
    topic: "crush_tips",
    q: "INTJ가 싫어하는 행동은?",
    a: "INTJ는 비효율적이고 감정적인 행동을 싫어해요. 논리 없는 주장, 과도한 애교, 지나친 감정 표현, 계획 없는 즉흥성은 INTJ를 불편하게 만듭니다. 또한 독립성을 침해하거나 끈질기게 매달리면 거리를 둘 수 있어요."
  },

  // INTJ × 결혼
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "INTJ의 결혼관은 어떤가요?",
    a: "INTJ는 결혼을 전략적 파트너십으로 봐요. 감정보다 장기적 목표와 가치관의 일치를 중시하며, 함께 성장하고 발전할 수 있는 관계인지를 신중하게 평가합니다. 결혼은 INTJ에게 중대한 결정이에요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "INTJ가 배우자로 원하는 사람은?",
    a: "INTJ는 지적이고 독립적이며, 자기 성장에 관심 있는 사람을 원해요. 감정보다 논리로 소통 가능하고, 서로의 목표를 존중하며 지원할 수 있는 파트너를 찾습니다. 의존적이거나 감정적인 사람은 맞지 않아요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INTJ는 집안일을 어떻게 하나요?",
    a: "INTJ는 효율적인 시스템을 만들어 집안일을 처리해요. 루틴을 정하거나 분담을 명확히 하는 걸 선호하며, 불필요한 일은 최소화하려고 합니다. 계획적이고 체계적으로 접근하는 편이에요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INTJ의 경제관은?",
    a: "INTJ는 장기적 재무 계획을 중시해요. 투자와 저축을 전략적으로 관리하며, 불필요한 소비를 줄이고 목표 달성을 위해 돈을 효율적으로 사용합니다. 재테크에 관심이 많고 체계적으로 접근해요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INTJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "INTJ는 문제 해결 중심으로 접근해요. 감정을 쏟아내기보다 문제의 원인과 해결책을 논리적으로 논의하세요. 감정적으로 몰아붙이면 INTJ는 더 냉정해질 수 있으니 차분하게 대화하는 게 중요합니다."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INTJ는 부부 대화를 잘 하나요?",
    a: "INTJ는 의미 있는 대화는 잘하지만, 일상적인 감정 공유는 서툴러요. 효율적이고 핵심적인 대화를 선호하며, 불필요한 잡담은 피하는 편입니다. 명확한 의사소통이 INTJ와의 대화 핵심이에요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "INTJ의 육아 스타일은?",
    a: "INTJ는 아이의 독립성과 논리적 사고를 키우는 데 집중해요. 규칙을 명확히 정하고, 아이 스스로 문제를 해결하도록 유도하며, 지적 성장을 중시합니다. 감정적 교감보다 교육에 초점을 맞추는 편이에요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "INTJ는 자녀 교육을 어떻게 생각하나요?",
    a: "INTJ는 장기적 관점에서 자녀 교육을 계획해요. 아이의 재능과 관심사를 파악해서 전략적으로 개발하며, 독립적이고 논리적인 사고를 키우는 걸 중시합니다. 과도한 통제보다 자율성을 존중하는 편이에요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "INTJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "INTJ는 가족 관계도 효율적으로 관리하려고 해요. 불필요한 갈등을 피하고, 최소한의 예의를 지키며, 형식적인 관계를 유지하는 편입니다. 가족 모임보다 개인 시간을 더 중요하게 생각해요."
  },
  {
    mbti: "INTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "INTJ와 명절을 보내려면?",
    a: "INTJ는 명절을 부담스러워할 수 있어요. 가능하면 계획을 미리 세우고, INTJ의 역할을 명확히 정해주세요. 또한 혼자만의 시간을 보장하고, 불필요한 행사는 최소화하는 게 INTJ를 배려하는 방법이에요."
  },

  // INFP × 연애
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_affection",
    q: "INFP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "INFP는 감성적이고 낭만적인 방식으로 애정을 표현해요. 편지, 작은 선물, 의미 있는 말로 진심을 전하며, 상대방의 감정에 깊이 공감하고 이해하려고 노력합니다. INFP의 사랑은 조용하지만 깊고 진심 어려요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_affection",
    q: "INFP는 스킨십을 어떻게 생각하나요?",
    a: "INFP는 감정적으로 연결되었을 때 스킨십을 편안하게 느껴요. 피상적인 접촉보다 진심이 담긴 스킨십을 선호하며, 충분히 친밀감이 쌓인 후에야 자연스럽게 받아들입니다. 급하게 진행되면 부담스러워할 수 있어요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_contact",
    q: "INFP는 연락을 자주 하는 편인가요?",
    a: "INFP는 감정 상태에 따라 연락 빈도가 달라져요. 기분이 좋을 때는 적극적으로 연락하지만, 감정적으로 지치거나 내면 정리가 필요할 때는 연락이 뜸해질 수 있어요. 이해해주고 기다려주면 다시 돌아와요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_contact",
    q: "INFP와 대화할 때 주의할 점은?",
    a: "INFP는 진심 어린 대화를 원해요. 피상적이거나 형식적인 대화보다 감정과 가치관을 나눌 수 있는 깊은 대화를 선호합니다. INFP의 감정을 존중하고, 판단하지 않고 들어주는 게 중요해요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_conflict",
    q: "INFP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "INFP는 감정이 상하면 혼자 있고 싶어 해요. 시간을 주고, 진정된 후 진심으로 사과하고 감정을 나누세요. INFP는 진심을 알아보기 때문에 형식적인 사과는 통하지 않아요. 공감과 이해가 핵심이에요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_conflict",
    q: "INFP는 갈등 상황에서 어떻게 반응하나요?",
    a: "INFP는 갈등을 피하려는 경향이 있어요. 감정적으로 상처받으면 자신의 세계로 들어가 버리고, 표현하지 않고 혼자 삭이는 경우가 많습니다. 안전하다고 느껴야 마음을 열고 얘기할 수 있어요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INFP는 어떤 데이트를 좋아하나요?",
    a: "INFP는 낭만적이고 의미 있는 데이트를 좋아해요. 자연 속 산책, 작은 카페에서의 대화, 영화나 전시회처럼 감성을 자극하는 활동을 선호합니다. 시끄럽거나 사람 많은 곳보다 조용하고 아늑한 분위기를 좋아해요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INFP는 일상에서 어떤 연인인가요?",
    a: "INFP는 따뜻하고 배려 깊은 연인이에요. 상대방의 감정을 세심하게 살피고, 작은 것에서도 의미를 찾으며, 낭만적인 순간을 만들어내려고 노력합니다. 다만 혼자만의 시간도 필요해서 때때로 조용히 있고 싶어 해요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_breakup",
    q: "INFP의 이별 징조는 무엇인가요?",
    a: "INFP는 감정적으로 거리를 두기 시작하면 이별을 생각하는 거예요. 대화가 피상적으로 변하고, 자신의 감정을 공유하지 않으며, 점점 자기 세계로 들어가는 모습을 보입니다. INFP는 이별도 조용히 준비하는 편이에요."
  },
  {
    mbti: "INFP",
    category: "dating",
    topic: "dating_breakup",
    q: "INFP와 오래 연애하는 비결은?",
    a: "INFP의 감정을 존중하고, 진심 어린 교감을 유지하는 게 중요해요. INFP의 이상주의를 이해하고, 함께 꿈을 꾸며, 감정적으로 안전한 공간을 만들어주세요. INFP는 진심을 느끼면 헌신적으로 사랑해요."
  },

  // INFP × 썸
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_signals",
    q: "INFP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "INFP는 조심스럽게 신호를 보내요. 상대방에게 관심을 보이지만 직접적이지 않고, 의미심장한 대화나 작은 배려로 마음을 전합니다. 자신의 감정이나 생각을 조금씩 공유하기 시작하면 호감이 있는 거예요."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_signals",
    q: "INFP가 관심 없을 때는 어떻게 행동하나요?",
    a: "INFP는 관심 없으면 예의 바르지만 거리를 둬요. 친절하게 대하지만 깊은 대화를 피하고, 개인적인 얘기를 전혀 하지 않으며, 만남도 최소한으로 유지합니다. 감정적인 교류가 전혀 없으면 관심이 없는 거예요."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_contact",
    q: "INFP는 썸 단계에서 먼저 연락하나요?",
    a: "INFP는 먼저 연락하고 싶어도 망설이는 경우가 많아요. 거절당할까 봐, 부담 줄까 봐 고민하다가 타이밍을 놓치기도 합니다. 하지만 용기를 내면 의미 있는 대화로 먼저 다가가기도 해요."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_contact",
    q: "INFP와 썸 탈 때 효과적인 대화법은?",
    a: "INFP는 진심 어린 대화를 좋아해요. 꿈, 가치관, 감정에 대해 솔직하게 얘기하고, INFP의 이야기를 판단 없이 들어주세요. 공감과 이해를 보여주면 INFP가 마음을 열기 시작합니다."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_confession",
    q: "INFP는 언제 고백하나요?",
    a: "INFP는 고백을 오래 망설이는 편이에요. 감정이 확실해도 거절이 두려워서 타이밍을 재다가 늦어지는 경우가 많습니다. 안전하고 낭만적인 분위기에서, 확신이 들 때 조심스럽게 고백해요."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_confession",
    q: "INFP의 마음을 확인하는 방법은?",
    a: "INFP에게 직접 물어보되, 부담 주지 않는 방식으로 접근하세요. INFP는 강압적인 질문에는 마음을 닫지만, 안전하고 편안한 분위기에서는 솔직하게 감정을 나눌 수 있어요."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_dating",
    q: "INFP와 첫 데이트는 어디가 좋을까요?",
    a: "INFP는 조용하고 낭만적인 장소를 좋아해요. 공원 산책, 작은 카페, 북카페, 미술관처럼 감성적이고 대화하기 좋은 곳이 좋습니다. 시끄럽거나 복잡한 곳은 INFP를 지치게 할 수 있어요."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_dating",
    q: "INFP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "INFP는 의미 있는 만남을 선호해서 자주 만나지 않을 수 있어요. 일주일에 1-2번 정도 깊은 대화를 나누는 시간을 선호하며, 너무 자주 만나면 에너지 소모로 부담스러워할 수 있습니다."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_tips",
    q: "INFP를 꼬시는 효과적인 방법은?",
    a: "INFP는 진심과 깊이 있는 사람에게 끌려요. 감정을 솔직하게 표현하고, INFP의 가치관을 존중하며, 낭만적이고 배려 깊은 모습을 보이세요. 또한 INFP의 꿈과 이상을 이해하고 응원해주면 효과적이에요."
  },
  {
    mbti: "INFP",
    category: "crush",
    topic: "crush_tips",
    q: "INFP가 싫어하는 행동은?",
    a: "INFP는 진심 없는 행동, 감정을 무시하는 태도, 가치관을 비웃는 행동을 싫어해요. 또한 공격적이거나 강압적인 태도, 피상적인 대화도 불편해합니다. INFP의 감성을 존중하지 않으면 마음을 닫아버려요."
  },

  // INFP × 결혼
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_values",
    q: "INFP의 결혼관은 어떤가요?",
    a: "INFP는 결혼을 낭만적이고 이상적으로 생각해요. 영혼의 동반자를 찾고 싶어 하며, 감정적 교감과 가치관의 일치를 중요하게 봅니다. INFP에게 결혼은 진정한 사랑과 이해를 바탕으로 한 평생의 약속이에요."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_values",
    q: "INFP가 배우자로 원하는 사람은?",
    a: "INFP는 자신을 있는 그대로 받아들이고, 꿈을 응원해주며, 감정적으로 안전한 공간을 만들어주는 사람을 원해요. 진심 어리고 따뜻하며, 깊은 대화를 나눌 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INFP는 집안일을 어떻게 하나요?",
    a: "INFP는 집안일에 완벽주의적이지 않아요. 분위기나 기분에 따라 하기도 하고 미루기도 하며, 창의적인 방식으로 해결하려고 합니다. 파트너가 이해하고 함께 분담하면 잘 해낼 수 있어요."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INFP의 경제관은?",
    a: "INFP는 돈보다 가치와 의미를 중시해요. 계획적인 저축보다 필요하거나 의미 있는 것에 쓰는 편이며, 재테크에는 큰 관심이 없을 수 있어요. 다만 파트너와 함께 계획을 세우면 노력하려고 합니다."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INFP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "INFP는 감정이 상하면 혼자 시간을 가지려고 해요. 진정될 때까지 기다려주고, 진심으로 사과하며 감정을 공유하세요. INFP는 진심을 느끼면 용서하는 마음이 큰 편이에요."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INFP는 부부 대화를 어떻게 하나요?",
    a: "INFP는 감정적으로 깊은 대화를 원해요. 피상적인 일상 대화보다 서로의 마음과 생각을 나누는 시간을 중요하게 여깁니다. 판단하지 않고 들어주고, 공감해주는 게 INFP와의 대화에서 중요해요."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_children",
    q: "INFP의 육아 스타일은?",
    a: "INFP는 따뜻하고 공감적인 부모예요. 아이의 감정을 세심하게 살피고, 개성과 창의성을 존중하며, 자유롭게 표현하도록 격려합니다. 규칙보다 이해와 대화로 아이를 키우는 걸 선호해요."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_children",
    q: "INFP는 자녀 교육을 어떻게 생각하나요?",
    a: "INFP는 아이의 개성과 꿈을 존중하는 교육을 선호해요. 성적보다 아이가 진정으로 원하는 것을 찾도록 돕고, 감정적으로 건강하게 성장하도록 지원합니다. 강압적인 교육은 하지 않으려고 해요."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_family",
    q: "INFP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "INFP는 가족 관계에서도 조화를 중시해요. 갈등을 피하려고 노력하고, 예의 바르게 대하지만, 가치관이 맞지 않으면 스트레스를 받을 수 있어요. 파트너의 지지가 있으면 잘 적응하려고 노력합니다."
  },
  {
    mbti: "INFP",
    category: "marriage",
    topic: "marriage_family",
    q: "INFP와 명절을 보내려면?",
    a: "INFP는 명절에 사람들과 어울리는 게 에너지 소모가 클 수 있어요. 중간중간 쉴 수 있는 시간을 주고, 과도한 역할을 강요하지 마세요. INFP의 감정을 배려하면서 함께하면 좋아요."
  },

  // INFJ × 연애
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_affection",
    q: "INFJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "INFJ는 깊고 의미 있는 방식으로 애정을 표현해요. 상대방의 감정을 세심하게 살피고, 필요한 것을 먼저 챙겨주며, 진심 어린 말과 행동으로 사랑을 보여줍니다. INFJ의 사랑은 조용하지만 깊고 헌신적이에요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_affection",
    q: "INFJ는 스킨십을 어떻게 생각하나요?",
    a: "INFJ는 감정적 친밀감이 쌓인 후 스킨십을 편안하게 느껴요. 피상적인 접촉보다 진심이 담긴 스킨십을 선호하며, 상대방과의 감정적 연결이 중요합니다. 급하게 진행되면 불편해할 수 있어요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_contact",
    q: "INFJ는 연락을 자주 하는 편인가요?",
    a: "INFJ는 의미 있는 연락을 선호해요. 형식적인 안부보다 깊은 대화를 나누려고 하며, 상대방의 상태를 살피는 연락을 합니다. 혼자만의 시간이 필요할 때는 연락이 뜸해질 수 있지만, 관심이 없는 건 아니에요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_contact",
    q: "INFJ와 대화할 때 주의할 점은?",
    a: "INFJ는 진심 어린 대화를 원해요. 피상적이거나 거짓된 말은 금방 알아채고 실망합니다. 솔직하고 깊이 있는 대화를 나누고, INFJ의 통찰을 존중하는 태도를 보이세요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "INFJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "INFJ는 갈등을 싫어하지만 문제를 회피하지 않아요. 진심으로 사과하고 문제를 함께 해결하려는 자세를 보이면 INFJ가 마음을 열어요. 감정을 인정하고 공감하는 게 중요합니다."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "INFJ는 갈등 상황에서 어떻게 반응하나요?",
    a: "INFJ는 갈등을 피하려고 하지만, 쌓이면 한 번에 터질 수 있어요. 평소 작은 것들을 참다가 한계에 다다르면 문을 닫아버리는 경우가 있습니다. 정기적으로 감정을 나누는 게 중요해요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INFJ는 어떤 데이트를 좋아하나요?",
    a: "INFJ는 의미 있고 깊은 교감이 가능한 데이트를 좋아해요. 조용한 카페에서의 대화, 자연 속 산책, 전시회처럼 감성적이고 생각할 거리가 있는 활동을 선호합니다. 시끄럽거나 피상적인 데이트는 별로예요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "INFJ는 일상에서 어떤 연인인가요?",
    a: "INFJ는 헌신적이고 배려 깊은 연인이에요. 상대방의 필요를 먼저 채워주려고 하고, 관계의 조화를 중시하며, 깊은 정서적 유대를 만들어갑니다. 다만 자신의 감정은 잘 표현하지 않을 수 있어요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "INFJ의 이별 징조는 무엇인가요?",
    a: "INFJ는 감정적으로 지쳐서 문을 닫기 시작하면 이별을 생각하는 거예요. 점점 자신의 감정을 공유하지 않고, 거리를 두며, 미래에 대한 얘기를 하지 않습니다. INFJ가 문을 닫으면 다시 열기 어려워요."
  },
  {
    mbti: "INFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "INFJ와 오래 연애하는 비결은?",
    a: "INFJ의 감정과 통찰을 존중하고, 진심으로 소통하는 게 중요해요. INFJ에게 안전한 공간을 제공하고, 함께 성장하며, 깊은 정서적 교감을 유지하세요. INFJ는 진심을 느끼면 평생을 함께하려고 해요."
  },

  // INFJ × 썸
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_signals",
    q: "INFJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "INFJ는 조심스럽지만 의미 있게 신호를 보내요. 상대방에게 깊은 관심을 보이고, 개인적인 얘기를 나누며, 특별하게 챙겨주는 모습을 보입니다. INFJ가 자신의 내면을 공유하기 시작하면 호감이 있는 거예요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_signals",
    q: "INFJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "INFJ는 관심 없으면 예의 바르지만 선을 확실히 그어요. 친절하게 대하지만 깊은 대화를 피하고, 개인적인 감정을 전혀 공유하지 않으며, 적당한 거리를 유지합니다."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_contact",
    q: "INFJ는 썸 단계에서 먼저 연락하나요?",
    a: "INFJ는 관심 있으면 자연스럽게 먼저 연락해요. 의미 있는 대화 주제를 찾아서 연락하며, 상대방의 상태를 살피는 메시지를 보냅니다. 다만 거절당할까 봐 신중하게 접근하는 편이에요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_contact",
    q: "INFJ와 썸 탈 때 효과적인 대화법은?",
    a: "INFJ는 깊이 있고 진심 어린 대화를 좋아해요. 가치관, 꿈, 인생 철학에 대해 얘기하고, INFJ의 통찰을 존중하며 경청하세요. 피상적인 대화보다 감정과 생각을 나누는 게 효과적이에요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_confession",
    q: "INFJ는 언제 고백하나요?",
    a: "INFJ는 확신이 들 때까지 기다리는 편이에요. 상대방의 마음을 충분히 파악하고, 관계의 미래를 그려본 후 신중하게 고백합니다. INFJ의 고백은 깊이 고민한 끝에 나온 진심이에요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_confession",
    q: "INFJ의 마음을 확인하는 방법은?",
    a: "INFJ에게 직접 물어보되, 안전하고 편안한 분위기를 만들어주세요. INFJ는 진심을 느끼면 솔직하게 감정을 나눌 수 있지만, 압박받으면 마음을 닫을 수 있어요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_dating",
    q: "INFJ와 첫 데이트는 어디가 좋을까요?",
    a: "INFJ는 조용하고 의미 있는 장소를 좋아해요. 카페, 공원, 미술관처럼 깊은 대화를 나눌 수 있는 곳이 좋습니다. 시끄럽거나 정신없는 곳보다 차분하고 감성적인 분위기를 선호해요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_dating",
    q: "INFJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "INFJ는 의미 있는 만남을 선호해서 자주 만나지 않을 수 있어요. 일주일에 1-2번 정도 깊은 시간을 보내는 걸 편안하게 느끼며, 너무 자주 만나면 에너지 소모로 지칠 수 있어요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_tips",
    q: "INFJ를 꼬시는 효과적인 방법은?",
    a: "INFJ는 진심되고 깊이 있는 사람에게 끌려요. 감정을 솔직하게 표현하고, INFJ의 통찰을 존중하며, 의미 있는 대화를 나누세요. 또한 INFJ의 이상과 가치관을 이해하고 공감해주면 효과적이에요."
  },
  {
    mbti: "INFJ",
    category: "crush",
    topic: "crush_tips",
    q: "INFJ가 싫어하는 행동은?",
    a: "INFJ는 거짓되거나 피상적인 태도를 싫어해요. 진심 없는 말, 조작적인 행동, 감정을 무시하는 태도는 INFJ를 실망시킵니다. 또한 가치관을 존중하지 않거나 이기적인 모습을 보이면 거리를 둘 수 있어요."
  },

  // INFJ × 결혼
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "INFJ의 결혼관은 어떤가요?",
    a: "INFJ는 결혼을 깊은 영혼의 결합으로 봐요. 감정적 교감과 가치관의 일치를 중시하며, 평생 함께 성장하고 지지할 수 있는 파트너를 원합니다. INFJ에게 결혼은 진정한 이해와 헌신을 바탕으로 한 약속이에요."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "INFJ가 배우자로 원하는 사람은?",
    a: "INFJ는 진심되고 깊이 있으며, 자신을 이해해주는 사람을 원해요. 감정적으로 안전한 공간을 만들어주고, 함께 성장하며, INFJ의 이상과 가치를 존중해주는 파트너를 찾습니다."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INFJ는 집안일을 어떻게 하나요?",
    a: "INFJ는 조화롭고 편안한 집을 만들기 위해 노력해요. 체계적으로 집안일을 하며, 파트너와 협력하는 걸 선호합니다. 완벽주의적일 수 있지만, 균형을 맞추려고 노력하는 편이에요."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "INFJ의 경제관은?",
    a: "INFJ는 안정적이고 계획적인 경제 관리를 선호해요. 미래를 위해 저축하고, 의미 있는 것에 투자하며, 재정적 안정을 중시합니다. 다만 가치관에 맞는 소비는 중요하게 생각해요."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INFJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "INFJ는 진심 어린 소통을 원해요. 감정을 인정하고, 진심으로 사과하며, 함께 해결책을 찾으려는 자세를 보이세요. INFJ는 공감과 이해를 느끼면 용서하고 관계를 회복하려고 노력해요."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "INFJ는 부부 대화를 어떻게 하나요?",
    a: "INFJ는 깊고 의미 있는 대화를 중시해요. 일상적인 대화도 하지만, 서로의 감정과 생각을 나누는 시간을 소중하게 여깁니다. 정기적으로 깊은 대화를 나누는 게 INFJ와의 관계에서 중요해요."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "INFJ의 육아 스타일은?",
    a: "INFJ는 따뜻하고 헌신적인 부모예요. 아이의 감정을 세심하게 살피고, 가치관과 도덕성을 중시하며, 아이가 자신의 잠재력을 발휘하도록 돕습니다. 깊은 유대감을 형성하는 걸 중요하게 생각해요."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "INFJ는 자녀 교육을 어떻게 생각하나요?",
    a: "INFJ는 아이의 전인적 성장을 중시해요. 학업뿐 아니라 정서적, 도덕적 발달을 중요하게 여기며, 아이 스스로 생각하고 판단할 수 있도록 유도합니다. 강압보다 이해와 대화로 교육하는 걸 선호해요."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "INFJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "INFJ는 조화로운 가족 관계를 중시해요. 갈등을 피하고 평화롭게 지내려고 노력하지만, 가치관 충돌이 있으면 스트레스를 받을 수 있어요. 파트너의 지지가 있으면 잘 적응하려고 합니다."
  },
  {
    mbti: "INFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "INFJ와 명절을 보내려면?",
    a: "INFJ는 명절에 사람들을 배려하느라 에너지를 많이 소모해요. 중간중간 쉴 수 있는 시간을 주고, 과도한 역할을 강요하지 마세요. INFJ의 감정을 배려하면서 함께하는 게 중요합니다."
  },
  // ENFP × 연애
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_affection",
    q: "ENFP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ENFP는 에너지 넘치고 적극적으로 애정을 표현해요. 말과 행동으로 사랑을 자주 표현하고, 놀라운 이벤트나 낭만적인 순간을 만들어냅니다. ENFP의 사랑은 열정적이고 창의적이며 따뜻해요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_affection",
    q: "ENFP는 스킨십을 어떻게 생각하나요?",
    a: "ENFP는 스킨십을 자연스럽고 편하게 생각해요. 감정이 좋으면 적극적으로 스킨십을 하며, 애정을 신체적으로도 표현하는 걸 좋아합니다. 다만 진심이 느껴지지 않는 스킨십은 싫어해요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_contact",
    q: "ENFP는 연락을 자주 하는 편인가요?",
    a: "ENFP는 연락을 자주 하는 편이에요. 생각날 때마다 메시지를 보내고, 재미있는 것을 공유하며, 적극적으로 소통하려고 합니다. 다만 관심이 분산되면 연락이 뜸해질 수도 있어요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_contact",
    q: "ENFP와 대화할 때 주의할 점은?",
    a: "ENFP는 재미있고 창의적인 대화를 좋아해요. 뻔하거나 지루한 대화는 금방 흥미를 잃고, 새로운 아이디어나 재미있는 이야기를 좋아합니다. ENFP의 에너지를 따라가며 즐겁게 대화하세요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_conflict",
    q: "ENFP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ENFP는 솔직하게 감정을 표현하고 빨리 풀고 싶어 해요. 진심으로 사과하고, 대화로 해결하려는 모습을 보이면 ENFP가 금방 풀립니다. 냉전이나 회피는 ENFP를 더 힘들게 만들어요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_conflict",
    q: "ENFP는 갈등 상황에서 어떻게 반응하나요?",
    a: "ENFP는 감정적으로 반응하는 편이에요. 화가 나면 바로 표현하지만, 시간이 지나면 금방 풀리는 스타일입니다. 다만 반복되는 문제나 진심이 느껴지지 않으면 지칠 수 있어요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENFP는 어떤 데이트를 좋아하나요?",
    a: "ENFP는 새롭고 재미있는 데이트를 좋아해요. 새로운 장소 탐험, 즉흥적인 여행, 창의적인 활동을 선호하며, 똑같은 루틴보다 다양한 경험을 즐깁니다. ENFP와는 예측 불가능한 재미가 있어요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENFP는 일상에서 어떤 연인인가요?",
    a: "ENFP는 활기차고 긍정적인 연인이에요. 매일매일 새로운 아이디어를 내고, 재미있게 만들려고 노력하며, 관계에 생기를 불어넣습니다. 다만 루틴에 갇히면 답답해할 수 있어요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_breakup",
    q: "ENFP의 이별 징조는 무엇인가요?",
    a: "ENFP는 관계가 지루하거나 진심이 느껴지지 않으면 이별을 생각해요. 에너지가 빠지고, 연락이 줄어들며, 새로운 것에 관심을 돌리기 시작합니다. ENFP가 열정을 잃으면 관계 회복이 어려워요."
  },
  {
    mbti: "ENFP",
    category: "dating",
    topic: "dating_breakup",
    q: "ENFP와 오래 연애하는 비결은?",
    a: "ENFP와는 항상 새로움과 재미를 유지하는 게 중요해요. 함께 성장하고, 다양한 경험을 하며, ENFP의 열정을 지지해주세요. 루틴에 빠지지 않고 관계를 신선하게 유지하면 오래갈 수 있어요."
  },

  // ENFP × 썸
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_signals",
    q: "ENFP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ENFP는 적극적이고 명확하게 신호를 보내요. 자주 연락하고, 재미있는 대화를 시도하며, 함께 시간을 보내려고 노력합니다. ENFP가 관심 있으면 에너지를 쏟는 게 눈에 보여요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_signals",
    q: "ENFP가 관심 없을 때는 어떻게 행동하나요?",
    a: "ENFP는 관심 없으면 친절하지만 거리를 둬요. 대화가 형식적으로 변하고, 만남을 피하며, 다른 사람이나 활동에 에너지를 쏟습니다. ENFP의 에너지가 느껴지지 않으면 관심이 없는 거예요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_contact",
    q: "ENFP는 썸 단계에서 먼저 연락하나요?",
    a: "ENFP는 적극적으로 먼저 연락해요. 재미있는 것을 공유하거나, 만나자고 제안하며, 적극적으로 관계를 진전시킵니다. ENFP의 주도적인 모습은 호감의 확실한 신호예요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_contact",
    q: "ENFP와 썸 탈 때 효과적인 대화법은?",
    a: "ENFP는 재미있고 창의적인 대화를 좋아해요. 새로운 아이디어, 재미있는 경험, 꿈과 열정에 대해 얘기하세요. 지루하거나 뻔한 대화보다 즉흥적이고 에너지 넘치는 대화가 효과적이에요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_confession",
    q: "ENFP는 언제 고백하나요?",
    a: "ENFP는 감정이 확실하면 빠르게 고백하는 편이에요. 눈치 게임보다 솔직하게 표현하는 걸 선호하며, 분위기가 좋으면 즉흥적으로 고백하기도 합니다. ENFP의 고백은 진심 어리고 열정적이에요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_confession",
    q: "ENFP의 마음을 확인하는 방법은?",
    a: "ENFP에게 직접 물어보세요. ENFP는 솔직한 질문을 편하게 받아들이고, 자신의 감정을 숨기지 않는 편이에요. 진심 어린 태도로 물어보면 ENFP도 솔직하게 답해줄 거예요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_dating",
    q: "ENFP와 첫 데이트는 어디가 좋을까요?",
    a: "ENFP는 재미있고 특별한 장소를 좋아해요. 새로운 카페, 재미있는 전시회, 놀이공원처럼 에너지 넘치고 즐거운 곳이 좋습니다. 뻔하거나 지루한 데이트는 ENFP를 심심하게 만들어요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_dating",
    q: "ENFP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ENFP는 자주 만나고 싶어 하는 편이에요. 좋아하는 사람과 시간을 많이 보내고 싶어 하며, 다양한 활동을 함께하려고 합니다. ENFP의 에너지를 따라갈 수 있다면 즐거운 시간이 될 거예요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_tips",
    q: "ENFP를 꼬시는 효과적인 방법은?",
    a: "ENFP는 에너지 넘치고 긍정적인 사람에게 끌려요. 재미있고 즉흥적이며, 새로운 것을 함께 즐길 수 있는 모습을 보이세요. 또한 ENFP의 꿈과 열정을 응원하고 공감해주면 효과적이에요."
  },
  {
    mbti: "ENFP",
    category: "crush",
    topic: "crush_tips",
    q: "ENFP가 싫어하는 행동은?",
    a: "ENFP는 부정적이고 지루한 사람을 싫어해요. 비판적이거나 에너지를 빼앗는 태도, 루틴에 갇힌 모습, 새로운 것을 거부하는 태도는 ENFP를 답답하게 만듭니다. 또한 진심 없는 태도도 금방 알아채요."
  },

  // ENFP × 결혼
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_values",
    q: "ENFP의 결혼관은 어떤가요?",
    a: "ENFP는 결혼을 낭만적이고 모험적으로 생각해요. 평생 함께 성장하고 새로운 경험을 나눌 파트너를 원하며, 관계에서 자유와 열정을 중시합니다. ENFP에게 결혼은 함께하는 즐거운 여정이에요."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_values",
    q: "ENFP가 배우자로 원하는 사람은?",
    a: "ENFP는 긍정적이고 유연하며, 함께 모험을 즐길 수 있는 사람을 원해요. 자유를 존중하고, ENFP의 열정을 응원하며, 함께 성장할 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENFP는 집안일을 어떻게 하나요?",
    a: "ENFP는 집안일을 루틴으로 하기보다 기분 따라 하는 편이에요. 창의적인 방식으로 해결하려고 하지만, 자주 미루거나 잊어버릴 수 있어요. 파트너와 함께 재미있게 분담하면 잘 할 수 있어요."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENFP의 경제관은?",
    a: "ENFP는 경제 관리에 체계적이지 않을 수 있어요. 즉흥적으로 쓰거나, 경험에 투자하는 걸 선호하며, 저축이나 재테크는 소홀할 수 있습니다. 파트너가 함께 계획을 세워주면 도움이 돼요."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENFP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ENFP는 빨리 풀고 싶어 해요. 진심으로 사과하고, 감정을 솔직하게 나누며, 함께 해결하려는 모습을 보이세요. ENFP는 진심을 느끼면 금방 용서하고 관계를 회복하려고 노력해요."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENFP는 부부 대화를 어떻게 하나요?",
    a: "ENFP는 열린 대화를 선호해요. 감정을 솔직하게 표현하고, 다양한 주제로 이야기하며, 즐겁고 깊이 있는 대화를 좋아합니다. 정기적으로 재미있고 의미 있는 대화를 나누는 게 ENFP와의 관계에서 중요해요."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_children",
    q: "ENFP의 육아 스타일은?",
    a: "ENFP는 재미있고 창의적인 부모예요. 아이와 함께 놀아주고, 상상력을 키워주며, 다양한 경험을 제공합니다. 규칙보다 자유를 중시하고, 아이의 개성을 존중하는 편이에요."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_children",
    q: "ENFP는 자녀 교육을 어떻게 생각하나요?",
    a: "ENFP는 아이의 창의성과 개성을 키우는 교육을 선호해요. 주입식 교육보다 다양한 경험을 통한 배움을 중시하며, 아이가 자유롭게 탐구하고 표현하도록 격려합니다."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_family",
    q: "ENFP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ENFP는 밝고 긍정적으로 가족 관계를 대해요. 사람들과 어울리는 걸 좋아하지만, 형식적이거나 답답한 분위기는 힘들어할 수 있어요. 자유롭고 편안한 관계를 선호합니다."
  },
  {
    mbti: "ENFP",
    category: "marriage",
    topic: "marriage_family",
    q: "ENFP와 명절을 보내려면?",
    a: "ENFP는 명절을 즐기려고 하지만, 너무 형식적이면 답답해할 수 있어요. 자유롭게 어울릴 수 있는 분위기를 만들고, ENFP가 에너지를 발산할 수 있는 공간을 주면 좋아요."
  },

  // ENFJ × 연애
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_affection",
    q: "ENFJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ENFJ는 적극적이고 따뜻하게 애정을 표현해요. 말과 행동으로 사랑을 자주 전하고, 상대방을 챙기고 배려하는 모습을 보입니다. ENFJ의 사랑은 헌신적이고 열정적이며 포용적이에요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_affection",
    q: "ENFJ는 스킨십을 어떻게 생각하나요?",
    a: "ENFJ는 스킨십을 자연스럽고 따뜻하게 표현해요. 애정 어린 스킨십으로 사랑을 전하는 걸 좋아하며, 상대방을 편안하게 만들어주려고 노력합니다. 진심이 담긴 스킨십을 중요하게 생각해요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_contact",
    q: "ENFJ는 연락을 자주 하는 편인가요?",
    a: "ENFJ는 연락을 자주 하는 편이에요. 상대방을 챙기고, 안부를 묻고, 감정을 공유하려고 노력합니다. ENFJ는 연락을 통해 관계를 돈독히 하는 걸 중요하게 생각해요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_contact",
    q: "ENFJ와 대화할 때 주의할 점은?",
    a: "ENFJ는 진심 어린 대화를 원해요. 감정을 솔직하게 나누고, ENFJ의 배려를 인정하며, 열린 마음으로 소통하세요. ENFJ는 진심을 중요하게 생각하기 때문에 거짓이나 형식적인 태도는 금방 알아채요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ENFJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ENFJ는 대화로 빨리 풀고 싶어 해요. 진심으로 사과하고, 감정을 공유하며, 관계 회복을 위해 노력하는 모습을 보이세요. ENFJ는 진심을 느끼면 빨리 용서하고 관계를 개선하려고 노력해요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ENFJ는 갈등 상황에서 어떻게 반응하나요?",
    a: "ENFJ는 갈등을 빨리 해결하려고 해요. 대화로 문제를 풀려고 노력하지만, 감정이 상하면 힘들어하기도 합니다. ENFJ는 조화로운 관계를 중시하기 때문에 갈등이 오래가는 걸 힘들어해요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENFJ는 어떤 데이트를 좋아하나요?",
    a: "ENFJ는 함께 즐길 수 있는 데이트를 좋아해요. 맛집 탐방, 문화생활, 야외 활동처럼 함께 경험을 나누고 추억을 만들 수 있는 데이트를 선호합니다. 상대방이 즐거워하는 모습을 보는 걸 좋아해요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENFJ는 일상에서 어떤 연인인가요?",
    a: "ENFJ는 헌신적이고 배려 깊은 연인이에요. 상대방을 먼저 챙기고, 필요한 것을 알아서 해결하며, 관계를 발전시키기 위해 노력합니다. ENFJ는 상대방의 행복을 자신의 행복처럼 생각해요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ENFJ의 이별 징조는 무엇인가요?",
    a: "ENFJ는 관계에 지쳐서 에너지가 빠지면 이별을 생각해요. 계속 노력했지만 변화가 없거나, 더 이상 희망이 보이지 않으면 결단을 내립니다. ENFJ가 포기하면 이미 많이 참았다는 뜻이에요."
  },
  {
    mbti: "ENFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ENFJ와 오래 연애하는 비결은?",
    a: "ENFJ의 배려를 당연하게 여기지 말고 감사하는 마음을 표현하세요. 상호 존중과 소통을 유지하고, ENFJ가 에너지를 회복할 수 있는 공간도 주세요. ENFJ는 인정받고 사랑받는다고 느끼면 헌신적으로 사랑해요."
  },

  // ENFJ × 썸
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_signals",
    q: "ENFJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ENFJ는 적극적으로 관심을 보여요. 자주 연락하고, 챙겨주며, 함께 시간을 보내려고 노력합니다. ENFJ가 특별하게 대해주고 배려하는 모습을 보이면 호감이 있는 거예요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_signals",
    q: "ENFJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "ENFJ는 관심 없으면 친절하지만 선을 그어요. 예의 바르게 대하지만 개인적인 관심은 보이지 않고, 깊은 대화나 특별한 배려는 하지 않습니다."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_contact",
    q: "ENFJ는 썸 단계에서 먼저 연락하나요?",
    a: "ENFJ는 적극적으로 먼저 연락해요. 안부를 묻고, 재미있는 것을 공유하며, 만남을 제안합니다. ENFJ의 주도적이고 따뜻한 연락은 호감의 확실한 신호예요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_contact",
    q: "ENFJ와 썸 탈 때 효과적인 대화법은?",
    a: "ENFJ는 진심 어린 대화를 좋아해요. 감정을 솔직하게 나누고, ENFJ의 생각을 존중하며, 긍정적이고 따뜻한 대화를 하세요. ENFJ는 진심과 배려가 느껴지는 대화를 좋아해요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_confession",
    q: "ENFJ는 언제 고백하나요?",
    a: "ENFJ는 관계가 무르익었다고 느끼면 고백해요. 상대방의 감정을 살피고, 적절한 타이밍을 기다렸다가 낭만적으로 고백합니다. ENFJ의 고백은 진심 어리고 따뜻해요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_confession",
    q: "ENFJ의 마음을 확인하는 방법은?",
    a: "ENFJ에게 솔직하게 물어보세요. ENFJ는 진심 어린 질문에 솔직하게 답하는 편이에요. 다만 상대방을 배려하는 마음에 조심스럽게 표현할 수 있으니 잘 들어보세요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_dating",
    q: "ENFJ와 첫 데이트는 어디가 좋을까요?",
    a: "ENFJ는 함께 즐길 수 있는 장소를 좋아해요. 맛집, 카페, 공원처럼 대화하기 좋고 분위기 있는 곳이 좋습니다. ENFJ는 상대방이 즐거워하는 모습을 보는 걸 좋아해요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_dating",
    q: "ENFJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ENFJ는 자주 만나고 싶어 하는 편이에요. 관계를 발전시키기 위해 적극적으로 시간을 내고, 함께 다양한 활동을 하려고 합니다. ENFJ와는 자연스럽게 자주 만나게 될 거예요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_tips",
    q: "ENFJ를 꼬시는 효과적인 방법은?",
    a: "ENFJ는 진심되고 따뜻한 사람에게 끌려요. 배려심 있고, 긍정적이며, ENFJ의 노력을 알아주는 모습을 보이세요. 또한 함께 성장하고 발전할 수 있는 사람이라는 걸 보여주면 효과적이에요."
  },
  {
    mbti: "ENFJ",
    category: "crush",
    topic: "crush_tips",
    q: "ENFJ가 싫어하는 행동은?",
    a: "ENFJ는 이기적이고 배려심 없는 행동을 싫어해요. ENFJ의 노력을 당연하게 여기거나, 부정적이고 비판적인 태도, 진심 없는 행동은 ENFJ를 실망시킵니다. 감정을 무시하는 태도도 힘들어해요."
  },

  // ENFJ × 결혼
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ENFJ의 결혼관은 어떤가요?",
    a: "ENFJ는 결혼을 평생의 파트너십으로 생각해요. 함께 성장하고, 서로를 지지하며, 따뜻한 가정을 만드는 걸 중요하게 봅니다. ENFJ에게 결혼은 헌신과 사랑으로 이루어가는 여정이에요."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ENFJ가 배우자로 원하는 사람은?",
    a: "ENFJ는 따뜻하고 성실하며, 함께 가정을 이루고 싶은 사람을 원해요. ENFJ의 노력을 인정하고, 상호 지지하며, 조화로운 관계를 만들 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENFJ는 집안일을 어떻게 하나요?",
    a: "ENFJ는 집안일을 책임감 있게 해요. 가족을 위해 헌신하고, 집을 편안하고 따뜻하게 만들려고 노력합니다. 다만 모든 걸 혼자 하려다 지칠 수 있으니 파트너의 협력이 중요해요."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENFJ의 경제관은?",
    a: "ENFJ는 가족의 안정과 행복을 위해 경제 관리를 해요. 계획적으로 저축하고, 필요한 곳에 투자하며, 가족의 미래를 생각합니다. 다만 다른 사람을 위해 쓰는 돈도 많을 수 있어요."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENFJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ENFJ는 대화로 빨리 해결하고 싶어 해요. 진심으로 사과하고, 감정을 나누며, 관계 개선을 위해 노력하는 모습을 보이세요. ENFJ는 진심을 느끼면 빨리 용서하고 화해하려고 해요."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENFJ는 부부 대화를 어떻게 하나요?",
    a: "ENFJ는 열린 대화를 중시해요. 정기적으로 감정을 나누고, 서로의 생각을 공유하며, 관계를 발전시키려고 노력합니다. ENFJ와는 솔직하고 따뜻한 대화가 관계의 핵심이에요."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ENFJ의 육아 스타일은?",
    a: "ENFJ는 헌신적이고 따뜻한 부모예요. 아이의 감정을 세심하게 살피고, 격려하며, 아이가 잠재력을 발휘하도록 돕습니다. 가족의 조화와 아이의 행복을 최우선으로 생각해요."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ENFJ는 자녀 교육을 어떻게 생각하나요?",
    a: "ENFJ는 아이의 전인적 성장을 중시해요. 학업뿐 아니라 정서적, 사회적 발달을 중요하게 여기며, 아이가 자신감 있고 따뜻한 사람으로 성장하도록 지원합니다."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ENFJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ENFJ는 조화로운 가족 관계를 위해 노력해요. 사람들과 잘 어울리고, 배려심 있게 대하며, 가족 간의 갈등을 중재하려고 합니다. 다만 과도하게 신경 쓰다가 지칠 수 있어요."
  },
  {
    mbti: "ENFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ENFJ와 명절을 보내려면?",
    a: "ENFJ는 명절에 가족을 위해 많이 노력해요. 모든 걸 챙기려다 지칠 수 있으니, 파트너가 함께 분담하고 ENFJ를 배려하는 게 중요합니다. ENFJ의 노고를 인정하고 감사를 표현하세요."
  },

  // ISTP × 연애
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_affection",
    q: "ISTP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ISTP는 말보다 행동으로 애정을 표현해요. 필요한 것을 고쳐주거나, 실질적인 도움을 주는 방식으로 사랑을 보여줍니다. 직접적인 감정 표현은 어색해하지만, 행동으로 충분히 마음을 전달해요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_affection",
    q: "ISTP는 스킨십을 어떻게 생각하나요?",
    a: "ISTP는 스킨십을 편하게 받아들이지만 과하게 하지는 않아요. 자연스럽고 즉흥적인 스킨십을 선호하며, 강요되거나 형식적인 스킨십은 부담스러워합니다."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_contact",
    q: "ISTP는 연락을 자주 하는 편인가요?",
    a: "ISTP는 연락을 자주 하지 않는 편이에요. 필요할 때만 연락하고, 불필요한 대화는 피하는 스타일입니다. 연락이 뜸하다고 관심이 없는 건 아니니 오해하지 마세요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_contact",
    q: "ISTP와 대화할 때 주의할 점은?",
    a: "ISTP는 간결하고 실질적인 대화를 선호해요. 장황하거나 감정적인 대화보다 핵심만 말하는 게 좋고, 불필요한 질문이나 과도한 감정 표현은 부담스러워할 수 있어요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_conflict",
    q: "ISTP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ISTP는 시간이 필요해요. 혼자 진정할 시간을 주고, 충분히 정리된 후 간단명료하게 대화하세요. 감정적으로 몰아붙이면 더 멀어질 수 있으니 쿨하게 접근하는 게 좋아요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_conflict",
    q: "ISTP는 갈등 상황에서 어떻게 반응하나요?",
    a: "ISTP는 갈등을 회피하거나 무덤덤하게 대처해요. 감정적으로 반응하기보다 문제를 냉정하게 분석하고, 필요하면 거리를 두기도 합니다. 감정 표현이 서툴러서 차갑게 보일 수 있어요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISTP는 어떤 데이트를 좋아하나요?",
    a: "ISTP는 활동적이고 재미있는 데이트를 좋아해요. 드라이브, 스포츠, 새로운 것 체험하기처럼 몸을 움직이거나 실용적인 활동을 선호합니다. 앉아서 대화만 하는 데이트는 지루해할 수 있어요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISTP는 일상에서 어떤 연인인가요?",
    a: "ISTP는 독립적이고 쿨한 연인이에요. 자기 일을 하면서도 필요할 때 도와주고, 과도한 간섭 없이 자유로운 관계를 선호합니다. 집착이나 의존을 싫어하는 편이에요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_breakup",
    q: "ISTP의 이별 징조는 무엇인가요?",
    a: "ISTP는 관계가 부담스러워지면 조용히 거리를 둬요. 연락이 뜸해지고, 만남을 피하며, 점점 자기 생활로 돌아갑니다. ISTP는 이별도 담담하게 받아들이는 편이에요."
  },
  {
    mbti: "ISTP",
    category: "dating",
    topic: "dating_breakup",
    q: "ISTP와 오래 연애하는 비결은?",
    a: "ISTP의 독립성을 존중하고, 자유로운 관계를 유지하는 게 중요해요. 과도하게 간섭하지 않고, 함께 재미있는 활동을 즐기며, ISTP의 방식을 이해해주세요. ISTP는 편안함을 느끼면 오래 함께해요."
  },

  // ISTP × 썸
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_signals",
    q: "ISTP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ISTP는 조용하고 미묘하게 신호를 보내요. 자주 만나려고 하거나, 관심사를 공유하고, 실질적으로 도와주는 모습을 보입니다. ISTP가 시간을 내준다는 것 자체가 호감의 신호예요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_signals",
    q: "ISTP가 관심 없을 때는 어떻게 행동하나요?",
    a: "ISTP는 관심 없으면 최소한의 반응만 해요. 대화를 짧게 끝내고, 만남을 피하며, 개인적인 관심을 전혀 보이지 않습니다. ISTP의 무덤덤함이 평소보다 더하면 관심이 없는 거예요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_contact",
    q: "ISTP는 썸 단계에서 먼저 연락하나요?",
    a: "ISTP는 먼저 연락을 잘 안 하는 편이에요. 필요한 일이 있거나 만날 약속이 있을 때만 연락하며, 잡담을 위한 연락은 거의 하지 않습니다. 하지만 관심 있으면 만나자는 제안은 해요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_contact",
    q: "ISTP와 썸 탈 때 효과적인 대화법은?",
    a: "ISTP는 간결하고 재미있는 대화를 좋아해요. 장황한 설명보다 핵심만 말하고, 공통 관심사나 재미있는 활동에 대해 얘기하세요. 감정적인 대화보다 실질적이고 흥미로운 주제가 효과적이에요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_confession",
    q: "ISTP는 언제 고백하나요?",
    a: "ISTP는 고백을 오래 미루는 편이에요. 확신이 들 때까지 기다리거나, 아예 고백하지 않고 자연스럽게 관계가 진전되기를 바라기도 합니다. ISTP의 고백은 간단하고 직설적이에요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_confession",
    q: "ISTP의 마음을 확인하는 방법은?",
    a: "ISTP에게 직접 물어보는 게 가장 확실해요. 돌려 말하면 ISTP는 알아채지 못할 수 있어요. 솔직하고 직설적으로 물어보면, ISTP도 간단명료하게 답해줄 거예요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_dating",
    q: "ISTP와 첫 데이트는 어디가 좋을까요?",
    a: "ISTP는 활동적인 데이트를 좋아해요. 카트, 볼링, 드라이브, 공방 체험처럼 몸을 움직이거나 실용적인 활동이 좋습니다. 앉아서 대화만 하는 카페 데이트는 지루해할 수 있어요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_dating",
    q: "ISTP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ISTP는 자주 만나지 않는 편이에요. 일주일에 1번 정도 만나는 걸 편하게 느끼며, 너무 자주 만나면 부담스러워할 수 있어요. ISTP는 자기 시간을 중요하게 생각합니다."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_tips",
    q: "ISTP를 꼬시는 효과적인 방법은?",
    a: "ISTP는 쿨하고 독립적인 사람에게 끌려요. 집착하지 않고, 재미있는 활동을 함께 즐기며, ISTP의 자유를 존중하는 모습을 보이세요. 또한 실용적이고 센스 있는 면을 보여주면 효과적이에요."
  },
  {
    mbti: "ISTP",
    category: "crush",
    topic: "crush_tips",
    q: "ISTP가 싫어하는 행동은?",
    a: "ISTP는 집착, 과도한 감정 표현, 불필요한 간섭을 싫어해요. 또한 장황한 설명이나 형식적인 태도, 자유를 제한하는 행동도 부담스러워합니다. ISTP의 독립성을 침해하면 빠르게 거리를 둘 수 있어요."
  },

  // ISTP × 결혼
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_values",
    q: "ISTP의 결혼관은 어떤가요?",
    a: "ISTP는 결혼을 신중하게 생각해요. 자유가 제한되는 걸 싫어하기 때문에, 서로의 독립성을 존중하는 관계를 원합니다. ISTP에게 결혼은 편안한 동반자 관계를 의미해요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_values",
    q: "ISTP가 배우자로 원하는 사람은?",
    a: "ISTP는 독립적이고 쿨한 사람을 원해요. 과도하게 간섭하지 않고, 각자의 공간을 존중하며, 실용적이고 현실적인 파트너를 찾습니다. 감정적 의존이나 집착은 ISTP를 부담스럽게 만들어요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISTP는 집안일을 어떻게 하나요?",
    a: "ISTP는 필요한 집안일은 효율적으로 처리해요. 기계 수리나 실용적인 일은 잘하지만, 청소나 정리는 미루는 경우가 많아요. 최소한으로 유지하려는 경향이 있습니다."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISTP의 경제관은?",
    a: "ISTP는 실용적으로 돈을 쓰는 편이에요. 필요한 것이나 취미에는 투자하지만, 불필요한 소비는 하지 않습니다. 경제 관리에 체계적이지는 않지만, 낭비하지 않는 편이에요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISTP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ISTP는 시간과 공간이 필요해요. 혼자 진정할 시간을 주고, 충분히 정리된 후 간단하게 대화하세요. 감정적으로 몰아붙이거나 장황하게 설명하면 ISTP는 더 멀어질 수 있어요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISTP는 부부 대화를 어떻게 하나요?",
    a: "ISTP는 필요한 대화만 간결하게 해요. 일상적인 감정 공유보다 실질적인 문제나 계획에 대해 얘기하는 걸 선호합니다. 불필요한 대화는 피하고, 핵심만 빠르게 전달하는 스타일이에요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_children",
    q: "ISTP의 육아 스타일은?",
    a: "ISTP는 실용적이고 자유로운 육아를 해요. 아이가 스스로 탐구하고 경험하도록 놔두며, 과도한 간섭이나 규칙은 만들지 않습니다. 실질적인 것을 가르치는 데 관심이 많아요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_children",
    q: "ISTP는 자녀 교육을 어떻게 생각하나요?",
    a: "ISTP는 아이의 자율성을 중시해요. 스스로 배우고 경험하도록 하며, 실용적인 기술을 가르치는 데 관심이 있습니다. 주입식 교육보다 체험과 탐구를 선호해요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_family",
    q: "ISTP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ISTP는 가족 모임을 부담스러워해요. 최소한의 예의만 지키고, 빠르게 끝내고 싶어 합니다. 형식적인 절차나 장시간 모임은 ISTP를 지치게 만들어요."
  },
  {
    mbti: "ISTP",
    category: "marriage",
    topic: "marriage_family",
    q: "ISTP와 명절을 보내려면?",
    a: "ISTP는 명절에 혼자만의 시간이 필요해요. 중간중간 쉴 수 있는 공간을 주고, 과도한 역할을 강요하지 마세요. ISTP가 편하게 참여할 수 있도록 배려하는 게 중요합니다."
  },

  // ISTJ × 연애
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_affection",
    q: "ISTJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ISTJ는 책임감 있고 성실하게 애정을 표현해요. 말보다 행동으로 보여주며, 약속을 지키고 필요한 것을 챙겨주는 방식으로 사랑을 전합니다. ISTJ의 사랑은 조용하지만 믿음직해요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_affection",
    q: "ISTJ는 스킨십을 어떻게 생각하나요?",
    a: "ISTJ는 스킨십에 신중한 편이에요. 충분히 친밀감이 쌓인 후에 편안하게 받아들이며, 갑작스럽거나 과한 스킨십은 부담스러워합니다. 점진적이고 자연스러운 스킨십을 선호해요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_contact",
    q: "ISTJ는 연락을 자주 하는 편인가요?",
    a: "ISTJ는 규칙적으로 연락하는 편이에요. 필요한 연락은 꼬박꼬박 하지만, 불필요한 잡담은 하지 않습니다. ISTJ의 연락은 간단하고 명확하며, 패턴이 일정해요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_contact",
    q: "ISTJ와 대화할 때 주의할 점은?",
    a: "ISTJ는 구체적이고 명확한 대화를 선호해요. 추상적이거나 감정적인 대화보다 사실과 계획에 기반한 대화를 좋아합니다. 핵심을 정확하게 전달하는 게 ISTJ와의 대화에서 중요해요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ISTJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ISTJ는 논리적으로 문제를 해결하려고 해요. 감정보다 사실에 기반해서 대화하고, 명확한 해결책을 제시하세요. 감정적으로 몰아붙이면 ISTJ는 더 경직될 수 있으니 차분하게 접근하는 게 좋아요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ISTJ는 갈등 상황에서 어떻게 반응하나요?",
    a: "ISTJ는 갈등을 체계적으로 해결하려고 해요. 문제의 원인을 분석하고, 규칙이나 원칙에 따라 판단하며, 감정보다 사실을 중시합니다. 감정 표현이 서툴러서 냉정하게 보일 수 있어요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISTJ는 어떤 데이트를 좋아하나요?",
    a: "ISTJ는 계획적이고 안정적인 데이트를 좋아해요. 맛집, 영화, 산책처럼 예측 가능하고 편안한 활동을 선호하며, 갑작스럽거나 즉흥적인 데이트는 부담스러워할 수 있어요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISTJ는 일상에서 어떤 연인인가요?",
    a: "ISTJ는 성실하고 책임감 있는 연인이에요. 약속을 철저히 지키고, 안정적으로 관계를 유지하며, 믿을 수 있는 파트너가 됩니다. 루틴을 중시하고, 예측 가능한 관계를 선호해요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ISTJ의 이별 징조는 무엇인가요?",
    a: "ISTJ는 관계가 맞지 않다고 판단하면 조용히 정리해요. 점점 거리를 두고, 만남을 줄이며, 감정적으로 철수합니다. ISTJ는 결정을 내리면 번복하지 않는 편이에요."
  },
  {
    mbti: "ISTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ISTJ와 오래 연애하는 비결은?",
    a: "ISTJ의 성실함과 책임감을 인정하고, 안정적인 관계를 유지하는 게 중요해요. 약속을 지키고, 신뢰를 쌓으며, ISTJ의 방식을 존중하세요. ISTJ는 믿을 수 있는 관계라고 느끼면 평생을 함께하려고 해요."
  },

  // ISTJ × 썸
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_signals",
    q: "ISTJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ISTJ는 조심스럽지만 성실하게 신호를 보내요. 규칙적으로 연락하고, 약속을 확실히 지키며, 실질적으로 도와주는 모습을 보입니다. ISTJ가 시간을 할애한다는 것 자체가 호감의 신호예요."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_signals",
    q: "ISTJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "ISTJ는 관심 없으면 예의 바르지만 거리를 둬요. 최소한의 대화만 하고, 개인적인 시간을 할애하지 않으며, 만남도 비즈니스처럼 간단하게 끝냅니다."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_contact",
    q: "ISTJ는 썸 단계에서 먼저 연락하나요?",
    a: "ISTJ는 먼저 연락을 잘 안 하는 편이에요. 하지만 관심 있으면 약속을 정하거나 필요한 연락은 성실하게 합니다. 규칙적이고 계획적인 연락 패턴을 보이면 호감이 있는 거예요."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_contact",
    q: "ISTJ와 썸 탈 때 효과적인 대화법은?",
    a: "ISTJ는 구체적이고 실질적인 대화를 좋아해요. 명확하게 의사를 전달하고, 계획이나 일정에 대해 얘기하세요. 추상적이거나 감정적인 대화보다 사실 기반의 대화가 효과적이에요."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_confession",
    q: "ISTJ는 언제 고백하나요?",
    a: "ISTJ는 충분히 확신이 들 때 고백해요. 신중하게 판단하고, 관계의 가능성을 분석한 후 진지하게 고백합니다. ISTJ의 고백은 계획적이고 성실한 의도가 담겨 있어요."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_confession",
    q: "ISTJ의 마음을 확인하는 방법은?",
    a: "ISTJ에게 직접 물어보세요. 돌려 말하거나 눈치 게임을 하면 ISTJ는 알아채지 못할 수 있어요. 명확하게 물어보면 ISTJ도 솔직하고 진지하게 답해줄 거예요."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_dating",
    q: "ISTJ와 첫 데이트는 어디가 좋을까요?",
    a: "ISTJ는 안정적이고 예측 가능한 장소를 좋아해요. 조용한 맛집, 영화관, 공원처럼 편안하고 계획할 수 있는 데이트가 좋습니다. 갑작스럽거나 시끄러운 곳은 피하는 게 좋아요."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_dating",
    q: "ISTJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ISTJ는 규칙적으로 만나는 걸 선호해요. 일주일에 1-2번 정도 계획을 세워서 만나며, 즉흥적인 만남보다 약속된 만남을 편하게 느낍니다."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_tips",
    q: "ISTJ를 꼬시는 효과적인 방법은?",
    a: "ISTJ는 성실하고 책임감 있는 사람에게 끌려요. 약속을 잘 지키고, 신뢰할 수 있으며, 안정적인 모습을 보이세요. 또한 ISTJ의 원칙과 가치관을 존중하는 태도가 효과적이에요."
  },
  {
    mbti: "ISTJ",
    category: "crush",
    topic: "crush_tips",
    q: "ISTJ가 싫어하는 행동은?",
    a: "ISTJ는 약속을 어기거나 무책임한 행동을 싫어해요. 또한 즉흥적이고 계획 없는 태도, 규칙을 무시하는 행동, 감정적으로 변덕스러운 모습은 ISTJ를 불편하게 만듭니다."
  },

  // ISTJ × 결혼
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ISTJ의 결혼관은 어떤가요?",
    a: "ISTJ는 결혼을 진지하고 책임감 있게 생각해요. 평생의 약속으로 여기며, 안정적이고 전통적인 가정을 꾸리는 걸 중요하게 봅니다. ISTJ에게 결혼은 신중한 결정이자 평생의 책임이에요."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ISTJ가 배우자로 원하는 사람은?",
    a: "ISTJ는 성실하고 책임감 있으며, 안정적인 사람을 원해요. 약속을 지키고, 신뢰할 수 있으며, 전통적인 가치관을 공유하는 파트너를 찾습니다."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISTJ는 집안일을 어떻게 하나요?",
    a: "ISTJ는 체계적이고 성실하게 집안일을 해요. 규칙을 정하고 루틴을 만들어서 효율적으로 관리하며, 책임감 있게 자신의 몫을 해냅니다."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISTJ의 경제관은?",
    a: "ISTJ는 계획적이고 안정적인 경제 관리를 해요. 꼼꼼하게 저축하고, 불필요한 소비를 줄이며, 장기적인 재무 계획을 세웁니다. 재정적 안정을 매우 중요하게 생각해요."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISTJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ISTJ는 논리적인 대화를 원해요. 감정보다 사실에 기반해서 문제를 논의하고, 명확한 해결책을 제시하세요. 감정적으로 접근하면 ISTJ는 더 경직될 수 있으니 차분하게 대화하는 게 중요해요."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISTJ는 부부 대화를 어떻게 하나요?",
    a: "ISTJ는 실질적이고 구체적인 대화를 선호해요. 일상적인 계획, 문제 해결, 중요한 결정에 대해 명확하게 논의합니다. 불필요한 감정 표현보다 효율적인 의사소통을 중시해요."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ISTJ의 육아 스타일은?",
    a: "ISTJ는 체계적이고 원칙 있는 육아를 해요. 규칙을 명확히 정하고, 책임감을 가르치며, 전통적인 가치관을 중시합니다. 아이가 성실하고 책임감 있게 성장하도록 교육해요."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ISTJ는 자녀 교육을 어떻게 생각하나요?",
    a: "ISTJ는 체계적이고 계획적인 교육을 중시해요. 학업과 규율을 강조하며, 아이가 책임감 있고 성실한 사람으로 성장하도록 돕습니다. 전통적인 교육 방식을 선호하는 편이에요."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ISTJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ISTJ는 전통과 예의를 중시해요. 가족 관계를 책임감 있게 대하고, 규칙과 예절을 잘 지키며, 안정적인 관계를 유지하려고 노력합니다."
  },
  {
    mbti: "ISTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ISTJ와 명절을 보내려면?",
    a: "ISTJ는 명절 전통을 중시하고 성실하게 준비해요. 계획을 미리 세우고, 역할을 명확히 하며, 체계적으로 진행하는 걸 선호합니다. ISTJ의 성실함을 인정하고 함께 협력하는 게 중요해요."
  },

  // ISFP × 연애
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_affection",
    q: "ISFP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ISFP는 조용하지만 따뜻하게 애정을 표현해요. 작은 선물, 배려, 행동으로 사랑을 보여주며, 상대방의 감정에 섬세하게 반응합니다. ISFP의 사랑은 은은하지만 진심 어려요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_affection",
    q: "ISFP는 스킨십을 어떻게 생각하나요?",
    a: "ISFP는 스킨십을 자연스럽고 편하게 생각해요. 감정이 통하면 자연스럽게 스킨십을 하며, 따뜻하고 부드러운 접촉을 좋아합니다. 다만 강요되거나 급한 스킨십은 불편해할 수 있어요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_contact",
    q: "ISFP는 연락을 자주 하는 편인가요?",
    a: "ISFP는 연락 빈도가 일정하지 않아요. 기분이 좋을 때는 자주 연락하지만, 혼자 있고 싶을 때는 연락이 뜸해질 수 있습니다. ISFP의 연락 패턴은 감정 상태에 따라 달라져요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_contact",
    q: "ISFP와 대화할 때 주의할 점은?",
    a: "ISFP는 진심 어린 대화를 원해요. 형식적이거나 강요된 대화보다 자연스럽고 편안한 분위기에서 감정을 나누는 걸 선호합니다. ISFP를 판단하지 않고 들어주는 게 중요해요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_conflict",
    q: "ISFP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ISFP는 갈등을 싫어하고 혼자 시간을 가지려고 해요. 진정될 때까지 기다려주고, 진심으로 사과하며 감정을 나누세요. ISFP는 진심을 느끼면 빨리 용서하는 편이에요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_conflict",
    q: "ISFP는 갈등 상황에서 어떻게 반응하나요?",
    a: "ISFP는 갈등을 회피하려는 경향이 있어요. 감정이 상하면 자기 세계로 들어가고, 표현하지 않고 혼자 삭이는 경우가 많습니다. 안전하다고 느껴야 마음을 열 수 있어요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISFP는 어떤 데이트를 좋아하나요?",
    a: "ISFP는 감성적이고 자유로운 데이트를 좋아해요. 자연 속 산책, 전시회, 공방 체험처럼 감각을 자극하고 여유로운 활동을 선호합니다. 계획적이기보다 즉흥적인 데이트를 즐겨요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISFP는 일상에서 어떤 연인인가요?",
    a: "ISFP는 따뜻하고 배려 깊은 연인이에요. 상대방의 감정을 세심하게 살피고, 작은 것에서 행복을 찾으며, 편안하고 자유로운 관계를 선호합니다. 다만 혼자만의 시간도 필요해요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_breakup",
    q: "ISFP의 이별 징조는 무엇인가요?",
    a: "ISFP는 감정적으로 지치면 조용히 거리를 둬요. 연락이 줄어들고, 만남을 피하며, 점점 자기 세계로 들어갑니다. ISFP는 이별도 조용히 준비하고 혼자 결정하는 편이에요."
  },
  {
    mbti: "ISFP",
    category: "dating",
    topic: "dating_breakup",
    q: "ISFP와 오래 연애하는 비결은?",
    a: "ISFP의 감정을 존중하고, 자유로운 공간을 주는 게 중요해요. 함께 감성적인 경험을 나누고, ISFP의 개성을 인정하며, 편안한 관계를 유지하세요. ISFP는 이해받는다고 느끼면 헌신적으로 사랑해요."
  },

  // ISFP × 썸
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_signals",
    q: "ISFP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ISFP는 조심스럽고 섬세하게 신호를 보내요. 작은 배려, 관심 어린 눈빛, 함께 시간을 보내려는 모습으로 마음을 전합니다. ISFP가 편하게 자신을 드러내기 시작하면 호감이 있는 거예요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_signals",
    q: "ISFP가 관심 없을 때는 어떻게 행동하나요?",
    a: "ISFP는 관심 없으면 예의 바르지만 거리를 둬요. 친절하게 대하지만 개인적인 감정을 공유하지 않고, 만남도 최소한으로 유지합니다. 감정적인 교류가 없으면 관심이 없는 거예요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_contact",
    q: "ISFP는 썸 단계에서 먼저 연락하나요?",
    a: "ISFP는 먼저 연락하는 걸 망설이는 편이에요. 거절당할까 봐 걱정하거나, 부담 줄까 봐 고민하다가 타이밍을 놓치기도 합니다. 하지만 용기를 내면 감성적인 메시지로 먼저 다가가기도 해요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_contact",
    q: "ISFP와 썸 탈 때 효과적인 대화법은?",
    a: "ISFP는 진심 어리고 자연스러운 대화를 좋아해요. 감성적인 주제, 예술, 자연, 경험에 대해 얘기하고, ISFP의 이야기를 판단 없이 들어주세요. 공감과 이해를 보여주면 ISFP가 마음을 열어요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_confession",
    q: "ISFP는 언제 고백하나요?",
    a: "ISFP는 고백을 오래 망설이는 편이에요. 감정이 확실해도 용기가 안 나서 타이밍을 재다가 늦어지는 경우가 많습니다. 안전하고 편안한 분위기에서 조심스럽게 고백해요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_confession",
    q: "ISFP의 마음을 확인하는 방법은?",
    a: "ISFP에게 부담 주지 않는 방식으로 물어보세요. 강압적인 질문에는 마음을 닫지만, 편안한 분위기에서는 솔직하게 감정을 나눌 수 있어요. ISFP가 안전하다고 느끼는 게 중요해요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_dating",
    q: "ISFP와 첫 데이트는 어디가 좋을까요?",
    a: "ISFP는 감성적이고 여유로운 장소를 좋아해요. 카페, 공원, 갤러리처럼 조용하고 분위기 있는 곳이 좋습니다. 시끄럽거나 복잡한 곳보다 편안하고 자유로운 분위기를 선호해요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_dating",
    q: "ISFP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ISFP는 즉흥적으로 만나는 걸 좋아해요. 기분과 상황에 따라 자주 만나기도 하고, 혼자 있고 싶을 때는 만남을 미루기도 합니다. ISFP의 자유로운 리듬을 존중하는 게 중요해요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_tips",
    q: "ISFP를 꼬시는 효과적인 방법은?",
    a: "ISFP는 따뜻하고 감성적인 사람에게 끌려요. 진심을 보여주고, ISFP의 개성을 존중하며, 함께 감각적인 경험을 즐기세요. 또한 ISFP의 감정을 이해하고 공감해주면 효과적이에요."
  },
  {
    mbti: "ISFP",
    category: "crush",
    topic: "crush_tips",
    q: "ISFP가 싫어하는 행동은?",
    a: "ISFP는 판단적이고 강압적인 태도를 싫어해요. 또한 형식적이거나 진심 없는 행동, 자유를 제한하는 태도, 감정을 무시하는 모습은 ISFP를 불편하게 만듭니다."
  },

  // ISFP × 결혼
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_values",
    q: "ISFP의 결혼관은 어떤가요?",
    a: "ISFP는 결혼을 자연스럽고 편안한 동반자 관계로 생각해요. 서로의 개성을 존중하고, 자유롭게 살아가는 걸 중요하게 봅니다. ISFP에게 결혼은 함께 행복을 만들어가는 여정이에요."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_values",
    q: "ISFP가 배우자로 원하는 사람은?",
    a: "ISFP는 따뜻하고 이해심 있으며, 자신을 있는 그대로 받아들여주는 사람을 원해요. 개성을 존중하고, 함께 감성적인 경험을 나누며, 편안한 관계를 만들 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISFP는 집안일을 어떻게 하나요?",
    a: "ISFP는 집안일을 분위기나 기분에 따라 해요. 창의적으로 해결하려고 하지만, 루틴을 싫어해서 미루는 경우도 있습니다. 파트너와 함께 자연스럽게 분담하면 잘 할 수 있어요."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISFP의 경제관은?",
    a: "ISFP는 현재를 즐기는 데 돈을 쓰는 편이에요. 계획적인 저축보다 경험이나 감각적인 것에 투자하며, 재테크에는 큰 관심이 없을 수 있어요. 파트너와 함께 계획을 세우면 도움이 돼요."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISFP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ISFP는 감정이 상하면 혼자 시간을 가지려고 해요. 진정될 때까지 기다려주고, 진심으로 사과하며 감정을 공유하세요. ISFP는 진심을 느끼면 빨리 용서하고 화해하려고 해요."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISFP는 부부 대화를 어떻게 하나요?",
    a: "ISFP는 자연스럽고 편안한 대화를 원해요. 강요되거나 형식적인 대화보다 감정을 나누고 공감하는 시간을 중요하게 여깁니다. 판단하지 않고 들어주는 게 ISFP와의 대화에서 중요해요."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_children",
    q: "ISFP의 육아 스타일은?",
    a: "ISFP는 따뜻하고 자유로운 육아를 해요. 아이의 감정을 세심하게 살피고, 창의성과 개성을 존중하며, 자유롭게 표현하도록 격려합니다. 규칙보다 이해와 공감으로 아이를 키워요."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_children",
    q: "ISFP는 자녀 교육을 어떻게 생각하나요?",
    a: "ISFP는 아이의 개성과 감각을 중시하는 교육을 선호해요. 성적보다 아이가 행복하고 자신을 표현하는 걸 중요하게 여기며, 예술적이고 창의적인 활동을 격려합니다."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_family",
    q: "ISFP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ISFP는 조화를 중시하지만 형식적인 관계는 부담스러워해요. 예의 바르게 대하지만, 자유롭지 못한 분위기나 갈등 상황은 스트레스를 받을 수 있어요."
  },
  {
    mbti: "ISFP",
    category: "marriage",
    topic: "marriage_family",
    q: "ISFP와 명절을 보내려면?",
    a: "ISFP는 명절에 혼자만의 시간이 필요할 수 있어요. 중간중간 쉴 수 있는 공간을 주고, 과도한 역할을 강요하지 마세요. ISFP가 편안하게 참여할 수 있도록 배려하는 게 중요해요."
  },

  // ISFJ × 연애
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_affection",
    q: "ISFJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ISFJ는 헌신적이고 세심하게 애정을 표현해요. 상대방을 챙기고, 필요한 것을 먼저 알아서 해주며, 작은 배려로 사랑을 보여줍니다. ISFJ의 사랑은 조용하지만 따뜻하고 안정적이에요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_affection",
    q: "ISFJ는 스킨십을 어떻게 생각하나요?",
    a: "ISFJ는 스킨십에 신중하지만 편안하게 받아들여요. 충분히 친밀감이 쌓인 후 자연스럽게 스킨십을 하며, 따뜻하고 안정적인 접촉을 선호합니다. 급하게 진행되면 부담스러워할 수 있어요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_contact",
    q: "ISFJ는 연락을 자주 하는 편인가요?",
    a: "ISFJ는 규칙적이고 성실하게 연락하는 편이에요. 상대방을 챙기고 안부를 묻는 연락을 자주 하며, 관계를 잘 유지하려고 노력합니다. ISFJ의 연락은 따뜻하고 배려 깊어요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_contact",
    q: "ISFJ와 대화할 때 주의할 점은?",
    a: "ISFJ는 진심 어리고 편안한 대화를 원해요. 비판적이거나 공격적인 태도는 피하고, ISFJ의 노력을 인정하며 감사를 표현하세요. ISFJ는 자신의 배려가 인정받는다고 느낄 때 행복해해요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ISFJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ISFJ는 갈등을 싫어하고 빨리 풀고 싶어 해요. 진심으로 사과하고, ISFJ의 감정을 인정하며, 관계를 회복하려는 노력을 보이세요. ISFJ는 진심을 느끼면 빨리 용서하고 관계를 개선하려고 해요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ISFJ는 갈등 상황에서 어떻게 반응하나요?",
    a: "ISFJ는 갈등을 피하려고 하지만, 쌓이면 한 번에 터질 수 있어요. 평소 작은 것들을 참다가 한계에 다다르면 힘들어합니다. 정기적으로 감정을 나누는 게 중요해요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISFJ는 어떤 데이트를 좋아하나요?",
    a: "ISFJ는 편안하고 안정적인 데이트를 좋아해요. 맛집, 카페, 공원처럼 조용하고 여유로운 활동을 선호하며, 상대방과 깊은 대화를 나눌 수 있는 시간을 중요하게 생각해요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ISFJ는 일상에서 어떤 연인인가요?",
    a: "ISFJ는 헌신적이고 배려 깊은 연인이에요. 상대방을 먼저 챙기고, 작은 것까지 신경 쓰며, 안정적이고 따뜻한 관계를 만들어갑니다. 다만 자신의 감정은 표현을 잘 안 할 수 있어요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ISFJ의 이별 징조는 무엇인가요?",
    a: "ISFJ는 감정적으로 지쳐서 한계에 다다르면 이별을 생각해요. 계속 노력했지만 변화가 없거나, 더 이상 희망이 보이지 않으면 조용히 결단을 내립니다. ISFJ가 포기하면 이미 많이 참았다는 뜻이에요."
  },
  {
    mbti: "ISFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ISFJ와 오래 연애하는 비결은?",
    a: "ISFJ의 배려를 당연하게 여기지 말고 감사를 표현하세요. 안정적인 관계를 유지하고, ISFJ의 노력을 인정하며, 함께 편안한 일상을 만들어가세요. ISFJ는 사랑받는다고 느끼면 헌신적으로 관계를 유지해요."
  },

  // ISFJ × 썸
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_signals",
    q: "ISFJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ISFJ는 조심스럽지만 성실하게 신호를 보내요. 작은 것까지 챙겨주고, 관심을 보이며, 도움이 필요할 때 먼저 나서는 모습을 보입니다. ISFJ의 세심한 배려가 호감의 신호예요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_signals",
    q: "ISFJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "ISFJ는 관심 없으면 예의 바르지만 선을 그어요. 친절하게 대하지만 개인적인 배려는 하지 않고, 적당한 거리를 유지합니다. 특별한 관심이나 노력이 보이지 않으면 관심이 없는 거예요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_contact",
    q: "ISFJ는 썸 단계에서 먼저 연락하나요?",
    a: "ISFJ는 먼저 연락하는 걸 망설이는 편이에요. 부담 줄까 봐 걱정하지만, 관심 있으면 안부를 묻거나 필요한 것을 챙기는 연락을 합니다. ISFJ의 배려 어린 연락이 호감의 신호예요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_contact",
    q: "ISFJ와 썸 탈 때 효과적인 대화법은?",
    a: "ISFJ는 진심 어리고 따뜻한 대화를 좋아해요. ISFJ의 이야기를 경청하고, 감사를 표현하며, 편안한 분위기를 만들어주세요. ISFJ는 인정받는다고 느낄 때 마음을 열어요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_confession",
    q: "ISFJ는 언제 고백하나요?",
    a: "ISFJ는 고백을 오래 망설이는 편이에요. 확신이 들 때까지 기다리고, 상대방의 마음을 충분히 파악한 후 신중하게 고백합니다. ISFJ의 고백은 진지하고 진심 어려요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_confession",
    q: "ISFJ의 마음을 확인하는 방법은?",
    a: "ISFJ에게 편안한 분위기에서 물어보세요. 강압적이지 않게, 진심으로 궁금하다는 태도로 물어보면 ISFJ도 솔직하게 감정을 나눌 수 있어요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_dating",
    q: "ISFJ와 첫 데이트는 어디가 좋을까요?",
    a: "ISFJ는 편안하고 조용한 장소를 좋아해요. 분위기 좋은 카페, 공원, 맛집처럼 안정적이고 대화하기 좋은 곳이 좋습니다. 시끄럽거나 복잡한 곳은 ISFJ를 불편하게 만들 수 있어요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_dating",
    q: "ISFJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ISFJ는 규칙적으로 만나는 걸 선호해요. 일주일에 1-2번 정도 계획을 세워서 만나며, 안정적인 만남 패턴을 편하게 느낍니다."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_tips",
    q: "ISFJ를 꼬시는 효과적인 방법은?",
    a: "ISFJ는 따뜻하고 성실한 사람에게 끌려요. ISFJ의 배려를 알아주고 감사를 표현하며, 안정적이고 신뢰할 수 있는 모습을 보이세요. 또한 ISFJ를 편안하게 만들어주는 태도가 효과적이에요."
  },
  {
    mbti: "ISFJ",
    category: "crush",
    topic: "crush_tips",
    q: "ISFJ가 싫어하는 행동은?",
    a: "ISFJ는 배려를 당연하게 여기거나, 비판적이고 공격적인 태도를 싫어해요. 또한 불안정하거나 변덕스러운 행동, ISFJ의 노력을 무시하는 태도는 ISFJ를 힘들게 만듭니다."
  },

  // ISFJ × 결혼
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ISFJ의 결혼관은 어떤가요?",
    a: "ISFJ는 결혼을 평생의 헌신으로 생각해요. 안정적이고 따뜻한 가정을 꾸리는 걸 중요하게 여기며, 가족을 위해 헌신하는 걸 가치 있게 생각합니다. ISFJ에게 결혼은 사랑과 책임의 약속이에요."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ISFJ가 배우자로 원하는 사람은?",
    a: "ISFJ는 성실하고 따뜻하며, 가정을 소중히 여기는 사람을 원해요. ISFJ의 노력을 인정하고, 함께 안정적인 가정을 만들며, 서로를 지지하는 파트너를 찾습니다."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISFJ는 집안일을 어떻게 하나요?",
    a: "ISFJ는 성실하고 꼼꼼하게 집안일을 해요. 가족을 위해 헌신하고, 집을 편안하고 따뜻하게 만들려고 노력합니다. 다만 모든 걸 혼자 하려다 지칠 수 있으니 파트너의 협력이 중요해요."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ISFJ의 경제관은?",
    a: "ISFJ는 안정적이고 계획적인 경제 관리를 해요. 가족의 안정을 위해 저축하고, 필요한 곳에 투자하며, 재정적 안정을 중시합니다. 불필요한 소비는 줄이고 미래를 준비하는 편이에요."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISFJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ISFJ는 빨리 화해하고 싶어 해요. 진심으로 사과하고, ISFJ의 감정을 인정하며, 관계를 회복하려는 노력을 보이세요. ISFJ는 진심을 느끼면 빨리 용서하고 관계를 개선하려고 해요."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ISFJ는 부부 대화를 어떻게 하나요?",
    a: "ISFJ는 정기적으로 감정을 나누는 대화를 중시해요. 상대방의 이야기를 경청하고, 공감하며, 관계를 돈독히 하려고 노력합니다. ISFJ와는 따뜻하고 솔직한 대화가 관계의 핵심이에요."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ISFJ의 육아 스타일은?",
    a: "ISFJ는 헌신적이고 세심한 부모예요. 아이의 필요를 먼저 챙기고, 안정적이고 따뜻한 환경을 만들어주며, 아이가 건강하고 행복하게 성장하도록 돕습니다."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ISFJ는 자녀 교육을 어떻게 생각하나요?",
    a: "ISFJ는 전통적이고 안정적인 교육을 선호해요. 아이가 성실하고 책임감 있게 성장하도록 가르치며, 정서적으로 안정된 환경을 제공하는 걸 중요하게 여깁니다."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ISFJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ISFJ는 가족 관계를 성실하게 유지해요. 예의를 중시하고, 갈등을 피하며, 조화로운 관계를 만들려고 노력합니다. 다만 과도하게 신경 쓰다가 지칠 수 있어요."
  },
  {
    mbti: "ISFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ISFJ와 명절을 보내려면?",
    a: "ISFJ는 명절에 가족을 위해 많이 노력해요. 모든 걸 챙기려다 지칠 수 있으니, 파트너가 함께 분담하고 ISFJ를 배려하는 게 중요합니다. ISFJ의 노고를 인정하고 감사를 표현하세요."
  },
  // ESTP × 연애
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_affection",
    q: "ESTP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ESTP는 적극적이고 직접적으로 애정을 표현해요. 행동으로 보여주는 걸 좋아하고, 재미있는 경험을 함께하며 사랑을 전합니다. ESTP의 사랑은 열정적이고 즉흥적이며 에너지 넘쳐요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_affection",
    q: "ESTP는 스킨십을 어떻게 생각하나요?",
    a: "ESTP는 스킨십을 자연스럽고 편하게 생각해요. 적극적으로 스킨십을 하며, 신체적 접촉으로 애정을 표현하는 걸 좋아합니다. ESTP는 스킨십에 거리낌이 없는 편이에요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_contact",
    q: "ESTP는 연락을 자주 하는 편인가요?",
    a: "ESTP는 연락 빈도가 불규칙해요. 바쁘거나 다른 일에 집중하면 연락이 뜸해지지만, 생각날 때 갑자기 연락하기도 합니다. ESTP는 연락보다 직접 만나는 걸 선호해요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_contact",
    q: "ESTP와 대화할 때 주의할 점은?",
    a: "ESTP는 재미있고 간결한 대화를 좋아해요. 장황하거나 감정적인 대화보다 유머 있고 흥미로운 주제를 선호합니다. 지루한 대화는 금방 흥미를 잃으니 에너지 있게 대화하세요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_conflict",
    q: "ESTP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ESTP는 갈등을 빨리 풀고 싶어 해요. 과거를 끄집어내기보다 현재 문제에 집중하고, 간단명료하게 해결책을 찾으세요. 감정적으로 몰아붙이면 ESTP는 회피할 수 있어요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_conflict",
    q: "ESTP는 갈등 상황에서 어떻게 반응하나요?",
    a: "ESTP는 갈등을 직접적으로 해결하려고 하거나 아예 회피해요. 감정을 깊이 파고들기보다 빠르게 넘어가려고 하며, 오래 끄는 갈등을 싫어합니다."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESTP는 어떤 데이트를 좋아하나요?",
    a: "ESTP는 활동적이고 스릴 있는 데이트를 좋아해요. 스포츠, 놀이공원, 새로운 장소 탐험처럼 에너지를 발산할 수 있는 활동을 선호합니다. 앉아서 대화만 하는 데이트는 지루해해요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESTP는 일상에서 어떤 연인인가요?",
    a: "ESTP는 재미있고 즉흥적인 연인이에요. 매일 새로운 것을 시도하고, 함께 재미있는 경험을 만들어가며, 관계에 활력을 불어넣습니다. 루틴보다 변화를 선호해요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_breakup",
    q: "ESTP의 이별 징조는 무엇인가요?",
    a: "ESTP는 관계가 지루해지거나 재미가 없어지면 이별을 생각해요. 새로운 것에 관심을 돌리고, 만남을 피하며, 거리를 두기 시작합니다. ESTP는 이별도 빠르게 결정하는 편이에요."
  },
  {
    mbti: "ESTP",
    category: "dating",
    topic: "dating_breakup",
    q: "ESTP와 오래 연애하는 비결은?",
    a: "ESTP와는 항상 새롭고 재미있는 관계를 유지하는 게 중요해요. 함께 다양한 활동을 즐기고, 루틴에 빠지지 않으며, ESTP의 자유를 존중하세요. 관계를 신선하게 유지하면 오래갈 수 있어요."
  },

  // ESTP × 썸
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_signals",
    q: "ESTP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ESTP는 직접적이고 적극적으로 신호를 보내요. 자주 놀리고, 신체 접촉을 시도하며, 함께 재미있는 활동을 하려고 합니다. ESTP의 장난스러운 태도가 호감의 신호예요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_signals",
    q: "ESTP가 관심 없을 때는 어떻게 행동하나요?",
    a: "ESTP는 관심 없으면 시간을 쓰지 않아요. 간단하게 대하고, 개인적인 관심을 보이지 않으며, 다른 사람이나 활동에 에너지를 쏟습니다. ESTP의 에너지가 느껴지지 않으면 관심이 없는 거예요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_contact",
    q: "ESTP는 썸 단계에서 먼저 연락하나요?",
    a: "ESTP는 관심 있으면 적극적으로 먼저 연락해요. 만나자고 제안하거나, 재미있는 것을 공유하며, 직접적으로 다가갑니다. ESTP의 주도적인 모습은 호감의 확실한 신호예요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_contact",
    q: "ESTP와 썸 탈 때 효과적인 대화법은?",
    a: "ESTP는 재미있고 유머러스한 대화를 좋아해요. 지루하거나 진지한 대화보다 가볍고 즉흥적인 대화를 선호합니다. 농담을 주고받고, 에너지 넘치게 대화하면 효과적이에요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_confession",
    q: "ESTP는 언제 고백하나요?",
    a: "ESTP는 감정이 확실하면 빠르게 고백하는 편이에요. 분위기가 좋으면 즉흥적으로 고백하기도 하며, 직접적이고 솔직하게 마음을 전합니다. ESTP의 고백은 간단하고 명확해요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_confession",
    q: "ESTP의 마음을 확인하는 방법은?",
    a: "ESTP에게 직접 물어보세요. ESTP는 돌려 말하는 걸 싫어하고, 솔직한 질문을 편하게 받아들입니다. 직설적으로 물어보면 ESTP도 명확하게 답해줄 거예요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_dating",
    q: "ESTP와 첫 데이트는 어디가 좋을까요?",
    a: "ESTP는 활동적이고 재미있는 장소를 좋아해요. 놀이공원, 스포츠, 새로운 맛집처럼 에너지 넘치고 즐거운 곳이 좋습니다. 조용한 카페보다 활동적인 데이트가 ESTP를 매력적으로 만들어요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_dating",
    q: "ESTP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ESTP는 자주 만나고 싶어 하는 편이에요. 좋아하는 사람과 많은 시간을 보내고 싶어 하며, 다양한 활동을 함께하려고 합니다. ESTP의 에너지를 따라갈 수 있다면 즐거운 시간이 될 거예요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_tips",
    q: "ESTP를 꼬시는 효과적인 방법은?",
    a: "ESTP는 자신감 있고 재미있는 사람에게 끌려요. 에너지 넘치고, 즉흥적이며, 새로운 것을 함께 즐길 수 있는 모습을 보이세요. 또한 ESTP의 자유를 존중하고 함께 모험하는 태도가 효과적이에요."
  },
  {
    mbti: "ESTP",
    category: "crush",
    topic: "crush_tips",
    q: "ESTP가 싫어하는 행동은?",
    a: "ESTP는 지루하고 답답한 사람을 싫어해요. 과도한 계획, 감정적인 집착, 변화를 거부하는 태도는 ESTP를 답답하게 만듭니다. 또한 자유를 제한하거나 루틴에 가두려는 행동도 싫어해요."
  },

  // ESTP × 결혼
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_values",
    q: "ESTP의 결혼관은 어떤가요?",
    a: "ESTP는 결혼을 자유롭고 재미있는 동반자 관계로 생각해요. 서로의 독립성을 존중하고, 함께 다양한 경험을 즐기는 걸 중요하게 봅니다. ESTP에게 결혼은 함께하는 모험이에요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_values",
    q: "ESTP가 배우자로 원하는 사람은?",
    a: "ESTP는 활동적이고 유연하며, 함께 재미를 즐길 수 있는 사람을 원해요. 자유를 존중하고, ESTP의 에너지를 따라올 수 있으며, 즉흥적인 삶을 즐길 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESTP는 집안일을 어떻게 하나요?",
    a: "ESTP는 집안일을 효율적으로 빠르게 처리해요. 루틴보다 필요할 때 하는 편이며, 완벽주의적이지 않습니다. 최소한으로 유지하면서 자유 시간을 확보하려고 해요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESTP의 경제관은?",
    a: "ESTP는 현재를 즐기는 데 돈을 쓰는 편이에요. 경험이나 재미있는 것에 투자하며, 장기적인 저축보다 즉각적인 만족을 선호합니다. 재테크에는 큰 관심이 없을 수 있어요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESTP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ESTP는 빠르게 해결하고 넘어가고 싶어 해요. 간단명료하게 문제를 얘기하고, 과거를 끄집어내지 말고, 미래 지향적으로 접근하세요. 감정적으로 끄는 갈등을 ESTP는 힘들어해요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESTP는 부부 대화를 어떻게 하나요?",
    a: "ESTP는 간결하고 실질적인 대화를 선호해요. 장황한 감정 표현보다 핵심만 빠르게 전달하고, 문제가 있으면 즉시 해결하려고 합니다. 깊고 긴 대화보다 짧고 효율적인 대화를 좋아해요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_children",
    q: "ESTP의 육아 스타일은?",
    a: "ESTP는 활동적이고 재미있는 부모예요. 아이와 함께 놀아주고, 다양한 경험을 제공하며, 자유롭게 탐구하도록 합니다. 규칙보다 경험을 중시하고, 아이와 친구처럼 지내는 편이에요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_children",
    q: "ESTP는 자녀 교육을 어떻게 생각하나요?",
    a: "ESTP는 아이의 실전 경험을 중시해요. 책보다 직접 경험하게 하고, 다양한 활동을 통해 배우도록 하며, 아이의 자율성을 존중합니다. 주입식 교육보다 체험 학습을 선호해요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_family",
    q: "ESTP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ESTP는 가족 모임을 부담스러워할 수 있어요. 형식적인 절차보다 편하게 어울리는 걸 선호하며, 너무 오래 걸리는 모임은 지루해합니다. 자유롭고 편안한 관계를 원해요."
  },
  {
    mbti: "ESTP",
    category: "marriage",
    topic: "marriage_family",
    q: "ESTP와 명절을 보내려면?",
    a: "ESTP는 명절을 간단하게 보내고 싶어 해요. 형식적인 절차를 최소화하고, ESTP가 에너지를 발산할 수 있는 활동을 포함하세요. 너무 오래 앉아 있는 건 ESTP를 지치게 만들어요."
  },

  // ESTJ × 연애
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_affection",
    q: "ESTJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ESTJ는 책임감 있고 실질적으로 애정을 표현해요. 말보다 행동으로 보여주며, 안정적인 관계를 만들고 필요한 것을 챙겨주는 방식으로 사랑을 전합니다. ESTJ의 사랑은 믿음직하고 든든해요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_affection",
    q: "ESTJ는 스킨십을 어떻게 생각하나요?",
    a: "ESTJ는 스킨십에 신중하지만 자연스럽게 받아들여요. 관계가 확실해진 후 편안하게 스킨십을 하며, 과하거나 갑작스러운 스킨십은 부담스러워할 수 있어요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_contact",
    q: "ESTJ는 연락을 자주 하는 편인가요?",
    a: "ESTJ는 규칙적이고 계획적으로 연락하는 편이에요. 필요한 연락은 꼬박꼬박 하지만, 불필요한 잡담은 하지 않습니다. ESTJ의 연락은 명확하고 목적이 있어요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_contact",
    q: "ESTJ와 대화할 때 주의할 점은?",
    a: "ESTJ는 효율적이고 명확한 대화를 선호해요. 핵심을 정확하게 전달하고, 논리적으로 얘기하세요. 추상적이거나 감정적인 대화보다 사실과 계획에 기반한 대화를 좋아합니다."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ESTJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ESTJ는 문제를 직접적으로 해결하려고 해요. 감정보다 사실에 기반해서 대화하고, 명확한 해결책을 제시하세요. 논리적으로 접근하면 ESTJ와 빠르게 문제를 풀 수 있어요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ESTJ는 갈등 상황에서 어떻게 반응하나요?",
    a: "ESTJ는 갈등을 체계적으로 해결하려고 해요. 문제의 원인을 파악하고, 규칙이나 원칙에 따라 판단하며, 효율적인 해결책을 찾습니다. 감정보다 사실을 중시하는 편이에요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESTJ는 어떤 데이트를 좋아하나요?",
    a: "ESTJ는 계획적이고 생산적인 데이트를 좋아해요. 맛집, 운동, 여행처럼 목적이 있는 활동을 선호하며, 시간을 효율적으로 사용하는 걸 중요하게 생각해요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESTJ는 일상에서 어떤 연인인가요?",
    a: "ESTJ는 성실하고 책임감 있는 연인이에요. 약속을 철저히 지키고, 안정적으로 관계를 유지하며, 파트너를 위해 헌신합니다. 규칙적이고 예측 가능한 관계를 선호해요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ESTJ의 이별 징조는 무엇인가요?",
    a: "ESTJ는 관계가 비효율적이거나 맞지 않다고 판단하면 이별을 생각해요. 점점 거리를 두고, 관계에 투자하는 시간을 줄이며, 냉정하게 정리합니다. ESTJ는 결정을 내리면 번복하지 않아요."
  },
  {
    mbti: "ESTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ESTJ와 오래 연애하는 비결은?",
    a: "ESTJ의 성실함과 책임감을 인정하고, 안정적인 관계를 유지하는 게 중요해요. 약속을 지키고, 신뢰를 쌓으며, ESTJ의 원칙을 존중하세요. ESTJ는 믿을 수 있는 관계라고 느끼면 평생을 함께하려고 해요."
  },

  // ESTJ × 썸
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_signals",
    q: "ESTJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ESTJ는 직접적이고 명확하게 신호를 보내요. 규칙적으로 연락하고, 계획을 세워서 만나며, 실질적으로 도와주는 모습을 보입니다. ESTJ가 시간을 내준다는 건 호감의 확실한 신호예요."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_signals",
    q: "ESTJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "ESTJ는 관심 없으면 시간을 할애하지 않아요. 최소한의 예의만 지키고, 개인적인 관심을 보이지 않으며, 비즈니스처럼 간단하게 대합니다."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_contact",
    q: "ESTJ는 썸 단계에서 먼저 연락하나요?",
    a: "ESTJ는 관심 있으면 계획적으로 먼저 연락해요. 만날 약속을 잡거나, 목적 있는 연락을 하며, 직접적으로 관계를 진전시킵니다. ESTJ의 주도적인 모습이 호감의 신호예요."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_contact",
    q: "ESTJ와 썸 탈 때 효과적인 대화법은?",
    a: "ESTJ는 명확하고 실질적인 대화를 좋아해요. 핵심만 말하고, 논리적으로 얘기하며, 계획이나 미래에 대해 얘기하세요. 추상적이거나 감정적인 대화보다 구체적인 대화가 효과적이에요."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_confession",
    q: "ESTJ는 언제 고백하나요?",
    a: "ESTJ는 확신이 들면 직접적으로 고백해요. 관계의 가능성을 판단하고, 적절한 타이밍에 명확하게 의사를 전달합니다. ESTJ의 고백은 진지하고 솔직해요."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_confession",
    q: "ESTJ의 마음을 확인하는 방법은?",
    a: "ESTJ에게 직접 물어보세요. 돌려 말하거나 눈치 게임을 하면 ESTJ는 알아채지 못할 수 있어요. 명확하게 물어보면 ESTJ도 솔직하고 직접적으로 답해줄 거예요."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_dating",
    q: "ESTJ와 첫 데이트는 어디가 좋을까요?",
    a: "ESTJ는 안정적이고 계획할 수 있는 장소를 좋아해요. 유명한 맛집, 박물관, 공원처럼 예측 가능하고 목적이 있는 데이트가 좋습니다. 갑작스럽거나 즉흥적인 건 부담스러워할 수 있어요."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_dating",
    q: "ESTJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ESTJ는 규칙적으로 만나는 걸 선호해요. 일주일에 1-2번 정도 계획을 세워서 만나며, 예측 가능한 만남 패턴을 편하게 느낍니다."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_tips",
    q: "ESTJ를 꼬시는 효과적인 방법은?",
    a: "ESTJ는 책임감 있고 성실한 사람에게 끌려요. 약속을 잘 지키고, 신뢰할 수 있으며, 목표 지향적인 모습을 보이세요. 또한 ESTJ의 원칙과 가치관을 존중하는 태도가 효과적이에요."
  },
  {
    mbti: "ESTJ",
    category: "crush",
    topic: "crush_tips",
    q: "ESTJ가 싫어하는 행동은?",
    a: "ESTJ는 무책임하고 비효율적인 행동을 싫어해요. 약속을 어기거나, 계획 없이 행동하거나, 규칙을 무시하는 태도는 ESTJ를 불편하게 만듭니다. 또한 감정적으로 변덕스러운 모습도 싫어해요."
  },

  // ESTJ × 결혼
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ESTJ의 결혼관은 어떤가요?",
    a: "ESTJ는 결혼을 책임과 헌신의 약속으로 생각해요. 전통적이고 안정적인 가정을 꾸리는 걸 중요하게 여기며, 가족을 위해 헌신하는 걸 가치 있게 생각합니다. ESTJ에게 결혼은 평생의 책임이에요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ESTJ가 배우자로 원하는 사람은?",
    a: "ESTJ는 성실하고 책임감 있으며, 전통적인 가치관을 공유하는 사람을 원해요. 함께 안정적인 가정을 만들고, 서로를 지지하며, 효율적으로 역할을 분담할 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESTJ는 집안일을 어떻게 하나요?",
    a: "ESTJ는 체계적이고 효율적으로 집안일을 해요. 역할을 명확히 분담하고, 루틴을 만들어서 관리하며, 책임감 있게 자신의 몫을 해냅니다. 집안을 질서 있게 유지하는 걸 중요하게 생각해요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESTJ의 경제관은?",
    a: "ESTJ는 체계적이고 계획적인 경제 관리를 해요. 꼼꼼하게 예산을 세우고, 저축하며, 장기적인 재무 계획을 중시합니다. 재정적 안정을 매우 중요하게 생각하고 실천해요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESTJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ESTJ는 논리적이고 직접적인 해결을 원해요. 감정보다 사실에 기반해서 대화하고, 명확한 해결책을 제시하세요. 문제를 효율적으로 해결하려는 태도를 보이면 ESTJ와 빠르게 화해할 수 있어요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESTJ는 부부 대화를 어떻게 하나요?",
    a: "ESTJ는 실질적이고 목적 있는 대화를 선호해요. 가족 계획, 재정, 중요한 결정에 대해 명확하게 논의하며, 효율적인 의사소통을 중시합니다. 불필요한 감정 표현보다 문제 해결 중심 대화를 좋아해요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ESTJ의 육아 스타일은?",
    a: "ESTJ는 체계적이고 원칙 있는 육아를 해요. 규칙을 명확히 정하고, 책임감과 성실함을 가르치며, 전통적인 가치관을 중시합니다. 아이가 책임감 있고 성공적인 사람으로 성장하도록 교육해요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ESTJ는 자녀 교육을 어떻게 생각하나요?",
    a: "ESTJ는 체계적이고 목표 지향적인 교육을 중시해요. 학업과 규율을 강조하며, 아이가 사회에서 성공할 수 있도록 준비시킵니다. 계획적이고 전통적인 교육 방식을 선호하는 편이에요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ESTJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ESTJ는 전통과 예의를 중시해요. 가족 관계를 책임감 있게 대하고, 규칙과 예절을 잘 지키며, 안정적인 관계를 유지하려고 노력합니다. 가족 행사를 중요하게 생각해요."
  },
  {
    mbti: "ESTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ESTJ와 명절을 보내려면?",
    a: "ESTJ는 명절 전통을 중시하고 철저하게 준비해요. 계획을 미리 세우고, 역할을 명확히 하며, 체계적으로 진행하는 걸 선호합니다. ESTJ의 리더십을 인정하고 함께 협력하는 게 중요해요."
  },

  // ESFP × 연애
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_affection",
    q: "ESFP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ESFP는 열정적이고 표현이 풍부하게 애정을 보여줘요. 스킨십, 칭찬, 이벤트로 사랑을 전하며, 상대방을 즐겁게 만들려고 노력합니다. ESFP의 사랑은 에너지 넘치고 따뜻해요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_affection",
    q: "ESFP는 스킨십을 어떻게 생각하나요?",
    a: "ESFP는 스킨십을 자연스럽고 적극적으로 해요. 신체적 접촉으로 애정을 표현하는 걸 좋아하며, 따뜻하고 다정한 스킨십을 즐깁니다. ESFP는 스킨십에 거리낌이 없는 편이에요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_contact",
    q: "ESFP는 연락을 자주 하는 편인가요?",
    a: "ESFP는 연락을 자주 하는 편이에요. 재미있는 것을 공유하고, 감정을 표현하며, 적극적으로 소통하려고 합니다. 다만 바쁘거나 다른 일에 집중하면 연락이 뜸해질 수도 있어요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_contact",
    q: "ESFP와 대화할 때 주의할 점은?",
    a: "ESFP는 재미있고 긍정적인 대화를 좋아해요. 지루하거나 부정적인 대화는 금방 흥미를 잃고, 유머와 에너지가 있는 대화를 선호합니다. ESFP와는 즐겁고 밝은 분위기로 대화하세요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_conflict",
    q: "ESFP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ESFP는 갈등을 빨리 풀고 싶어 해요. 진심으로 사과하고, 감정을 솔직하게 나누며, 즐거운 분위기를 회복하세요. ESFP는 진심을 느끼면 금방 풀리고 관계를 회복하려고 해요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_conflict",
    q: "ESFP는 갈등 상황에서 어떻게 반응하나요?",
    a: "ESFP는 감정적으로 반응하는 편이에요. 화가 나면 바로 표현하지만, 시간이 지나면 금방 풀리는 스타일입니다. 다만 반복되는 문제나 부정적인 분위기는 ESFP를 지치게 만들어요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESFP는 어떤 데이트를 좋아하나요?",
    a: "ESFP는 재미있고 활기찬 데이트를 좋아해요. 맛집 탐방, 놀이공원, 콘서트처럼 사람들과 어울리고 즐길 수 있는 활동을 선호합니다. ESFP와는 언제나 즐거운 데이트가 될 거예요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESFP는 일상에서 어떤 연인인가요?",
    a: "ESFP는 밝고 활기찬 연인이에요. 매일매일 즐겁게 만들려고 노력하고, 긍정적인 에너지를 주며, 함께 있으면 지루할 틈이 없어요. ESFP는 관계를 재미있게 만드는 데 천재예요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_breakup",
    q: "ESFP의 이별 징조는 무엇인가요?",
    a: "ESFP는 관계가 지루하거나 재미없어지면 이별을 생각해요. 에너지가 빠지고, 다른 것에 관심을 돌리며, 점점 거리를 두기 시작합니다. ESFP가 열정을 잃으면 관계 회복이 어려워요."
  },
  {
    mbti: "ESFP",
    category: "dating",
    topic: "dating_breakup",
    q: "ESFP와 오래 연애하는 비결은?",
    a: "ESFP와는 항상 재미와 새로움을 유지하는 게 중요해요. 함께 다양한 경험을 하고, ESFP의 에너지를 지지하며, 긍정적인 관계를 만들어가세요. 루틴에 빠지지 않고 관계를 즐겁게 유지하면 오래갈 수 있어요."
  },

  // ESFP × 썸
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_signals",
    q: "ESFP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ESFP는 적극적이고 명확하게 신호를 보내요. 자주 연락하고, 관심을 표현하며, 함께 재미있는 시간을 보내려고 노력합니다. ESFP의 밝고 다정한 태도가 호감의 신호예요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_signals",
    q: "ESFP가 관심 없을 때는 어떻게 행동하나요?",
    a: "ESFP는 관심 없으면 친절하지만 거리를 둬요. 대화가 형식적으로 변하고, 개인적인 시간을 할애하지 않으며, 다른 사람이나 활동에 에너지를 쏟습니다."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_contact",
    q: "ESFP는 썸 단계에서 먼저 연락하나요?",
    a: "ESFP는 적극적으로 먼저 연락해요. 재미있는 것을 공유하고, 만나자고 제안하며, 관심을 솔직하게 표현합니다. ESFP의 주도적이고 밝은 연락은 호감의 확실한 신호예요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_contact",
    q: "ESFP와 썸 탈 때 효과적인 대화법은?",
    a: "ESFP는 재미있고 긍정적인 대화를 좋아해요. 유머를 섞고, 즐거운 이야기를 나누며, 에너지 넘치게 대화하세요. 지루하거나 진지한 대화보다 밝고 즐거운 분위기가 효과적이에요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_confession",
    q: "ESFP는 언제 고백하나요?",
    a: "ESFP는 감정이 확실하면 빠르게 고백하는 편이에요. 분위기가 좋으면 즉흥적으로 고백하기도 하며, 솔직하고 직접적으로 마음을 전합니다. ESFP의 고백은 진심 어리고 열정적이에요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_confession",
    q: "ESFP의 마음을 확인하는 방법은?",
    a: "ESFP에게 솔직하게 물어보세요. ESFP는 진심 어린 질문을 편하게 받아들이고, 자신의 감정을 숨기지 않는 편이에요. 직접적으로 물어보면 ESFP도 솔직하게 답해줄 거예요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_dating",
    q: "ESFP와 첫 데이트는 어디가 좋을까요?",
    a: "ESFP는 재미있고 활기찬 장소를 좋아해요. 맛집, 카페, 놀이공원처럼 즐겁고 에너지 넘치는 곳이 좋습니다. ESFP는 사람들이 있고 분위기 있는 곳에서 빛을 발해요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_dating",
    q: "ESFP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ESFP는 자주 만나고 싶어 하는 편이에요. 좋아하는 사람과 많은 시간을 보내고 싶어 하며, 다양한 활동을 함께하려고 합니다. ESFP와는 자연스럽게 자주 만나게 될 거예요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_tips",
    q: "ESFP를 꼬시는 효과적인 방법은?",
    a: "ESFP는 밝고 긍정적인 사람에게 끌려요. 재미있고 에너지 넘치며, 함께 즐길 수 있는 모습을 보이세요. 또한 ESFP의 열정을 응원하고 함께 즐거움을 만들어가는 태도가 효과적이에요."
  },
  {
    mbti: "ESFP",
    category: "crush",
    topic: "crush_tips",
    q: "ESFP가 싫어하는 행동은?",
    a: "ESFP는 부정적이고 지루한 사람을 싫어해요. 비판적이거나 에너지를 빼앗는 태도, 루틴에 갇힌 모습, 새로운 것을 거부하는 태도는 ESFP를 답답하게 만듭니다."
  },

  // ESFP × 결혼
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_values",
    q: "ESFP의 결혼관은 어떤가요?",
    a: "ESFP는 결혼을 즐겁고 행복한 여정으로 생각해요. 함께 재미있는 경험을 나누고, 긍정적인 가정을 만드는 걸 중요하게 봅니다. ESFP에게 결혼은 함께 행복을 만들어가는 모험이에요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_values",
    q: "ESFP가 배우자로 원하는 사람은?",
    a: "ESFP는 밝고 긍정적이며, 함께 즐거움을 나눌 수 있는 사람을 원해요. ESFP의 에너지를 이해하고, 함께 다양한 경험을 즐기며, 행복한 가정을 만들 수 있는 파트너를 찾습니다."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESFP는 집안일을 어떻게 하나요?",
    a: "ESFP는 집안일을 기분 따라 하는 편이에요. 루틴보다 즉흥적으로 하며, 완벽주의적이지 않습니다. 파트너와 함께 재미있게 분담하면 잘 할 수 있어요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESFP의 경제관은?",
    a: "ESFP는 현재를 즐기는 데 돈을 쓰는 편이에요. 경험이나 즐거움에 투자하며, 계획적인 저축보다 즉각적인 만족을 선호합니다. 재테크에는 큰 관심이 없을 수 있어요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESFP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ESFP는 빨리 풀고 싶어 해요. 진심으로 사과하고, 감정을 솔직하게 나누며, 긍정적인 분위기를 회복하세요. ESFP는 진심을 느끼면 금방 용서하고 관계를 회복하려고 해요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESFP는 부부 대화를 어떻게 하나요?",
    a: "ESFP는 열린 대화를 선호해요. 감정을 솔직하게 표현하고, 긍정적인 분위기에서 이야기하며, 즐겁게 소통하는 걸 좋아합니다. 무거운 대화보다 밝고 편안한 대화를 선호해요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_children",
    q: "ESFP의 육아 스타일은?",
    a: "ESFP는 재미있고 다정한 부모예요. 아이와 함께 놀아주고, 즐거운 경험을 제공하며, 자유롭게 표현하도록 격려합니다. 규칙보다 즐거움을 중시하고, 아이와 친구처럼 지내는 편이에요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_children",
    q: "ESFP는 자녀 교육을 어떻게 생각하나요?",
    a: "ESFP는 아이의 행복과 즐거움을 중시해요. 다양한 경험을 통한 배움을 선호하며, 아이가 자유롭게 탐구하고 즐기도록 합니다. 주입식 교육보다 체험 학습을 좋아해요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_family",
    q: "ESFP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ESFP는 밝고 긍정적으로 가족 관계를 대해요. 사람들과 잘 어울리고, 분위기를 즐겁게 만들지만, 너무 형식적이거나 답답한 분위기는 힘들어할 수 있어요."
  },
  {
    mbti: "ESFP",
    category: "marriage",
    topic: "marriage_family",
    q: "ESFP와 명절을 보내려면?",
    a: "ESFP는 명절을 즐기려고 하지만, 너무 형식적이면 답답해할 수 있어요. 자유롭게 어울릴 수 있는 분위기를 만들고, ESFP가 에너지를 발산할 수 있는 공간을 주면 좋아요."
  },

  // ESFJ × 연애
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_affection",
    q: "ESFJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ESFJ는 따뜻하고 헌신적으로 애정을 표현해요. 말과 행동으로 자주 사랑을 전하고, 상대방을 챙기고 배려하는 모습을 보입니다. ESFJ의 사랑은 포근하고 안정적이며 세심해요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_affection",
    q: "ESFJ는 스킨십을 어떻게 생각하나요?",
    a: "ESFJ는 스킨십을 자연스럽고 따뜻하게 표현해요. 애정 어린 스킨십으로 사랑을 전하는 걸 좋아하며, 상대방을 편안하게 만들어주려고 노력합니다. 진심이 담긴 스킨십을 중요하게 생각해요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_contact",
    q: "ESFJ는 연락을 자주 하는 편인가요?",
    a: "ESFJ는 연락을 자주 하는 편이에요. 상대방을 챙기고, 안부를 묻고, 감정을 공유하려고 노력합니다. ESFJ는 연락을 통해 관계를 돈독히 하는 걸 중요하게 생각해요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_contact",
    q: "ESFJ와 대화할 때 주의할 점은?",
    a: "ESFJ는 진심 어린 대화를 원해요. 감정을 솔직하게 나누고, ESFJ의 배려를 인정하며, 따뜻하게 소통하세요. ESFJ는 진심을 중요하게 생각하기 때문에 형식적인 태도는 금방 알아채요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ESFJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ESFJ는 대화로 빨리 풀고 싶어 해요. 진심으로 사과하고, 감정을 공유하며, 관계 회복을 위해 노력하는 모습을 보이세요. ESFJ는 진심을 느끼면 빨리 용서하고 화해하려고 해요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ESFJ는 갈등 상황에서 어떻게 반응하나요?",
    a: "ESFJ는 갈등을 빨리 해결하려고 해요. 대화로 문제를 풀려고 노력하지만, 감정이 상하면 힘들어하기도 합니다. ESFJ는 조화로운 관계를 중시하기 때문에 갈등이 오래가는 걸 힘들어해요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESFJ는 어떤 데이트를 좋아하나요?",
    a: "ESFJ는 함께 즐길 수 있는 데이트를 좋아해요. 맛집, 쇼핑, 영화처럼 사람들과 어울리고 추억을 만들 수 있는 활동을 선호합니다. 상대방이 즐거워하는 모습을 보는 걸 좋아해요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ESFJ는 일상에서 어떤 연인인가요?",
    a: "ESFJ는 헌신적이고 배려 깊은 연인이에요. 상대방을 먼저 챙기고, 필요한 것을 알아서 해결하며, 관계를 발전시키기 위해 노력합니다. ESFJ는 상대방의 행복을 자신의 행복처럼 생각해요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ESFJ의 이별 징조는 무엇인가요?",
    a: "ESFJ는 관계에 지쳐서 에너지가 빠지면 이별을 생각해요. 계속 노력했지만 변화가 없거나, 더 이상 희망이 보이지 않으면 결단을 내립니다. ESFJ가 포기하면 이미 많이 참았다는 뜻이에요."
  },
  {
    mbti: "ESFJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ESFJ와 오래 연애하는 비결은?",
    a: "ESFJ의 배려를 당연하게 여기지 말고 감사하는 마음을 표현하세요. 상호 존중과 소통을 유지하고, ESFJ가 사랑받는다고 느끼도록 해주세요. ESFJ는 인정받고 사랑받는다고 느끼면 헌신적으로 사랑해요."
  },

  // ESFJ × 썸
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_signals",
    q: "ESFJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ESFJ는 적극적으로 관심을 보여요. 자주 연락하고, 챙겨주며, 함께 시간을 보내려고 노력합니다. ESFJ가 특별하게 대해주고 배려하는 모습을 보이면 호감이 있는 거예요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_signals",
    q: "ESFJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "ESFJ는 관심 없으면 친절하지만 선을 그어요. 예의 바르게 대하지만 개인적인 관심은 보이지 않고, 깊은 대화나 특별한 배려는 하지 않습니다."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_contact",
    q: "ESFJ는 썸 단계에서 먼저 연락하나요?",
    a: "ESFJ는 적극적으로 먼저 연락해요. 안부를 묻고, 재미있는 것을 공유하며, 만남을 제안합니다. ESFJ의 주도적이고 따뜻한 연락은 호감의 확실한 신호예요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_contact",
    q: "ESFJ와 썸 탈 때 효과적인 대화법은?",
    a: "ESFJ는 진심 어린 대화를 좋아해요. 감정을 솔직하게 나누고, ESFJ의 생각을 존중하며, 긍정적이고 따뜻한 대화를 하세요. ESFJ는 진심과 배려가 느껴지는 대화를 좋아해요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_confession",
    q: "ESFJ는 언제 고백하나요?",
    a: "ESFJ는 관계가 무르익었다고 느끼면 고백해요. 상대방의 감정을 살피고, 적절한 타이밍을 기다렸다가 따뜻하게 고백합니다. ESFJ의 고백은 진심 어리고 정성스러워요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_confession",
    q: "ESFJ의 마음을 확인하는 방법은?",
    a: "ESFJ에게 솔직하게 물어보세요. ESFJ는 진심 어린 질문에 솔직하게 답하는 편이에요. 다만 상대방을 배려하는 마음에 조심스럽게 표현할 수 있으니 잘 들어보세요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_dating",
    q: "ESFJ와 첫 데이트는 어디가 좋을까요?",
    a: "ESFJ는 함께 즐길 수 있는 장소를 좋아해요. 분위기 좋은 맛집, 카페, 공원처럼 대화하기 좋고 편안한 곳이 좋습니다. ESFJ는 상대방이 즐거워하는 모습을 보는 걸 좋아해요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_dating",
    q: "ESFJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ESFJ는 자주 만나고 싶어 하는 편이에요. 관계를 발전시키기 위해 적극적으로 시간을 내고, 함께 다양한 활동을 하려고 합니다. ESFJ와는 자연스럽게 자주 만나게 될 거예요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_tips",
    q: "ESFJ를 꼬시는 효과적인 방법은?",
    a: "ESFJ는 따뜻하고 배려심 있는 사람에게 끌려요. 진심을 보여주고, ESFJ의 노력을 알아주며, 긍정적이고 사교적인 모습을 보이세요. 또한 함께 성장하고 발전할 수 있는 사람이라는 걸 보여주면 효과적이에요."
  },
  {
    mbti: "ESFJ",
    category: "crush",
    topic: "crush_tips",
    q: "ESFJ가 싫어하는 행동은?",
    a: "ESFJ는 이기적이고 배려심 없는 행동을 싫어해요. ESFJ의 노력을 당연하게 여기거나, 부정적이고 비판적인 태도, 진심 없는 행동은 ESFJ를 실망시킵니다."
  },

  // ESFJ × 결혼
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ESFJ의 결혼관은 어떤가요?",
    a: "ESFJ는 결혼을 평생의 헌신으로 생각해요. 따뜻하고 안정적인 가정을 꾸리는 걸 중요하게 여기며, 가족을 위해 헌신하는 걸 가치 있게 생각합니다. ESFJ에게 결혼은 사랑과 책임의 약속이에요."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ESFJ가 배우자로 원하는 사람은?",
    a: "ESFJ는 따뜻하고 성실하며, 가정을 소중히 여기는 사람을 원해요. ESFJ의 노력을 인정하고, 함께 안정적인 가정을 만들며, 서로를 지지하는 파트너를 찾습니다."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESFJ는 집안일을 어떻게 하나요?",
    a: "ESFJ는 성실하고 꼼꼼하게 집안일을 해요. 가족을 위해 헌신하고, 집을 편안하고 따뜻하게 만들려고 노력합니다. 다만 모든 걸 혼자 하려다 지칠 수 있으니 파트너의 협력이 중요해요."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ESFJ의 경제관은?",
    a: "ESFJ는 가족의 안정과 행복을 위해 경제 관리를 해요. 계획적으로 저축하고, 필요한 곳에 투자하며, 가족의 미래를 생각합니다. 다만 다른 사람을 위해 쓰는 돈도 많을 수 있어요."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESFJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ESFJ는 대화로 빨리 해결하고 싶어 해요. 진심으로 사과하고, 감정을 나누며, 관계 개선을 위해 노력하는 모습을 보이세요. ESFJ는 진심을 느끼면 빨리 용서하고 화해하려고 해요."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ESFJ는 부부 대화를 어떻게 하나요?",
    a: "ESFJ는 열린 대화를 중시해요. 정기적으로 감정을 나누고, 서로의 생각을 공유하며, 관계를 발전시키려고 노력합니다. ESFJ와는 솔직하고 따뜻한 대화가 관계의 핵심이에요."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ESFJ의 육아 스타일은?",
    a: "ESFJ는 헌신적이고 따뜻한 부모예요. 아이의 감정을 세심하게 살피고, 격려하며, 아이가 잘 성장하도록 돕습니다. 가족의 조화와 아이의 행복을 최우선으로 생각해요."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ESFJ는 자녀 교육을 어떻게 생각하나요?",
    a: "ESFJ는 아이의 전인적 성장을 중시해요. 학업뿐 아니라 정서적, 사회적 발달을 중요하게 여기며, 아이가 건강하고 행복하게 성장하도록 지원합니다."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ESFJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ESFJ는 조화로운 가족 관계를 위해 노력해요. 사람들과 잘 어울리고, 배려심 있게 대하며, 가족 간의 갈등을 중재하려고 합니다. 다만 과도하게 신경 쓰다가 지칠 수 있어요."
  },
  {
    mbti: "ESFJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ESFJ와 명절을 보내려면?",
    a: "ESFJ는 명절에 가족을 위해 많이 노력해요. 모든 걸 챙기려다 지칠 수 있으니, 파트너가 함께 분담하고 ESFJ를 배려하는 게 중요합니다. ESFJ의 노고를 인정하고 감사를 표현하세요."
  },

  // ENTP × 연애
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_affection",
    q: "ENTP는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ENTP는 창의적이고 재미있게 애정을 표현해요. 지적인 대화, 놀리기, 독특한 이벤트로 사랑을 보여주며, 상대방을 즐겁게 만들려고 노력합니다. ENTP의 사랑은 흥미롭고 예측 불가능해요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_affection",
    q: "ENTP는 스킨십을 어떻게 생각하나요?",
    a: "ENTP는 스킨십을 자연스럽게 받아들이지만 강요되는 건 싫어해요. 분위기에 따라 즉흥적으로 스킨십을 하며, 형식적이거나 뻔한 스킨십보다 자연스러운 접촉을 선호합니다."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_contact",
    q: "ENTP는 연락을 자주 하는 편인가요?",
    a: "ENTP는 연락 빈도가 일정하지 않아요. 흥미로운 주제가 있으면 적극적으로 연락하지만, 다른 일에 집중하면 연락을 잊어버리기도 합니다. ENTP는 연락보다 만나서 대화하는 걸 선호해요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_contact",
    q: "ENTP와 대화할 때 주의할 점은?",
    a: "ENTP는 지적이고 재미있는 대화를 좋아해요. 논쟁을 즐기고, 새로운 아이디어를 탐구하며, 창의적인 주제를 선호합니다. 뻔하거나 지루한 대화는 금방 흥미를 잃으니 자극적인 대화를 하세요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_conflict",
    q: "ENTP와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ENTP는 논리적으로 문제를 해결하려고 해요. 감정보다 사실에 기반해서 대화하고, 논쟁을 즐기더라도 결국 해결책을 찾으려고 합니다. 감정적으로 몰아붙이면 ENTP는 방어적이 될 수 있어요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_conflict",
    q: "ENTP는 갈등 상황에서 어떻게 반응하나요?",
    a: "ENTP는 갈등을 논쟁의 기회로 볼 수 있어요. 문제를 분석하고 여러 각도에서 접근하지만, 때로는 논쟁 자체를 즐기는 것처럼 보일 수 있습니다. ENTP는 감정보다 논리를 중시하는 편이에요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENTP는 어떤 데이트를 좋아하나요?",
    a: "ENTP는 새롭고 창의적인 데이트를 좋아해요. 토론카페, 전시회, 새로운 장소 탐험처럼 지적 자극을 받을 수 있는 활동을 선호합니다. 루틴적이거나 뻔한 데이트는 지루해해요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENTP는 일상에서 어떤 연인인가요?",
    a: "ENTP는 재미있고 자극적인 연인이에요. 매일 새로운 아이디어를 내고, 상대방을 놀리며, 관계를 흥미롭게 만들려고 노력합니다. 루틴보다 변화를 선호하고, 독립성을 중시해요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_breakup",
    q: "ENTP의 이별 징조는 무엇인가요?",
    a: "ENTP는 관계가 지적으로 자극이 없어지면 이별을 생각해요. 대화가 지루해지고, 새로운 것에 관심을 돌리며, 점점 거리를 두기 시작합니다. ENTP가 관심을 잃으면 관계 회복이 어려워요."
  },
  {
    mbti: "ENTP",
    category: "dating",
    topic: "dating_breakup",
    q: "ENTP와 오래 연애하는 비결은?",
    a: "ENTP와는 항상 지적 자극을 주고받는 게 중요해요. 함께 새로운 것을 탐구하고, ENTP의 독립성을 존중하며, 관계를 흥미롭게 유지하세요. 루틴에 빠지지 않고 관계를 신선하게 만들면 오래갈 수 있어요."
  },

  // ENTP × 썸
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_signals",
    q: "ENTP는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ENTP는 장난스럽고 지적으로 신호를 보내요. 상대방을 놀리고, 깊은 대화를 시도하며, 재미있는 논쟁을 즐깁니다. ENTP가 시간을 내서 대화하고 관심을 보이면 호감이 있는 거예요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_signals",
    q: "ENTP가 관심 없을 때는 어떻게 행동하나요?",
    a: "ENTP는 관심 없으면 시간을 쓰지 않아요. 대화를 짧게 끝내고, 개인적인 관심을 보이지 않으며, 다른 것에 에너지를 쏟습니다. ENTP의 지적 호기심이 느껴지지 않으면 관심이 없는 거예요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_contact",
    q: "ENTP는 썸 단계에서 먼저 연락하나요?",
    a: "ENTP는 흥미로운 주제가 있으면 먼저 연락해요. 재미있는 아이디어를 공유하거나, 논쟁을 시작하며, 지적인 대화로 다가갑니다. ENTP의 주도적인 대화 시도는 호감의 신호예요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_contact",
    q: "ENTP와 썸 탈 때 효과적인 대화법은?",
    a: "ENTP는 지적이고 창의적인 대화를 좋아해요. 논쟁을 두려워하지 말고, 새로운 아이디어를 제시하며, ENTP의 생각에 도전하세요. 뻔하거나 감정적인 대화보다 자극적인 대화가 효과적이에요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_confession",
    q: "ENTP는 언제 고백하나요?",
    a: "ENTP는 고백을 즉흥적으로 하거나 오래 미루는 양극단이에요. 분위기가 좋으면 바로 고백하기도 하고, 관계를 분석하다가 타이밍을 놓치기도 합니다. ENTP의 고백은 예측하기 어려워요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_confession",
    q: "ENTP의 마음을 확인하는 방법은?",
    a: "ENTP에게 직접 물어보세요. 돌려 말하거나 눈치 게임을 하면 ENTP는 재미있어하거나 놓칠 수 있어요. 솔직하고 직접적으로 물어보면 ENTP도 논리적으로 답해줄 거예요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_dating",
    q: "ENTP와 첫 데이트는 어디가 좋을까요?",
    a: "ENTP는 독특하고 재미있는 장소를 좋아해요. 토론카페, 방탈출, 새로운 전시회처럼 지적 자극을 받을 수 있는 곳이 좋습니다. 뻔한 카페 데이트보다 창의적인 활동이 ENTP를 매력적으로 만들어요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_dating",
    q: "ENTP는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ENTP는 흥미로우면 자주 만나려고 하지만, 다른 일에 집중하면 만남을 미루기도 해요. 만남의 빈도보다 질적으로 흥미로운 시간을 보내는 게 ENTP에게 중요해요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_tips",
    q: "ENTP를 꼬시는 효과적인 방법은?",
    a: "ENTP는 지적이고 독립적인 사람에게 끌려요. 논쟁을 두려워하지 않고, 새로운 아이디어를 가지고 있으며, ENTP의 생각에 도전할 수 있는 모습을 보이세요. 또한 유머와 창의성을 겸비하면 효과적이에요."
  },
  {
    mbti: "ENTP",
    category: "crush",
    topic: "crush_tips",
    q: "ENTP가 싫어하는 행동은?",
    a: "ENTP는 지루하고 뻔한 사람을 싫어해요. 논리 없는 주장, 감정적인 집착, 변화를 거부하는 태도는 ENTP를 답답하게 만듭니다. 또한 독립성을 침해하거나 루틴에 가두려는 행동도 싫어해요."
  },

  // ENTP × 결혼
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_values",
    q: "ENTP의 결혼관은 어떤가요?",
    a: "ENTP는 결혼을 자유롭고 지적인 동반자 관계로 생각해요. 서로의 독립성을 존중하고, 함께 성장하며, 지적 자극을 주고받는 걸 중요하게 봅니다. ENTP에게 결혼은 함께하는 지적 모험이에요."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_values",
    q: "ENTP가 배우자로 원하는 사람은?",
    a: "ENTP는 지적이고 독립적이며, 논쟁을 즐길 수 있는 사람을 원해요. 자기주장이 뚜렷하고, 새로운 아이디어에 열려있으며, ENTP의 자유를 존중하는 파트너를 찾습니다."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENTP는 집안일을 어떻게 하나요?",
    a: "ENTP는 집안일을 창의적으로 해결하려고 하지만, 루틴을 싫어해서 미루는 경우가 많아요. 효율적인 방법을 찾거나, 최소한으로 유지하려는 경향이 있습니다."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENTP의 경제관은?",
    a: "ENTP는 경제 관리에 체계적이지 않을 수 있어요. 새로운 아이디어나 경험에 투자하며, 장기적인 저축보다 즉각적인 흥미를 우선시할 수 있습니다. 파트너와 함께 계획을 세우면 도움이 돼요."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENTP 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ENTP는 논리적으로 문제를 해결하려고 해요. 감정보다 사실에 기반해서 대화하고, 논쟁을 두려워하지 마세요. 다만 논쟁 자체가 목적이 되지 않도록 해결책에 집중하는 게 중요해요."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENTP는 부부 대화를 어떻게 하나요?",
    a: "ENTP는 지적이고 자극적인 대화를 선호해요. 다양한 주제로 논쟁하고, 새로운 아이디어를 탐구하며, 깊이 있는 대화를 즐깁니다. 일상적인 감정 공유보다 흥미로운 주제 토론을 좋아해요."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_children",
    q: "ENTP의 육아 스타일은?",
    a: "ENTP는 창의적이고 자유로운 육아를 해요. 아이의 호기심을 자극하고, 질문을 장려하며, 논리적 사고를 키워줍니다. 규칙보다 탐구를 중시하고, 아이와 토론하는 걸 즐기는 편이에요."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_children",
    q: "ENTP는 자녀 교육을 어떻게 생각하나요?",
    a: "ENTP는 아이의 창의성과 독립적 사고를 중시해요. 주입식 교육보다 스스로 탐구하고 질문하도록 유도하며, 다양한 관점을 접하게 합니다. 논리적 사고와 비판적 사고를 키우는 걸 중요하게 생각해요."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_family",
    q: "ENTP는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ENTP는 가족 모임을 부담스러워할 수 있어요. 형식적인 절차나 루틴을 싫어하고, 자유롭게 대화하는 걸 선호합니다. 너무 규칙이 많거나 전통을 강요하면 답답해할 수 있어요."
  },
  {
    mbti: "ENTP",
    category: "marriage",
    topic: "marriage_family",
    q: "ENTP와 명절을 보내려면?",
    a: "ENTP는 명절을 간단하게 보내고 싶어 해요. 형식적인 절차를 최소화하고, 흥미로운 대화나 활동을 포함하세요. 너무 오래 앉아서 형식만 지키는 건 ENTP를 지루하게 만들어요."
  },

  // ENTJ × 연애
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_affection",
    q: "ENTJ는 연애에서 애정 표현을 어떻게 하는 편인가요?",
    a: "ENTJ는 직접적이고 목표 지향적으로 애정을 표현해요. 미래를 함께 계획하고, 실질적으로 도와주며, 파트너의 성장을 지원하는 방식으로 사랑을 보여줍니다. ENTJ의 사랑은 강렬하고 헌신적이에요."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_affection",
    q: "ENTJ는 스킨십을 어떻게 생각하나요?",
    a: "ENTJ는 스킨십을 자연스럽게 받아들이지만 강요되는 건 싫어해요. 의미 있는 스킨십을 선호하며, 과하거나 형식적인 스킨십보다 진심이 담긴 접촉을 중요하게 생각합니다."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_contact",
    q: "ENTJ는 연락을 자주 하는 편인가요?",
    a: "ENTJ는 필요한 연락은 효율적으로 하는 편이에요. 목적 있는 대화나 계획을 위한 연락을 하며, 불필요한 잡담은 하지 않습니다. ENTJ의 연락은 간결하고 명확해요."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_contact",
    q: "ENTJ와 대화할 때 주의할 점은?",
    a: "ENTJ는 효율적이고 논리적인 대화를 선호해요. 핵심을 명확하게 전달하고, 구조화된 사고를 보여주세요. 장황하거나 감정적인 대화보다 목적과 결론이 있는 대화를 좋아합니다."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ENTJ와 싸웠을 때 어떻게 풀어야 하나요?",
    a: "ENTJ는 문제를 직접적으로 해결하려고 해요. 감정보다 해결책에 집중하고, 논리적으로 접근하세요. ENTJ와는 문제의 원인과 앞으로의 개선 방안을 명확히 논의하는 게 효과적이에요."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_conflict",
    q: "ENTJ는 갈등 상황에서 어떻게 반응하나요?",
    a: "ENTJ는 갈등을 시스템 오류처럼 접근해요. 문제를 분석하고, 효율적인 해결책을 제시하며, 재발 방지를 위한 개선을 추구합니다. 감정보다 효율성을 우선시하기 때문에 차갑게 느껴질 수 있어요."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENTJ는 어떤 데이트를 좋아하나요?",
    a: "ENTJ는 목적이 있는 데이트를 선호해요. 새로운 것을 배우거나 경험할 수 있는 활동, 목표 달성을 함께하는 시간을 좋아합니다. 계획 없이 즉흥적인 데이트는 비효율적으로 느낄 수 있어요."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_lifestyle",
    q: "ENTJ는 일상에서 어떤 연인인가요?",
    a: "ENTJ는 목표 지향적이고 효율적인 연인이에요. 파트너의 성장을 지원하고, 함께 목표를 달성하며, 미래를 계획하는 걸 중요하게 생각합니다. 독립성을 중시하고, 각자의 발전을 격려해요."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ENTJ의 이별 징조는 무엇인가요?",
    a: "ENTJ는 관계에 미래가 없다고 판단하면 이별을 생각해요. 냉정하게 분석하고, 점점 거리를 두며, 관계에 투자하는 시간을 줄입니다. ENTJ는 결정을 내리면 번복하지 않는 편이에요."
  },
  {
    mbti: "ENTJ",
    category: "dating",
    topic: "dating_breakup",
    q: "ENTJ와 오래 연애하는 비결은?",
    a: "ENTJ와는 함께 성장하고 발전하는 게 중요해요. 지적 교감을 유지하고, 상호 존중하며, 공동의 목표를 향해 나아가세요. ENTJ는 가치 있는 관계라고 생각하면 헌신적으로 사랑해요."
  },

  // ENTJ × 썸
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_signals",
    q: "ENTJ는 썸에서 호감 신호를 어떻게 보내나요?",
    a: "ENTJ는 직접적이고 효율적으로 신호를 보내요. 시간을 할애하고, 깊은 대화를 시도하며, 미래에 대한 얘기를 꺼냅니다. ENTJ가 개인적인 목표나 계획을 공유하면 호감이 있는 거예요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_signals",
    q: "ENTJ가 관심 없을 때는 어떻게 행동하나요?",
    a: "ENTJ는 관심 없으면 시간을 할애하지 않아요. 최소한의 예의만 지키고, 개인적인 대화를 피하며, 비즈니스처럼 간단하게 대합니다. ENTJ의 시간 투자가 없으면 관심이 없는 거예요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_contact",
    q: "ENTJ는 썸 단계에서 먼저 연락하나요?",
    a: "ENTJ는 관심 있으면 전략적으로 먼저 연락해요. 목적 있는 대화나 만남 제안을 하며, 직접적으로 관계를 진전시킵니다. ENTJ의 주도적인 모습은 호감의 확실한 신호예요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_contact",
    q: "ENTJ와 썸 탈 때 효과적인 대화법은?",
    a: "ENTJ는 지적이고 목표 지향적인 대화를 좋아해요. 명확하게 의사를 전달하고, 미래나 목표에 대해 얘기하며, ENTJ의 야망을 이해하고 지지하세요. 논리적이고 구조화된 사고를 보여주는 게 효과적이에요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_confession",
    q: "ENTJ는 언제 고백하나요?",
    a: "ENTJ는 확신이 들면 직접적으로 고백해요. 관계의 가능성을 분석하고, 적절한 타이밍에 명확하게 의사를 전달합니다. ENTJ의 고백은 진지하고 목표 지향적이에요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_confession",
    q: "ENTJ의 마음을 확인하는 방법은?",
    a: "ENTJ에게 직접 물어보세요. 돌려 말하거나 눈치 게임을 하면 ENTJ는 알아채지 못하거나 비효율적으로 생각할 수 있어요. 명확하게 물어보면 ENTJ도 솔직하고 직접적으로 답해줄 거예요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_dating",
    q: "ENTJ와 첫 데이트는 어디가 좋을까요?",
    a: "ENTJ는 의미 있고 목적 있는 장소를 좋아해요. 미술관, 세미나, 새로운 경험을 할 수 있는 곳처럼 배우거나 성장할 수 있는 데이트가 좋습니다. 계획된 데이트를 편안하게 느껴요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_dating",
    q: "ENTJ는 썸 단계에서 얼마나 자주 만나나요?",
    a: "ENTJ는 효율적으로 만나는 걸 선호해요. 질 높은 시간을 보내는 걸 중시하며, 너무 자주 만나면 개인 시간이 부족해서 부담스러워할 수 있습니다."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_tips",
    q: "ENTJ를 꼬시는 효과적인 방법은?",
    a: "ENTJ는 지적이고 야망 있는 사람에게 끌려요. 자기주관이 뚜렷하고, 목표 지향적이며, ENTJ의 비전을 이해하고 지지할 수 있는 모습을 보이세요. 또한 효율적이고 논리적인 사고를 보여주면 효과적이에요."
  },
  {
    mbti: "ENTJ",
    category: "crush",
    topic: "crush_tips",
    q: "ENTJ가 싫어하는 행동은?",
    a: "ENTJ는 비효율적이고 우유부단한 행동을 싫어해요. 논리 없는 주장, 감정적인 집착, 목표 없이 사는 태도는 ENTJ를 답답하게 만듭니다. 또한 독립성을 침해하거나 성장을 방해하는 행동도 싫어해요."
  },

  // ENTJ × 결혼
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ENTJ의 결혼관은 어떤가요?",
    a: "ENTJ는 결혼을 전략적 파트너십으로 생각해요. 함께 목표를 달성하고, 서로를 지지하며, 효율적으로 역할을 분담하는 걸 중요하게 봅니다. ENTJ에게 결혼은 함께 성장하는 장기 프로젝트예요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_values",
    q: "ENTJ가 배우자로 원하는 사람은?",
    a: "ENTJ는 독립적이고 야망 있으며, 함께 성장할 수 있는 사람을 원해요. 지적이고 효율적이며, ENTJ의 목표를 이해하고 지지하는 파트너를 찾습니다. 의존적이거나 수동적인 사람은 맞지 않아요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENTJ는 집안일을 어떻게 하나요?",
    a: "ENTJ는 효율적인 시스템을 만들어 집안일을 처리해요. 역할을 명확히 분담하고, 루틴을 정하며, 최적화된 방식으로 관리합니다. 계획적이고 체계적으로 접근하는 편이에요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_lifestyle",
    q: "ENTJ의 경제관은?",
    a: "ENTJ는 전략적으로 재무를 관리해요. 장기적인 투자와 자산 증식을 중시하며, 목표 달성을 위해 돈을 효율적으로 사용합니다. 재테크에 관심이 많고 체계적으로 접근해요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENTJ 배우자와 싸웠을 때 어떻게 해야 하나요?",
    a: "ENTJ는 문제 해결 중심으로 접근해요. 감정보다 해결책에 집중하고, 논리적으로 대화하세요. 감정적으로 몰아붙이면 ENTJ는 더 냉정해질 수 있으니 차분하게 접근하는 게 중요합니다."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_conflict",
    q: "ENTJ는 부부 대화를 어떻게 하나요?",
    a: "ENTJ는 효율적이고 목적 있는 대화를 선호해요. 미래 계획, 목표, 중요한 결정에 대해 명확하게 논의하며, 핵심적인 의사소통을 중시합니다. 불필요한 감정 표현보다 문제 해결 중심 대화를 좋아해요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ENTJ의 육아 스타일은?",
    a: "ENTJ는 목표 지향적이고 체계적인 육아를 해요. 아이의 리더십과 독립성을 키우며, 논리적 사고와 목표 달성 능력을 중시합니다. 규칙을 명확히 정하고, 아이가 성공할 수 있도록 준비시켜요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_children",
    q: "ENTJ는 자녀 교육을 어떻게 생각하나요?",
    a: "ENTJ는 장기적 관점에서 자녀 교육을 계획해요. 아이의 재능을 파악해서 전략적으로 개발하며, 리더십과 문제 해결 능력을 키우는 걸 중시합니다. 목표 지향적이고 효율적인 교육을 선호해요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ENTJ는 시댁/처가 관계를 어떻게 대하나요?",
    a: "ENTJ는 가족 관계도 효율적으로 관리하려고 해요. 불필요한 갈등을 피하고, 명확한 경계를 설정하며, 실용적으로 접근합니다. 가족 모임보다 개인 시간을 더 중요하게 생각할 수 있어요."
  },
  {
    mbti: "ENTJ",
    category: "marriage",
    topic: "marriage_family",
    q: "ENTJ와 명절을 보내려면?",
    a: "ENTJ는 명절을 효율적으로 보내고 싶어 해요. 계획을 미리 세우고, ENTJ의 역할을 명확히 정해주세요. 또한 개인 시간을 보장하고, 불필요한 행사는 최소화하는 게 ENTJ를 배려하는 방법이에요."
  },
];

export function getFaqsByMbtiCategoryTopic(
  mbti: string,
  category: "crush" | "dating" | "marriage",
  topic: FaqTopicKey
): FaqItem[] {
  return FAQ_DATABASE.filter(
    (f) => f.mbti === mbti && f.category === category && f.topic === topic
  );
}

export function getFaqsByMbtiCategory(
  mbti: string,
  category: "crush" | "dating" | "marriage"
): FaqItem[] {
  return FAQ_DATABASE.filter((f) => f.mbti === mbti && f.category === category);
}