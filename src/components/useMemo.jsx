import { useState, useMemo } from "react";

var delayInMilliseconds = 1000; //1 second

const UseMemoComponent = () => {
  const [tempValue, setTempValue] = useState("");
  const [delayedValue, setDelayedValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setTempValue(newValue);

    // Clear existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    const newTimeoutId = setTimeout(() => {
      setDelayedValue(newValue);
    }, delayInMilliseconds);

    setTimeoutId(newTimeoutId);
  };

  const result = useMemo(() => 10 * delayedValue, [delayedValue]);

  return (
    <>
      <input
        type="number"
        value={tempValue}
        name="number-input"
        min={1}
        max={100}
        onChange={handleChange}
      />

      <h2>The result is: {result}</h2>
    </>
  );
};

export default UseMemoComponent;
