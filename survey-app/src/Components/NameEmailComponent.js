import React, { useState, useRef } from "react";
import { NameInput } from "../inputs/NameInput";
import { EmailInput } from "../inputs/EmailInput";
import { useHistory } from "react-router-dom";

export const NameEmailComponent = (props) => {
  const [surveyValues, setSurveyValues] = useState({});
  const [inlineData, setInlineData] = useState({});
  const [question, setQuestion] = useState({});
  const history = useHistory();
  // const nameRef = useRef();
  // const emailRef = useRef();
  console.log(props);

  const triggerBackendUpdate = () => {
    setSurveyValues({});
    setQuestion({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    setSurveyValues(surveyValues);
    setQuestion(question);
    triggerBackendUpdate();
  };
  const callback = (name, value) => {
    console.log("Form Data: ", name, ": ", value);
    inlineData[name] = value;
    setInlineData(inlineData);
    console.log(inlineData);
  };

  // const handleValidation = () => {
  //   let errors = {};
  //   let formIsValid = true;

  //   if (!surveyValues["nameRef"]) {
  //     formIsValid = false;
  //     errors["nameRef"] = "Cannot be empty";
  //   }
  //   if (!surveyValues["emailRef"]) {
  //     formIsValid = false;
  //     errors["emailRef"] = "Cannot be empty";
  //   }
  //   return formIsValid;
  // };

  const handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
    console.log("Name: ", event.target.value);
  };
  const submitSurvey = () => {
    history.push({ pathname: "/survey" });
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
    // handleValidation();
  };

  const inputs = props.inputs
    ? props.inputs.filter((inputOption) => inputOption)
    : [];

  return (
    <>
      <div id="nameContainer" className="form-group">
        <form onSubmit={handleSubmit}>
          {inputs.map((data, index) => {
            let inputKey = `input-${index}`;
            return data.type === "text" ? (
              <NameInput
                // ref={nameRef}
                className="form-control my-3"
                triggerCallback={callback}
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                required={data.required}
                onChange={handleChange}
                key={inputKey}
              />
            ) : (
              <EmailInput
                // ref={emailRef}
                className="form-control mt-3"
                triggerCallback={callback}
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                required={data.required}
                onChange={handleChange}
                key={inputKey}
              />
            );
          })}
          <div className="col-6 mx-auto text-center">
            <div className="button">
              <button
                to="/survey"
                className="btn btn-primary mt-4 mb-2 mx-5"
                type="submit"
                onClick={submitSurvey}
              >
                Begin Survey
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
