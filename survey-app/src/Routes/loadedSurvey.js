import React from "react";
import { Link } from "react-router-dom";

class LoadedSurvey extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-6 mx-auto text-center">
            <h1>Loaded Survey</h1>
            <form>
              <label>{this.props.name}</label>
              <label>{this.props.email}</label>
              <label>{this.props.shortAnswer}</label>
              <label>{this.props.radioButton}</label>
              <label>{this.props.checkBox}</label>
              <label>{this.props.select}</label>
              <label>{this.props.multiSelect}</label>
            </form>
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
