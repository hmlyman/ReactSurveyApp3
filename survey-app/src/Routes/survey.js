import React from "react";
import SurveyComponent from "../Components/Survey.js";
import { Link } from "react-router-dom";

function Survey() {
  return (
    <div className="App">
      <header className="App-header">
        <SurveyComponent />
        <br></br>
        <Link
          name="SubmitSurveyButton"
          className="btn btn-primary my-5 mx-5"
          to="/thankyou"
        >
          Submit Survey
        </Link>
      </header>
    </div>
  );
}

export default Survey;
