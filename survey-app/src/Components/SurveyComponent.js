import React, { useState } from "react";
import { CheckboxInput } from "../inputs/MultipleAnswer/CheckboxInput";
import { MultiSelectInput } from "../inputs/MultipleAnswer/MultiSelectInput";
import { RadioButtonInput } from "../inputs/SingleAnswer/RadioButtonInput";
import { SelectInput } from "../inputs/SingleAnswer/SelectInput";
import { ShortAnswerInput } from "../inputs/SingleAnswer/ShortAnswerInput";
import { useHistory } from "react-router-dom";
import { isTextInput } from "../validators";

export const SurveyComponent = (props) => {
  const [surveyValues, setSurveyValues] = useState({});
  const [inlineData, setInlineData] = useState({});
  const [question, setQuestion] = useState({});
  const history = useHistory();

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

      function handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (!formInput["name"]) {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
      }
    }
    setSurveyValues(surveyValues);
    triggerBackendUpdate();
  };

  const callback = (name, value) => {
    const updatedInlineData = Object.assign({}, inlineData);
    if (name === "checkboxChoice") {
      updatedInlineData[name] = value;
    } else {
      updatedInlineData[name] = value;
    }
    console.log("Form Data: ", name, ": ", value);
    console.log(updatedInlineData);
    setInlineData(updatedInlineData);
  };
  const submitSurvey = () => {
    history.push({ pathname: "/thankyou" });
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
    saveSurvey();
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
                options={data.options}
                key={inputKey}
              />
            ) : data.type === "select" ? (
              <SelectInput
                name={data.name}
                triggerCallback={callback}
                required={data.required}
                question={data.question}
                defaultValue={data.defaultValue}
                type={data.type}
                options={data.options}
                key={inputKey}
              />
            ) : data.type === "multiSelect" ? (
              <MultiSelectInput
                name={data.name}
                triggerCallback={callback}
                required={data.required}
                question={data.question}
                defaultValue={data.defaultValue}
                type={data.type}
                multiple={data.multiple}
                options={data.options}
                key={inputKey}
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
                options={data.options}
                key={inputKey}
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
        <div className="col text-center">
          <button
            name="submitSurveyButton"
            className="btn btn-primary my-5 mx-5 "
            type="submit"
            onClick={submitSurvey}
          >
            Submit Survey
          </button>
        </div>
      </div>
    </>
  );
};
