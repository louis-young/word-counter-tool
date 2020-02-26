import React from "react";
import PropTypes from "prop-types";

import "./Counter.scss";

/**
 * Counter component.
 *
 * @param { string } title;
 * @param { array } children;
 */

const Counter = ({ title, value, limit }) => {
  // Conditionally render a different counter component.
  return limit ? (
    <article className="counter">
      <h3 className="counter__title">{title}</h3>
      <p className="counter__count">
        <span className="counter__count--description">{value}</span>
        <span className="counter__count--small"> / {limit}</span>
      </p>
    </article>
  ) : (
    <article className="counter__item">
      <h3 className="counter__title">{title}</h3>
      <p className="counter__count">{value}</p>
    </article>
  );
};

/**
 * Type checking.
 */

Counter.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  limit: PropTypes.number
};

export default Counter;
