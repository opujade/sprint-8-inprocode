import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { MainInfo } from "./MainInfo";

describe("MainInfo", () => {
  beforeEach(() => {
    render(<MainInfo />);
  });

  it("MainInfo is shown", () => {
    const paragraphs = screen.queryAllByRole("paragraph");
    expect(paragraphs).toBeInTheDocument();
  });
});
