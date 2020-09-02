import React, { useState } from "react";
import { NameInput } from "../inputs/NameInput";
import { EmailInput } from "../inputs/EmailInput";
import { useHistory } from "react-router-dom";

export const NameEmailComponent = (props) => {
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

  const submitSurvey = async (event) => {
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
      history.push({ pathname: "/survey" });
    } catch (err) {
      console.log(err);
    }
  };

  const inputs = props.inputs
    ? props.inputs.filter((inputOption) => inputOption)
    : [];

  return (
    <>
      <div id="nameContainer" className="form-group">
        <form onSubmit={submitSurvey}>
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
            ) : (
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
            );
          })}
          <div className="col-6 mx-auto text-center">
            <div className="button">
              <button className="btn btn-primary mt-4 mb-2 mx-5" type="submit">
                Begin Survey
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
