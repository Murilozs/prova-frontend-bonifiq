import type { FeedbackProps } from "../../types/Feedback";

/**
 * Componente responsável por exibir
 * mensagens de feedback para o usuário.
 *
 * Tipos suportados:
 * - default
 * - error
 */
export function Feedback({ message, type = "default" }: FeedbackProps) {
  return (
    <p className={`feedback ${type === "error" ? "error" : ""}`}>{message}</p>
  );
}
