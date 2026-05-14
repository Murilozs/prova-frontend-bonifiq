import type { WidgetHeaderProps } from "../../types/WidgetHeader";
import bonifiqIcon from "../../../public/faviconBonifiq.png";

export function WidgetHeader({ onClose }: WidgetHeaderProps) {
  return (
    <header className="widget__header">
      <div className="widget__brand">
        <img src={bonifiqIcon} alt="BonifiQ" />

        <div>
          <strong>BonifiQ</strong>
          <span>Posts do usuário</span>
        </div>
      </div>

      <button onClick={onClose} aria-label="Fechar widget">
        ×
      </button>
    </header>
  );
}
