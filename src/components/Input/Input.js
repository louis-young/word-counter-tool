import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({ setValue }) => {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <>
      <textarea
        className="input"
        onChange={event => setValue(event.target.value)}
        placeholder="Start typing or paste some text..."
        ref={input}
      ></textarea>
    </>
  );
};

Input.propTypes = {
  setValue: PropTypes.func
};

export default Input;
