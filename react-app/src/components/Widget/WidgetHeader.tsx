import type { WidgetHeaderProps } from "../../types/WidgetHeader";
import bonifiqIcon from "../../../public/faviconBonifiq.png";
/**
 * Componente responsável pelo cabeçalho do widget.
 *
 * Exibe:
 * - Logo da BonifiQ
 * - Título e subtítulo do widget
 * - Botão de fechar
 *
 * @param onClose Função executada ao clicar no botão de fechar
 */
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
