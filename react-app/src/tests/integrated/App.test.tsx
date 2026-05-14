import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";

import * as api from "../../services/api";

beforeEach(() => {
  vi.restoreAllMocks();

  vi.spyOn(window.parent, "postMessage").mockImplementation(() => {});
});

describe("App", () => {
  it("Deve buscar e exibir usuário e posts ao receber loggedUserId", async () => {
    vi.spyOn(api, "getUserById").mockResolvedValue({
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
    });

    vi.spyOn(api, "getPostsByUserId").mockResolvedValue([
      {
        id: 1,
        title: "Post teste",
        body: "Conteúdo teste",
      },
    ]);

    render(<App />);

    window.dispatchEvent(
      new MessageEvent("message", {
        data: {
          type: "BONIFIQ_LOGGED_USER_ID",
          payload: 2,
        },
      }),
    );

    await waitFor(() => {
      expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
      expect(screen.getByText("Shanna@melissa.tv")).toBeInTheDocument();
      expect(screen.getByText("Post teste")).toBeInTheDocument();
      expect(screen.getByText("Conteúdo teste")).toBeInTheDocument();
    });
  });

  it("Deve exibir erro quando o ID for inválido", async () => {
    render(<App />);

    window.dispatchEvent(
      new MessageEvent("message", {
        data: {
          type: "BONIFIQ_LOGGED_USER_ID",
          payload: null,
        },
      }),
    );

    expect(
      await screen.findByText("ID do usuário inválido ou não informado."),
    ).toBeInTheDocument();
  });
});
