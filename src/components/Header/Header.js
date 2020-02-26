import React from "react";
import PropTypes from "prop-types";

import Counter from "../Counter/Counter";
import "./Header.scss";

const Header = ({ value }) => {
  // Store recommended META data character limits.
  const limits = {
    title: 60,
    description: 160
  };

  const words = value ? value.trim().split(/\s+/).length : 0;

  const characters = value.length;

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

Header.propTypes = {
  value: PropTypes.string
};

export default Header;
