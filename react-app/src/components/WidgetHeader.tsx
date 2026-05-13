import type { WidgetHeaderProps } from "../types/WidgetHeader";

export function WidgetHeader({ onClose }: WidgetHeaderProps) {
  return (
    <header className="widget__header">
      <div>
        <strong>BonifiQ</strong>
        <span>Posts do usuário</span>
      </div>

      <button onClick={onClose} aria-label="Fechar widget">
        ×
      </button>
    </header>
  );
}
