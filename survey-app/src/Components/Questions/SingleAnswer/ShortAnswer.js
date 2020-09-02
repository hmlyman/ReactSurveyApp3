import React, { Component } from "react";
import ShortAnswerInput from "../../../inputs/SingleAnswer/ShortAnswerInput";

class ShortAnswerQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("ShortAnswer: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <ShortAnswerInput onChange={this.handleChange} />;
  }
}

export default ShortAnswerQuestion;
