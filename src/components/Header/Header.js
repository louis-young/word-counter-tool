import React from "react";
import PropTypes from "prop-types";

import Counter from "../Counter/Counter";
import "./Header.scss";

/**
 * Header component.
 *
 * @param { number } words;
 * @param { number } characters;
 */

const Header = ({ words, characters }) => {
  // Store recommended META data character limits.
  const limits = {
    title: 60,
    description: 160
  };

  return (
    <header className="header">
      <Counter title="Words" value={words} />
      <Counter title="Characters" value={characters} />
      <Counter title="Title" value={characters} limit={limits.title} />
      <Counter
        title="Description"
        value={characters}
        limit={limits.description}
      />
    </header>
  );
};

/**
 * Type checking.
 */

Header.propTypes = {
  words: PropTypes.number,
  characters: PropTypes.number
};

export default Header;
