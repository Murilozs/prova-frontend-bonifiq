import { render, screen } from "@testing-library/react";
import { UserCard } from "../../components/Widget/UserCard";

describe("UserCard", () => {
  it("Deve renderizar nome e e-mail do usuário", () => {
    render(
      <UserCard
        user={{
          id: 1,
          name: "Murilo Zanin",
          email: "murilo@email.com",
        }}
      />,
    );

    expect(screen.getByText("Murilo Zanin")).toBeInTheDocument();
    expect(screen.getByText("murilo@email.com")).toBeInTheDocument();
  });
});
