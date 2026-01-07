export type SurveyQuestionId =
  | "organize"
  | "reason"
  | "context"
  | "reuse_reason"
  | "one_line";

export type SurveyQuestion =
  | {
      id: SurveyQuestionId;
      type: "single";
      question: string;
      options: string[];
    }
  | {
      id: SurveyQuestionId;
      type: "text";
      question: string;
      optional?: boolean;
      maxLength?: number;
      placeholder?: string;
    }
  | {
      type: "done";
      title: string;
      desc?: string;
      autoCloseMs?: number;
    };

export type SurveyContent = {
  title: string;
  subtitle?: string;
  footer?: string;
  questions: SurveyQuestion[];
};

// 폴백용 기본 데이터 (백엔드 실패 시) - 데이터가 서버에 들어가진 않는다.(설문용 insert 필요.)
export const fallbackSurveyContent: SurveyContent = {
  title: "간단한 피드백을 들려주세요",
  subtitle: "이 설문은 분석이나 평가가 아니라, 더 나은 '정리 경험'을 만들기 위한 참고 자료예요.",
  footer: "소중한 경험을 나눠주셔서 감사합니다 💕",
  questions: [
    {
      id: "organize",
      type: "single",
      question: "Q1. 이번 대화를 통해 내 감정이나 상황이 조금이라도 정리되었나요?",
      options: [
        "많이 정리되었어요",
        "어느 정도 정리되었어요",
        "잘 모르겠어요",
        "별로 정리되지 않았어요",
        "전혀 정리되지 않았어요",
      ],
    },
    {
      id: "reason",
      type: "single",
      question: "Q2. 그렇게 느끼게 된 가장 큰 이유는 무엇이었나요?",
      options: [
        "머릿속이 너무 복잡해서, 말로 정리할 필요가 있었어요",
        "판단이나 조언 없이 이야기할 수 있을 것 같아서",
        "내 생각을 기록으로 남기고 싶어서",
        "혼자서는 정리가 잘 안 됐어서",
        "잘 모르겠어요",
      ],
    },
    {
      id: "context",
      type: "single",
      question: "Q3. 이 서비스를 사용하게 되었을 당시, 당신의 상태에 가장 가까운 것은 무엇이었나요?",
      options: [
        "감정이 많이 흔들린 상태였어요",
        "중요한 결정을 앞두고 고민 중이었어요",
        "같은 문제를 반복해서 떠올리고 있었어요",
        "잠깐 정리할 시간이 필요했어요",
        "비교적 가벼운 궁금증이었어요",
      ],
    },
    {
      id: "reuse_reason",
      type: "single",
      question: "Q4. 비슷한 고민이 생긴다면, 이 서비스를 다시 사용해보고 싶은 이유는 무엇인가요?",
      options: [
        "혼자 생각하는 것보다 정리에 도움이 돼서",
        "기록을 다시 돌아볼 수 있을 것 같아서",
        "부담 없이 시작할 수 있어서",
        "상황에 따라 다를 것 같아요",
        "다시 사용하진 않을 것 같아요",
      ],
    },
    {
      id: "one_line",
      type: "text",
      question: "Q5. 한 문장으로 남기고 싶은 이유나 생각이 있다면 적어주세요.",
      placeholder: "예: 누군가 대신 판단해주는 느낌이 아니라서 좋았어요",
      maxLength: 120,
      optional: true,
    },
    {
      type: "done",
      title: "소중한 의견 감사합니다! 💗",
      desc: "당신의 피드백은 더 나은 정리 경험을 만드는 데 큰 도움이 됩니다.",
    },
  ],
};