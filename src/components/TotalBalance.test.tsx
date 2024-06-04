import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { TotalBalance } from "./TotalBalance";
import { BalanceProvider } from "../context/BalanceProvider";

describe("TotalBalance", () => {
  beforeEach(() => {
    render(
      <BalanceProvider>
        <TotalBalance />
      </BalanceProvider>
    );
  });

  it("should render", () => {
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
