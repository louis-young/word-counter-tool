import React from "react";

import "./Counter.scss";

const Counter = ({ setWords, setCharacters }) => {
  const handleChange = event => {
    const { value } = event.target;

    if (!value) {
      setWords(0);
      setCharacters(0);
      return;
    }

    const words = value.trim().split(/\s+/).length;

    setWords(words);

    const characters = value.length;

    setCharacters(characters);
  };

  return (
    <>
      <textarea
        className="counter"
        onChange={handleChange}
        placeholder="..."
      ></textarea>
    </>
  );
};

export default Counter;
