import type { UserCardProps } from "../../types/UserCard";

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h1>{user.name}</h1>
      <span>{user.email}</span>
    </div>
  );
}
