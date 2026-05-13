import type { FeedbackProps } from "../types/Feedback";

export function Feedback({ message, type = "default" }: FeedbackProps) {
  return (
    <p className={`feedback ${type === "error" ? "error" : ""}`}>{message}</p>
  );
}
