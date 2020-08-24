import React from "react";
import CheckboxForm from "./Questions/MultipleAnswer/Checkbox";
import RadioButton from "./Questions/SingleAnswer/RadioButton";
import Select from "./Questions/SingleAnswer/Select";
import MultiSelect from "./Questions/MultipleAnswer/MultiSelect";
import ShortAnswerQuestion from "./Questions/SingleAnswer/ShortAnswer";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";

const initialFormData = Object.freeze({
  nameForm: { NameForm },
  emailForm: { EmailForm },
  shortAnswer: { ShortAnswerQuestion },
  radioQuestion: { RadioButton },
  selectQuestion: { Select },
  multiSelect: { MultiSelect },
  checkboxQuestion: { CheckboxForm },
});

export const SurveyComponent = () => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (event) => {
    updateFormData({
      ...formData,

      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div id="surveyContainer">
      <form onSubmit={handleSubmit}>
        <ShortAnswerQuestion
          name="shortAnswer"
          onChange={handleChange}
          required
        />
        <RadioButton name="radioQuestion" onChange={handleChange} />
        <Select onChange={handleChange} />
        <MultiSelect onChange={handleChange} />
        <CheckboxForm onChange={handleChange} />
      </form>
      <button
        onClick={handleSubmit}
        name="submitSurveyButton"
        className="btn btn-primary my-5 mx-5 "
        type="submit"
      >
        <Link className="text-white" to="/thankyou">
          Submit Survey
        </Link>
      </button>
    </div>
  );
};
