import { useRef, useState } from "react";
import { debounce } from "../utils/debounce";

export const useCounter = ({ initialCount = 0, delay = 3000 }) => {
  const [count, setCount] = useState(initialCount);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const lastClicked = useRef(null);

  // Function to update the count, debounced to avoid multiple rapid updates
  const updateCounter = debounce((value) => {
    setCount((prevCount) => prevCount + value);
    setLoading(false);
    // Clear the error after increment/decrement
    setError(null);
  }, delay);

  const handleIncrement = () => {
    //call function to handle error
    handleError();
    updateCounter(1);
  };

  const handleDecrement = () => {
    //call function to handle error
    handleError();
    if (count > 0) {
      updateCounter(-1);
    } else {
      setError("0 is default value, cannot go below");
    }
  };

  const handleError = () => {
    const timeNow = new Date().getTime();
    if (lastClicked.current && timeNow - lastClicked.current < delay) {
      setError("Please wait for 3 seconds to click again!");
      return;
    }
    // Update the last clicked time
    lastClicked.current = timeNow;
    setLoading(true);
  };

  return { count, handleIncrement, handleDecrement, error, loading };
};
