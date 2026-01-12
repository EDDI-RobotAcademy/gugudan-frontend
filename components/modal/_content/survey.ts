export type SurveyQuestionId =
  | "organize"
  | "reason"
  | "context"
  | "reuse_reason"
  | "one_line"
  | "email";

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
      id: SurveyQuestionId;
      type: "email";
      question: string;
      optional?: boolean;
      placeholder?: string;
      helperText?: string;
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