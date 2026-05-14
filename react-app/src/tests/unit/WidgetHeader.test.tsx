import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WidgetHeader } from "../../components/Widget/WidgetHeader";

describe("WidgetHeader", () => {
  it("Deve renderizar título e subtítulo", () => {
    render(<WidgetHeader onClose={vi.fn()} />);

    expect(screen.getByText("BonifiQ")).toBeInTheDocument();
    expect(screen.getByText("Posts do usuário")).toBeInTheDocument();
  });

  it("Deve chamar onClose ao clicar no botão de fechar", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(<WidgetHeader onClose={onClose} />);

    await user.click(screen.getByRole("button", { name: /fechar widget/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
