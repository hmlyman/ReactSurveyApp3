import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import RegistrationForm from "../Components/Registration/RegistrationForm";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-12 mx-auto">
            <nav className="navbar">
              <Link
                name="loadSurveyButton"
                className="btn btn-primary my-2 mx-auto"
                to="/loadedSurvey"
              >
                Load Survey
              </Link>
            </nav>
          </div>
        </div>
        <div className="col-12 mx-auto text-center">
          <RegistrationForm />
        </div>
      </>
    );
  }
}

export default App;
