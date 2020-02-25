import React from "react";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout container">{children}</main>
    </>
  );
};

export default Layout;
