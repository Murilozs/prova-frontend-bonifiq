import type { PostCardProps } from "../../types/PostCard";

/**
 * Componente responsável por exibir
 * as informações de um post do usuário.
 *
 * Exibe:
 * - Título do post
 * - Conteúdo do post
 */
export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}
