import React from "react";
import { Link } from "react-router-dom";
import { SurveyComponent } from "../Components/SurveyComponent";
import SurveyData from "../Data/SurveyData.json";

const SurveyRoute = () => {
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
          <SurveyComponent inputs={SurveyData} />
        </div>
      </div>
    </>
  );
};

export default SurveyRoute;
