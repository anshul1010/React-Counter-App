import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render Counter Component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Counter Component/i);
  expect(linkElement).toBeInTheDocument();
});
