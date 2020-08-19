import React from "react";
import { Link } from "react-router-dom";

class CanceledSurvey extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-6 mx-auto text-center">
            <h3>Your survey has been canceled.</h3>
            <Link
              name="canceledSurveyToHomeButton"
              className="btn btn-primary my-5 mx-5"
              to="/"
            >
              Return To Home
            </Link>
            <Link
              name="canceledSurveyToLoadSurveyButton"
              className="btn btn-primary my-5 mx-5"
              to="/loadedSurvey"
            >
              Load Survey
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default CanceledSurvey;
