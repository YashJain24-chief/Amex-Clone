import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Video from "../components/Video/Video";

it("video", () => {
  render(<Video />);
  const nodeElement = screen.getByText(/Putting people in front of people/i);
  expect(nodeElement).toHaveClass("video-para1");
});
