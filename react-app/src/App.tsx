import { useEffect, useState } from "react";
import "./App.css";
import { Feedback } from "./components/Feedback";
import { PostCard } from "./components/PostCard";
import { UserCard } from "./components/UserCard";
import { WidgetHeader } from "./components/WidgetHeader";
import { getPostsByUserId, getUserById } from "./services/api";
import type { Post, User } from "./types";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const closeWidget = () => {
    window.parent.postMessage({ type: "BONIFIQ_CLOSE_WIDGET" }, "*");
  };

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.data?.type !== "BONIFIQ_LOGGED_USER_ID") return;

      const userId = Number(event.data.payload);

      if (!userId) {
        setError("ID do usuário inválido ou não informado.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const [userData, postsData] = await Promise.all([
          getUserById(userId),
          getPostsByUserId(userId),
        ]);

        setUser(userData);
        setPosts(postsData);
      } catch {
        setError("Não foi possível carregar os dados do usuário.");
      } finally {
        setLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);
    window.parent.postMessage({ type: "BONIFIQ_GET_LOGGED_USER_ID" }, "*");

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <main className="widget">
      <WidgetHeader onClose={closeWidget} />

      <section className="widget__content">
        {loading && <Feedback message="Carregando dados..." />}

        {!loading && error && <Feedback message={error} type="error" />}

        {!loading && !error && user && (
          <>
            <UserCard user={user} />

            <div className="posts">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
