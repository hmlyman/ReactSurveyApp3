import React from "react";
import "./App.css";
import { Baz } from "./test.js";
import App2 from "./test2.js";
import ReactDOM from "react-dom";

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
