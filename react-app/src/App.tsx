import { useEffect, useState } from "react";
import "./App.css";

import { getPostsByUserId, getUserById } from "./services/api";
import type { Post, User } from "./types";
import { Feedback } from "./components/Widget/Feedback";
import { PostCard } from "./components/Widget/PostCard";
import { UserCard } from "./components/Widget/UserCard";
import { WidgetHeader } from "./components/Widget/WidgetHeader";
import { Loader } from "./components/Widget/Loader";

/**
 * Componente principal da aplicação exibida dentro do iframe.
 *
 * Responsabilidades:
 * - Solicitar o loggedUserId para a página principal via postMessage
 * - Receber o ID do usuário logado
 * - Buscar dados do usuário e seus posts na API
 * - Controlar estados de loading, erro e sucesso
 * - Renderizar o conteúdo principal do widget
 */
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /**
   * Envia uma mensagem para a página principal solicitando
   * o fechamento do iframe/widget.
   */
  const closeWidget = () => {
    window.parent.postMessage({ type: "BONIFIQ_CLOSE_WIDGET" }, "*");
  };

  /**
   * Registra o listener responsável por receber o ID do usuário logado
   * enviado pela página principal.
   *
   * Após receber o ID, realiza as chamadas para buscar:
   * - dados do usuário
   * - posts do usuário
   */
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
        {loading && <Loader />}

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
