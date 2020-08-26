import React, { useState } from "react";
import { CheckboxInput } from "../inputs/MultipleAnswer/CheckboxInput";
import { MultiSelectInput } from "../inputs/MultipleAnswer/MultiSelectInput";
import { RadioButtonInput } from "../inputs/SingleAnswer/RadioButtonInput";
import { SelectInput } from "../inputs/SingleAnswer/SelectInput";
import { ShortAnswerInput } from "../inputs/SingleAnswer/ShortAnswerInput";
import { Link } from "react-router-dom";
import { isTextInput } from "../validators";

export const SurveyComponent = (props) => {
  const [surveyValues, setSurveyValues] = useState({});
  const [inlineData, setInlineData] = useState({});
  const [question, setQuestion] = useState({});

  const triggerBackendUpdate = () => {
    console.log(question);
    console.log(surveyValues);
    setSurveyValues({});
    setQuestion({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    for (let formInput of event.target.elements) {
      const isText = isTextInput(formInput.type);
      console.log(formInput);

      if (isText) {
        surveyValues[formInput.name] = formInput.value;
        question[formInput.question] = formInput.question;
      }
      if (formInput.type === "multiSelect") {
        let selected = [].filter.call(
          formInput.options,
          (option) => option.selected
        );
        console.log(formInput);
        console.log(selected);
        console.log(formInput.options.selected);

        const values = selected.map((option) => option.value);
        surveyValues[formInput.name] = values;
        question[formInput.name] = formInput.question;
      }
    }

    setSurveyValues(surveyValues);
    triggerBackendUpdate();
  };

  const callback = (name, value) => {
    console.log("Form Data: ", name, value);
    inlineData[name] = value;
    setInlineData(inlineData);
    console.log(inlineData);
  };

  const saveSurvey = async () => {
    await fetch("/api/survey", {
      method: "POST",
      body: JSON.stringify(inlineData),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.error(error);
    });
  };

  const inputs = props.inputs
    ? props.inputs.filter((inputOption) => inputOption)
    : [];
  return (
    <>
      <div id="surveyContainer">
        <form onSubmit={handleSubmit}>
          {inputs.map((data, index) => {
            let inputKey = `input-${index}`;
            return data.type === "radio" ? (
              <RadioButtonInput
                name={data.name}
                triggerCallback={callback}
                required={data.required}
                question={data.question}
                defaultValue={data.defaultValue}
                type={data.type}
              />
            ) : data.type === "select" ? (
              <SelectInput
                name={data.name}
                triggerCallback={callback}
                required={data.required}
                question={data.question}
                defaultValue={data.defaultValue}
                type={data.type}
              />
            ) : data.type === "multiselect" ? (
              <MultiSelectInput
                name={data.name}
                triggerCallback={callback}
                required={data.required}
                question={data.question}
                defaultValue={data.defaultValue}
                type={data.type}
                multiple={data.multiple}
              />
            ) : data.type === "checkbox" ? (
              <CheckboxInput
                name={data.name}
                triggerCallback={callback}
                required={data.required}
                question={data.question}
                defaultValue={data.defaultValue}
                type={data.type}
                multiple={data.multiple}
              />
            ) : (
              <ShortAnswerInput
                name={data.name}
                triggerCallback={callback}
                required={data.required}
                question={data.question}
                defaultValue={data.defaultValue}
                type={data.type}
                key={inputKey}
              />
            );
          })}
        </form>

        <Link className="text-white" to="/thankyou">
          <button
            name="submitSurveyButton"
            className="btn btn-primary my-5 mx-5 "
            type="submit"
            onClick={saveSurvey}
          >
            Submit Survey
          </button>
        </Link>
      </div>
    </>
  );
};
