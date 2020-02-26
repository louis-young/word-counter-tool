import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";

import "./stylesheets/main.scss";

/**
 * Application component.
 */

const App = () => {
  // Application level state.
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);

  return (
    <div className="App">
      <Layout>
        <Header words={words} characters={characters} />
        <Counter setWords={setWords} setCharacters={setCharacters} />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
