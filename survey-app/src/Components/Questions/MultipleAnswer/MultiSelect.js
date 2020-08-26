import React, { Component } from "react";
import MultiSelectInput from "../../../inputs/MultipleAnswer/MultiSelectInput";

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState(
      {
        value: this.state.value.includes(input)
          ? this.state.value.filter((item) => item !== input)
          : [...this.state.value, input],
      },
      () => {
        console.log("MultiSelect: ", this.state.value);
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <MultiSelectInput onChange={this.handleChange} />;
  }
}

export default MultiSelect;
