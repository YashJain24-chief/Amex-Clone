import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/About/About";

it("hero", () => {
  render(<Hero />);
  const nodeElement = screen.getByText(/American Express GBT Solutions/i);
  expect(nodeElement.textContent).toBe("American Express GBT Solutions");
});
