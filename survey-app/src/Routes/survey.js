import React from "react";
import { Link } from "react-router-dom";
import { SurveyComponent } from "../Components/Survey2.js";

class SurveyRoute extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
            <Link className="btn btn-primary" to="/cancelSurvey">
              Cancel Survey
            </Link>
          </nav>
        </div>
        <div className="container">
          <div className="col-6 mx-auto text-left">
            <h1 className="m-auto">Survey</h1>
            <SurveyComponent />
          </div>
        </div>
      </>
    );
  }
}

export default SurveyRoute;
