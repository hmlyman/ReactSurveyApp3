import React, { Component } from "react";
import { CheckboxData } from "../../../Data/SurveyData";

class CheckboxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState(
      {
        value: this.state.value.includes(input)
          ? this.state.value.filter((item) => item !== input)
          : [...this.state.value, input],
      },
      () => {
        console.log("CheckBox: ", this.state.value);
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div
        id="checkboxContainer"
        className="container"
        onSubmit={this.handleSubmit}
      >
        {CheckboxData.map((data, key) => {
          return (
            <div key={key}>
              <h5>{data.question}</h5>
              <div className="form-check">
                <input
                  className="form-check-input "
                  required={this.props.required}
                  name={data.name}
                  type={data.type}
                  value={data.options[0].value}
                  id={`${data.options[0].name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[0].label}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.options[1].value}
                  id={`${data.options[1].name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[1].label}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.options[2].value}
                  id={`${data.options[2].name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[2].label}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.options[3].value}
                  id={`${data.options[3].name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[3].label}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input "
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.options[4].value}
                  id={`${data.options[4].name}-${key}`}
                  onChange={this.handleChange}
                />
                <label
                  className="form-check-label "
                  htmlFor={`${data.name}-${key}`}
                >
                  {data.options[4].label}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CheckboxForm;
