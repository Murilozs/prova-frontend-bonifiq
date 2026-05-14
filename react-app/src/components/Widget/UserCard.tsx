import type { UserCardProps } from "../../types/UserCard";

/**
 * Componente responsável por exibir
 * as informações do usuário logado.
 *
 * Exibe:
 * - Nome
 * - E-mail
 */
export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h1>{user.name}</h1>
      <span>{user.email}</span>
    </div>
  );
}
