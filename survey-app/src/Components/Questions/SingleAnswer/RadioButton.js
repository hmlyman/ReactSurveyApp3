import React, { Component } from "react";
import { RadioButtonData } from "../../../Data/SurveyData";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("RadioButton: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div
        id="radioButtonContainer"
        className="container"
        onSubmit={this.handleSubmit}
      >
        {RadioButtonData.map((data, key) => {
          return (
            <div key={key}>
              <h5>{data.question}</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  required={this.props.required}
                  name={data.name}
                  type={data.type}
                  value={data.options[0].value}
                  id={`${data.options[0].name}-${key}`}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">
                  {data.options[0].label}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.options[1].value}
                  id={`${data.options[1].name}-${key}`}
                  onChange={this.handleChange}
                />

                <label className="form-check-label">
                  {data.options[1].label}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RadioButton;
