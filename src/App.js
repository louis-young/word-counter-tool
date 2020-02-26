import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Footer from "./components/Footer/Footer";

import "./stylesheets/main.scss";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Layout>
        <Header value={value} />
        <Input setValue={setValue} />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
