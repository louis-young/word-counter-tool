import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

/**
 * Input component.
 *
 * @param { function } setWords;
 * @param { function } setCharacters;
 */

const Input = ({ setWords, setCharacters }) => {
  /**
   * Handle Change.
   *
   * Update state when the user input is changed.
   *
   * @param { object } event
   */

  const handleChange = event => {
    const { value } = event.target;

    /**
     * This is a guard clause against an empty string or
     * falsy value which prevents unnecessary execution
     * and also prevents the word count evaluation
     * returning 1 on "".
     */

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
        className="input"
        onChange={handleChange}
        placeholder="..."
      ></textarea>
    </>
  );
};

/**
 * Type checking.
 */

Input.propTypes = {
  setWords: PropTypes.func,
  setCharacters: PropTypes.func
};

export default Input;
