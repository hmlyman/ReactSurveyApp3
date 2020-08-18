import { Component } from "react";

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
    return "SURVEY";
  }
}

export default SurveyComponent;
