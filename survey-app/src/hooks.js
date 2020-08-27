import { useState } from "react";

export const useInputChange = (customValue, callback) => {
  const [value, setValue] = useState(customValue);
  const handleChange = (event) => {
    const newValue = event.target.value;
    console.log(newValue);
    setValue(newValue);
    if (callback) {
      callback(event.target.name, newValue);
    }
  };
  return {
    value: value,
    handleChange: handleChange,
  };
};
