import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LangSwitcher } from "./LangSwitcher";

describe("LangSwitcher", () => {
  beforeEach(() => {
    render(<LangSwitcher />);
  });

  it("title LangSwitcher is shown", () => {
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("LangSwitcher");
  });
});
