import React from "react";
import "./App.css";
import NameForm from "./Components/NameForm.js";
import EmailForm from "./Components/EmailForm.js";
import { Link } from "react-router-dom";
import handleSubmit from "./Components/Survey";

function App() {
  return (
    <div id="nameAndEmailForm">
      <div className="App">
        <header className="App-header">
          <NameForm />
          <EmailForm />
        </header>
      </div>
      <div>
        <button onClick={handleSubmit}>
          <Link
            name="BeginSurveyButton"
            className="btn btn-primary mt-4 mb-2 mx-5"
            to="/survey"
          >
            Begin Survey
          </Link>
        </button>
        <button>
          <Link
            name="loadSurveyButton"
            className="btn btn-primary my-2 mx-5"
            to="/loadedSurvey"
          >
            Load Survey
          </Link>
        </button>
      </div>
    </div>
  );
}

export default App;
