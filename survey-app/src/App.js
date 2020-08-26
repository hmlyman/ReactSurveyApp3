import React from "react";
import "./App.css";
import NameForm from "./Components/NameForm.js";
import EmailForm from "./Components/EmailForm.js";
import { Link } from "react-router-dom";
import SurveyData from "./Data/SurveyData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar">
            <Link
              name="loadSurveyButton"
              className="btn btn-primary my-2 mx-5"
              to="/loadedSurvey"
            >
              Load Survey
            </Link>
          </nav>
        </div>
        <div className="container">
          <div className="col-6 mx-auto text-left">
            <NameForm required />
            <EmailForm />
          </div>
          <div className="col-6 mx-auto text-center">
            <div className="button">
              <button
                className="btn btn-primary mt-4 mb-2 mx-5"
                type="submit"
                onClick={this.handleSubmit}
              >
                <Link
                  className="text-white "
                  name="BeginSurveyButton"
                  to="/survey"
                >
                  Begin Survey
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
