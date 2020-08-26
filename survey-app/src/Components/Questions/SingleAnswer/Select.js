import React, { Component } from "react";
import SelectInput from "../../../inputs/SingleAnswer/SelectInput";
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

    console.log("Select: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <SelectInput onChange={this.handleChange} />;
  }
}

export default Select;
