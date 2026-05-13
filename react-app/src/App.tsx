import { useEffect, useState } from "react";
import "./App.css";

type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  body: string;
};

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

        const [userResponse, postsResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        ]);

        if (!userResponse.ok) {
          throw new Error("Usuário não encontrado.");
        }

        const userData = await userResponse.json();
        const postsData = await postsResponse.json();

        if (!userData?.id) {
          throw new Error("Usuário não encontrado.");
        }

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
      <header className="widget__header">
        <div>
          <strong>BonifiQ</strong>
          <span>Posts do usuário</span>
        </div>

        <button onClick={closeWidget} aria-label="Fechar widget">
          x
        </button>
      </header>

      <section className="widget__content">
        {loading && <p className="feedback">Carregando dados...</p>}

        {!loading && error && <p className="feedback error">{error}</p>}

        {!loading && !error && user && (
          <>
            <div className="user-card">
              <p>Usuário logado</p>
              <h1>{user.name}</h1>
              <span>{user.email}</span>
            </div>

            <div className="posts">
              {posts.map((post) => (
                <article key={post.id} className="post-card">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
