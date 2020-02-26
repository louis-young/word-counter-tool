import React from "react";
import PropTypes from "prop-types";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout container">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
