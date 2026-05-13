import axios from "axios";
import type { Post, User } from "../types";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export async function getUserById(userId: number): Promise<User> {
  const { data } = await api.get<User>(`/users/${userId}`);

  if (!data?.id) {
    throw new Error("Usuário não encontrado.");
  }

  return data;
}

export async function getPostsByUserId(userId: number): Promise<Post[]> {
  const { data } = await api.get<Post[]>("/posts", {
    params: {
      userId,
    },
  });

  return data;
}
