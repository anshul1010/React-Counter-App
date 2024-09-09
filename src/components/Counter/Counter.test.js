import { render, fireEvent, screen, act } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("Render the counter with initial value", () => {
    render(<Counter />);
    expect(screen.getByText(/counter:/i)).toHaveTextContent("Counter: 0");
  });
  test("Increment the counter when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/counter:/i)).toHaveTextContent("Counter: 1");
  });
  test("Decrement the counter when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);
    expect(screen.getByText(/counter:/i)).toHaveTextContent("Counter: -1");
  });
});
