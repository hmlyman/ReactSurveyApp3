import React from "react";
import { Link } from "react-router-dom";
import SurveyComponent from "../Components/Survey.js";

function Survey() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <Link className="btn btn-primary" to="/cancelSurvey">
            Cancel Survey
          </Link>
        </nav>
      </div>
      <div className="container">
        <div className="col-6 mx-auto text-left">
          <h1 className="m-auto">Survey</h1>
          <SurveyComponent />
          <Link
            // onClick={saveSurvey}
            name="submitSurveyButton"
            className="btn btn-primary my-5 mx-5"
            to="/thankyou"
          >
            Submit Survey
          </Link>
        </div>
      </div>
    </>
  );
}

export default Survey;
