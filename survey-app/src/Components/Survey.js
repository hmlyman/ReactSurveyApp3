import React, { Component } from "react";
import CheckboxForm from "./Questions/MultipleAnswer/Checkbox";
import ShortAnswer from "./Questions/SingleAnswer/ShortAnswer";
import RadioButton from "./Questions/SingleAnswer/RadioButton";
import Select from "./Questions/SingleAnswer/Select";
import MultiSelect from "./Questions/MultipleAnswer/MultiSelect";

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.triggerBackendUpdate = this.triggerBackendUpdate(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.prevent();

    for (let formInput of event.target.elements) {
      console.log(formInput);

      if (formInput.type === "select") {
        let selected = [].filter.call(
          formInput.options,
          (option) => option.selected
        );
        console.log(formInput);
        console.log(selected);
        console.log(formInput.options.selected);
      }
    }
  }

  triggerBackendUpdate(question, surveyValues) {
    console.log(question);
    console.log(surveyValues);
    this.setState({ setSurveyValues });
    this.setState({ setQuestion });
  }

  render() {
    return (
      <div id="surveyContainer">
        <form onSubmit={this.handleSubmit}>
          <ShortAnswer />
          <RadioButton />
          <Select />
          <MultiSelect />
          <CheckboxForm />
        </form>
      </div>
    );
  }
}

export default SurveyComponent;
