import React from "react";
import { Link } from "react-router-dom";

class LoadedSurvey extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-6 mx-auto text-center">
            <h1>Loaded Survey</h1>
            <Link
              name="loadedSurveyToHomeButton"
              className="btn btn-primary my-5 mx-5"
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default LoadedSurvey;
