import { render, screen } from "@testing-library/react";
import { PostCard } from "../../components/Widget/PostCard";

describe("PostCard", () => {
  it("Deve renderizar título e conteúdo do post", () => {
    render(
      <PostCard
        post={{
          id: 1,
          title: "Meu post",
          body: "Conteúdo do post",
        }}
      />,
    );

    expect(screen.getByText("Meu post")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo do post")).toBeInTheDocument();
  });
});
