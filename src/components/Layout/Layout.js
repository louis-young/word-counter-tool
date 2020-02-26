import React from "react";
import PropTypes from "prop-types";

import "./Layout.scss";

/**
 * Layout component.
 *
 * @param { array } children;
 */

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout container">{children}</main>
    </>
  );
};

/**
 * Type checking.
 */

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
