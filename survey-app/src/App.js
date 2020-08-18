import React from "react";
import "./App.css";
import { Baz } from "./test.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Survey App</p>
        <p>{Baz}</p>
      </header>
    </div>
  );
}

export default App;
