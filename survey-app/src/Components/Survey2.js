import React from "react";
import CheckboxForm from "./Questions/MultipleAnswer/Checkbox";
import RadioButton from "./Questions/SingleAnswer/RadioButton";
import Select from "./Questions/SingleAnswer/Select";
import MultiSelect from "./Questions/MultipleAnswer/MultiSelect";
import ShortAnswerQuestion from "./Questions/SingleAnswer/ShortAnswer";
import { Link } from "react-router-dom";
import { data } from "jquery";

const initialFormData = Object.freeze({
  shortAnswer: { ShortAnswerQuestion },
  radioQuestion: { RadioButton },
  selectQuestion: { Select },
  multiSelect: { MultiSelect },
  checkboxQuestion: { CheckboxForm },
});

export const SurveyComponent = () => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div id="surveyContainer">
      <form onSubmit={handleSubmit} required={data.required}>
        <ShortAnswerQuestion name="shortAnswer" onChange={handleChange} />
        <RadioButton name="radioQuestion" onChange={handleChange} />
        <Select onChange={handleChange} />
        <MultiSelect onChange={handleChange} />
        <CheckboxForm onChange={handleChange} />
      </form>
      <Link
        onClick={handleSubmit}
        name="submitSurveyButton"
        className="btn btn-primary my-5 mx-5"
        to="/thankyou"
      >
        Submit Survey
      </Link>
    </div>
  );
};
