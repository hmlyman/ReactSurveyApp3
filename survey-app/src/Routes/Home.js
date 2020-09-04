import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Header from "../Components/Header/Header";
import RegistrationForm from "../Components/Registration/RegistrationForm";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-6 mx-auto text-left">
            <nav className="navbar">
              <Header />
              <Link
                name="loadSurveyButton"
                className="btn btn-primary my-2 mx-5"
                to="/loadedSurvey"
              >
                Load Survey
              </Link>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="col-6 mx-auto text-left">
            <RegistrationForm />
          </div>
        </div>
      </>
    );
  }
}

export default App;
