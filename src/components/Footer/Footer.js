import React from "react";

import "./Footer.scss";

/**
 * Footer component.
 */

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Developed by{" "}
        <a
          href="//louisyoung.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Louis Young
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
