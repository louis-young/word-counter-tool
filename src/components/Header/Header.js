import React from "react";

import "./Header.scss";

const Header = ({ words, characters }) => {
  return (
    <header className="header">
      <article className="header__item">
        <h3 className="header__title">Words</h3>
        <p className="header__count">{words}</p>
      </article>
      <article className="header__item">
        <h3 className="header__title">Characters</h3>
        <p className="header__count">{characters}</p>
      </article>
      <article className="header__item">
        <h3 className="header__title">Title</h3>
        <p className="header__count">
          <span className="header__count--title">{characters}</span>
          <span className="header__count--small"> / 60</span>
        </p>
      </article>
      <article className="header__item">
        <h3 className="header__title">Description</h3>
        <p className="header__count">
          <span className="header__count--description">{characters}</span>
          <span className="header__count--small"> / 160</span>
        </p>
      </article>
    </header>
  );
};

export default Header;
