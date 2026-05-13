import type { PostCardProps } from "../types/PostCard";

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}
