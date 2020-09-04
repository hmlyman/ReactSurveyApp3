import React, { useState } from "react";
import { CheckboxInput } from "../inputs/MultipleAnswer/CheckboxInput";
import { MultiSelectInput } from "../inputs/MultipleAnswer/MultiSelectInput";
import { RadioButtonInput } from "../inputs/SingleAnswer/RadioButtonInput";
import { SelectInput } from "../inputs/SingleAnswer/SelectInput";
import { ShortAnswerInput } from "../inputs/SingleAnswer/ShortAnswerInput";
import { NameInput } from "../inputs/NameInput";
import { EmailInput } from "../inputs/EmailInput";
import { useHistory } from "react-router-dom";

export const SurveyComponent = (props) => {
  const [surveyValues, setSurveyValues] = useState({});
  const [inlineData, setInlineData] = useState({});
  const [question, setQuestion] = useState({});
  const history = useHistory();
  console.log(props);

  const triggerBackendUpdate = () => {
    setSurveyValues({});
    setQuestion({});
  };

  const callback = (name, value) => {
    console.log("Form Data: ", name, ": ", value);
    inlineData[name] = value;
    setInlineData(inlineData);
    console.log(inlineData);
  };

  const handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
    console.log("Name: ", event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.persist();
    setSurveyValues(surveyValues);
    setQuestion(question);
    triggerBackendUpdate();
    try {
      await fetch("/api/survey", {
        method: "POST",
        body: JSON.stringify(inlineData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      history.push({ pathname: "/thankyou" });
    } catch (err) {
      console.log(err);
    }
  };

  const inputs = props.inputs
    ? props.inputs.filter((inputOption) => inputOption)
    : [];
  return (
    <>
      <div id="surveyContainer" className="form-group">
        <form onSubmit={handleSubmit}>
          {inputs.map((data, index) => {
            let inputKey = `input-${index}`;
            return data.type === "text" ? (
              <NameInput
                className="form-control my-3"
                triggerCallback={callback}
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                required={true}
                onChange={handleChange}
                key={inputKey}
              />
            ) : data.type === "email" ? (
              <EmailInput
                className="form-control mt-3"
                triggerCallback={callback}
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                required={true}
                onChange={handleChange}
                key={inputKey}
              />
            ) : data.type === "radio" ? (
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
                question={data.question}
                required={data.required}
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

          <div className="col text-center">
            <div className="button">
              <button
                name="submitSurveyButton"
                className="btn btn-primary my-5 mx-5 "
                type="submit"
              >
                Submit Survey
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
