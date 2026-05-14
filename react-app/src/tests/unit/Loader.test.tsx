import { render, screen } from "@testing-library/react";
import { Loader } from "../../components/Widget/Loader";

describe("Loader", () => {
  it("deve renderizar mensagem de carregamento", () => {
    render(<Loader />);

    expect(screen.getByText("Carregando dados...")).toBeInTheDocument();
  });
});
