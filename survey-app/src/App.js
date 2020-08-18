import React from "react";
import "./App.css";
import NameForm from "./Components/NameForm.js";
import EmailForm from "./Components/EmailForm.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameForm />
        <EmailForm />
        <br></br>
        <Link
          name="BeginSurveyButton"
          className="btn btn-primary my-5 mx-5"
          to="/survey"
        >
          Begin Survey
        </Link>
      </header>
    </div>
  );
}

export default App;
