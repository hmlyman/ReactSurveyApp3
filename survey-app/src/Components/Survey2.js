import React, { useState } from "react";
import { CheckboxInput } from "../inputs/MultipleAnswer/CheckboxInput";
import { MultiSelectInput } from "../inputs/MultipleAnswer/MultiSelectInput";
import { RadioButtonInput } from "../inputs/SingleAnswer/RadioButtonInput";
import { SelectInput } from "../inputs/SingleAnswer/SelectInput";
import { ShortAnswerInput } from "../inputs/SingleAnswer/ShortAnswerInput";

export const SurveyComponent = (props) => {
  const [surveyValues, setSurveyValues] = useState({});
  const [inlineData, setInlineData] = useState({});

  const triggerBackendUpdate = () => {
    console.log(surveyValues);
    setSurveyValues({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    for (let formInput of event.target.elements) {
      console.log(formInput);
      const values = selected.map((option) => option.value);
      surveyValues = [formInput.name] = values;
      question[formInput.name] = formInput.question;
    }

    setSurveyValues(surveyValues);
    const inputs = props.inputs
      ? props.inputs.filter((inputOption) => inputOption.page === nextPage)
      : [];
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

  const inputs = props.inputs ? props.inputs.filter((inputOption) => inputOption.page === page) : [];
  return (
    <>
    <div id="surveyContainer">
      <form onSubmit={handleSubmit}>

      {inputs.map((data, index) => {
        let inputKey = `input-${index}`;
        return data.type === "textarea" ? (
        <ShortAnswerInput
          name={data.name}
          triggerCallback={callback}
          required={data.required}
          question={data.question}
          defaultValue={data.defaultValue}
          type={data.type}
          key={inputKey}
        />): data.type === "radio" ?(
        <RadioButtonInput name={data.name}
          triggerCallback={callback}
          required={data.required}
          question={data.question}
          defaultValue={data.defaultValue}
          type={data.type}  /> ):
          data.type === "select" ? (
        <SelectInput name={data.name}
          triggerCallback={callback}
          required={data.required}
          question={data.question}
          defaultValue={data.defaultValue}
          type={data.type} />): data.type ==="multiselect" ? (
        <MultiSelectInput name={data.name}
          triggerCallback={callback}
          required={data.required}
          question={data.question}
          defaultValue={data.defaultValue}
          type={data.type}
          multiple={data.multiple} />): data.type ==="checkbox"? (
        <CheckboxFormInput name={data.name}
          triggerCallback={callback}
          required={data.required}
          question={data.question}
          defaultValue={data.defaultValue}
          type={data.type}
          multiple = {data.multiple} />)
       ); })}

      </form>
      <button
        name="submitSurveyButton"
        className="btn btn-primary my-5 mx-5 "
        type="submit"
        onClick={handleSubmit}
      >
        <Link className="text-white" to="/thankyou">
          Submit Survey
        </Link>
      </button>
    </div>
    </>
  );
};
