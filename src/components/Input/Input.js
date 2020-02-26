import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({ setValue }) => {
  return (
    <>
      <textarea
        className="input"
        onChange={event => setValue(event.target.value)}
        placeholder="..."
      ></textarea>
    </>
  );
};

Input.propTypes = {
  setValue: PropTypes.func
};

export default Input;
