import React from "react";
import PropTypes from "prop-types";

import "./Counter.scss";

/**
 * Counter component.
 */

const Counter = ({ setWords, setCharacters }) => {
  /**
   * Handle Change.
   *
   * Update state when the user input is changed.
   *
   * @param { object } event
   */

  const handleChange = event => {
    const { value } = event.target;

    // Guard clause against an empty string or falsy value.
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

Counter.propTypes = {
  setWords: PropTypes.func,
  setCharacters: PropTypes.func
};

export default Counter;
