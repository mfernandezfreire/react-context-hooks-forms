import { useState } from "react";

export default (initialValue) => {
  const [input, setInput] = useState(initialValue);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
    console.log(input);
  };

  const reset = () => {
    setInput(initialValue);
  };

  return [input, handleInput, reset];
};
