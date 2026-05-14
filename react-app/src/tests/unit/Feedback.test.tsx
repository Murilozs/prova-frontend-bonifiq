import { render, screen } from "@testing-library/react";
import { Feedback } from "../../components/Widget/Feedback";

describe("Feedback", () => {
  it("deve renderizar a mensagem informada", () => {
    render(<Feedback message="Mensagem de teste" />);

    expect(screen.getByText("Mensagem de teste")).toBeInTheDocument();
  });

  it("deve aplicar classe de erro quando type for error", () => {
    render(<Feedback message="Erro ao carregar" type="error" />);

    expect(screen.getByText("Erro ao carregar")).toHaveClass("error");
  });
});
