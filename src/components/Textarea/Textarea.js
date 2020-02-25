import React from "react";

const Textarea = ({ setWords, setCharacters }) => {
  const handleChange = event => {
    const { value } = event.target;

    const words = value.trim().split(/\s+/).length;

    setWords(words);

    const characters = value.length;

    setCharacters(characters);
  };

  return (
    <>
      <textarea onChange={handleChange}></textarea>
    </>
  );
};

export default Textarea;
