/**
 * Componente responsável por exibir
 * o estado de carregamento da aplicação.
 *
 * Exibe um indicador visual (spinner)
 * e uma mensagem de carregamento.
 */
export function Loader() {
  return (
    <div className="loader-container">
      <div className="loader" />
      <p>Carregando dados...</p>
    </div>
  );
}
