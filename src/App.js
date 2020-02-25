import React, { useState } from "react";

import Textarea from "./components/Textarea/Textarea";

import "./stylesheets/main.scss";

/**
 * Application component.
 */

const App = () => {
  const [words, setWords] = useState(null);
  const [characters, setCharacters] = useState(null);

  return (
    <div className="App">
      <h1>{words}</h1>
      <h1>{characters}</h1>
      <Textarea setWords={setWords} setCharacters={setCharacters} />
    </div>
  );
};

export default App;
