import React, { useState } from "react";
import { NameInput } from "../inputs/NameInput";
import { EmailInput } from "../inputs/EmailInput";
import { Link } from "react-router-dom";

export const NameEmailComponent = (props) => {
  const [surveyValues, setSurveyValues] = useState({});
  const [inlineData, setInlineData] = useState({});
  const [question, setQuestion] = useState({});
  console.log(props);

  const triggerBackendUpdate = () => {
    console.log(question);
    console.log(surveyValues);
    setSurveyValues({});
    setQuestion({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();

    setSurveyValues(surveyValues);
    triggerBackendUpdate();
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
                className="form-control"
                triggerCallback={callback}
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                required={data.required}
                onChange={handleChange}
              />
            ) : (
              <EmailInput
                className="form-control"
                triggerCallback={callback}
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                required={data.required}
                onChange={handleChange}
              />
            );
          })}
          <div className="col-6 mx-auto text-center">
            <div className="button">
              <button
                className="btn btn-primary mt-4 mb-2 mx-5"
                type="submit"
                onClick={handleSubmit}
              >
                <Link
                  className="text-white "
                  name="BeginSurveyButton"
                  to="/survey"
                >
                  Begin Survey
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
