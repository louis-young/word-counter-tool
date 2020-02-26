import React from "react";

import "./Layout.scss";

/**
 * Layout component.
 */

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout container">{children}</main>
    </>
  );
};

export default Layout;
