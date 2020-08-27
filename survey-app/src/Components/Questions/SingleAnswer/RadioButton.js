import React, { Component } from "react";
import RadioButtonInput from "../../../inputs/SingleAnswer/RadioButtonInput";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("RadioButton: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="form-check">
          <RadioButtonInput
            onChange={this.handleChange}
            className="form-check-input"
          />
        </div>
      </div>
    );
  }
}

export default RadioButton;
