import React, { Component } from "react";
import CheckboxForm from "./Questions/MultipleAnswer/Checkbox";
import RadioButton from "./Questions/SingleAnswer/RadioButton";
import Select from "./Questions/SingleAnswer/Select";
import MultiSelect from "./Questions/MultipleAnswer/MultiSelect";
import ShortAnswerQuestion from "./Questions/SingleAnswer/ShortAnswer";
import { Link } from "react-router-dom";
import { data } from "jquery";

// const initialFormData = Object.freeze({
//   Name: "",
//   Email: "",
// });

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.triggerBackendUpdate = this.triggerBackendUpdate(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  // triggerBackendUpdate = () => {
  //   console.log(question);
  //   console.log(surveyValues);
  //   setPage(1);
  //   setSurveyValues({});
  //   setQuestion({});
  // };

  handleSubmit(event) {
    this.setState({ value: event.target.value });
    console.log("Submitted data: ", event.target.value);
    event.preventDefault();

    //   for (let formInput of event.target.elements) {
    //     console.log(formInput);

    //     if (formInput.type === "select") {
    //       let selected = [].filter.call(
    //         formInput.options,
    //         (option) => option.selected
    //       );
    //       console.log(formInput);
    //       console.log(selected);
    //       console.log(formInput.options.selected);
    //     }
    //   }

    //   setSurveyValues(surveyValues);
    //   const nextPage = page + 1;
    //   const inputs = props.inputs
    //     ? this.props.inputs.filter((inputOption) => inputOption.page === nextPage)
    //     : [];

    //   if (isFinalPage) {
    //     triggerBackendUpdate();
    //   } else {
    //     if (inputs.length === 0) {
    //       setIsFinalPage(true);
    //     } else {
    //       setPage(nextPage);
    //     }
    //   }
  }

  render() {
    return (
      <div id="surveyContainer">
        <form onSubmit={this.handleSubmit} required={data.required}>
          <ShortAnswerQuestion />
          <RadioButton />
          <Select />
          <MultiSelect />
          <CheckboxForm />
        </form>

        <Link
          onClick={this.handleSubmit}
          name="submitSurveyButton"
          className="btn btn-primary my-5 mx-5"
          to="/thankyou"
        >
          Submit Survey
        </Link>
      </div>
    );
  }
}

export default SurveyComponent;
