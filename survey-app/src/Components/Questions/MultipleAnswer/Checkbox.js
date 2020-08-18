import React, { Component } from "react";
import { CheckboxData } from "../../../Data/SurveyData";

class CheckboxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="checkboxContainer">
        {CheckboxData.map((data, key) => {
          return (
            <div key={key} className="form-check">
              <h5>{data.question}</h5>
              <form onSubmit={this.handleSubmit}>
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.value}
                  id={`${data.name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  <p>{data.options[0].label}</p>
                </label>
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.value}
                  id={`${data.name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[1].label}
                </label>
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.value}
                  id={`${data.name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[2].label}
                </label>
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.value}
                  id={`${data.name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[3].label}
                </label>
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.value}
                  id={`${data.name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[4].label}
                </label>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CheckboxForm;
