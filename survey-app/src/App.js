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

        <Link
          name="BeginSurveyButton"
          className="btn btn-primary mt-4 mb-2 mx-5"
          to="/survey"
        >
          Begin Survey
        </Link>
        <Link
          name="loadSurveyButton"
          className="btn btn-primary my-2 mx-5"
          to="/loadedSurvey"
        >
          Load Survey
        </Link>
      </header>
    </div>
  );
}

export default App;
