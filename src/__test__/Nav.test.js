import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopNav from "../components/Nav/TopNav";
import MidNav from "../components/Nav/MidNav";
import Dropdown from "../components/Nav/Dropdown";

it("top-nav-bar", () => {
  render(<TopNav />);
  const nodeElement = screen.getByTestId("change-region-text");
  expect(nodeElement).toBeInTheDocument();
});

it("mid-nav-bar-button", () => {
  render(<MidNav />);
  const nodeElement = screen.getByRole("button");
  expect(nodeElement.textContent).toBe("CONTACT");
});

it("mid-nav-bar-button", () => {
  render(<MidNav />);
  const nodeElement = screen.getAllByTestId("dropdown");
  expect(nodeElement.length).toBe(2);
});

it("dropdown", () => {
  render(
    <Dropdown
      listElements={[
        "BUSINESS TRAVEL SOLUTIONS",
        "SIMPLIFIED TRAVEL MANAGEMENT",
        "BUSINESS CONSULTING SERVICES",
      ]}
    />
  );
  const nodeElement = screen.getByTestId("sqaure-class-testing");
  expect(nodeElement).toBeInTheDocument();
});

it("dropdown", () => {
  render(
    <Dropdown
      listElements={[
        "BUSINESS TRAVEL SOLUTIONS",
        "SIMPLIFIED TRAVEL MANAGEMENT",
        "BUSINESS CONSULTING SERVICES",
      ]}
    />
  );
  const nodeElement = screen.getByTestId("sqaure-class-testing");
  expect(nodeElement).toHaveClass("nav-mid-dropdown square");
});
