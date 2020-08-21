import React, { Component } from "react";
import CheckboxForm from "./Questions/MultipleAnswer/Checkbox";
import ShortAnswer from "./Questions/SingleAnswer/ShortAnswer";
import RadioButton from "./Questions/SingleAnswer/RadioButton";
import Select from "./Questions/SingleAnswer/Select";
import MultiSelect from "./Questions/MultipleAnswer/MultiSelect";
import { Link } from "react-router-dom";

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.triggerBackendUpdate = this.triggerBackendUpdate(this);
    // this.callBack = this.callBack(this);
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

<<<<<<< HEAD
  // triggerBackendUpdate(question, surveyValues) {
  //   console.log(question);
  //   console.log(surveyValues);
  //   // this.setState({ setSurveyValues });
  //   // this.setState({ setQuestion });
  // }

  // callBack(name, value) {
  //   let inlineData = this.state.inlineData;
  //   console.log("callback", name, value);
  //   let value = inlineData[name];
  //   setInlineDate(inlineData);
  //   console.log(inlineData);
  //}
=======
  triggerBackendUpdate(question, surveyValues) {
    console.log(question);
    console.log(surveyValues);
    this.setState({ setSurveyValues });
    this.setState({ setQuestion });
  }
>>>>>>> parent of 9cf728a... comment out

  render() {
    return (
      <>
        <div id="surveyContainer">
          <form onSubmit={this.handleSubmit}>
            <ShortAnswer />
            <RadioButton />
            <Select />
            <MultiSelect />
            <CheckboxForm />
          </form>
        </div>
        <div>
          <button onClick={this.handleSubmit}>
            <Link
              name="BeginSurveyButton"
              className="btn btn-primary mt-4 mb-2 mx-5"
              to="/survey"
            >
              Begin Survey
            </Link>
          </button>
          <button>
            <Link
              name="loadSurveyButton"
              className="btn btn-primary my-2 mx-5"
              to="/loadedSurvey"
            >
              Load Survey
            </Link>
          </button>
        </div>
      </>
    );
  }
}

export default SurveyComponent;
