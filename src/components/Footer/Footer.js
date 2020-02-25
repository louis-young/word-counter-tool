import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Developed by{" "}
        <a href="//www.louisyoung.co.uk" className="footer__link">
          Louis Young
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
