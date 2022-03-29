import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/Hero/Hero";

it("hero", () => {
  render(<Hero />);
  const nodeElement = screen.getByPlaceholderText("Have questions?");
  expect(nodeElement).toBeInTheDocument();
});
