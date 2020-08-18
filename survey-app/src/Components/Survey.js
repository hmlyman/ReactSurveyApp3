import React, { Component } from "react";
import CheckboxForm from "./Questions/MultipleAnswer/Checkbox";

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.prevent();
  }

  render() {
    return (
      <div className="surveyContainer">
        <CheckboxForm />
      </div>
    );
  }
}

export default SurveyComponent;
