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
            <div key={key} className="radio-inline control-label">
              <h5>{data.question}</h5>
              <label>
                <input
                  className=""
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.value}
                  id={`${data.options[0].name}-${key}`}
                  onChange={this.handleChange}
                />
                {data.options[0].label}
              </label>
              <label>
                <input
                  className=""
                  required={data.required}
                  name={data.name}
                  type={data.type}
                  value={data.value}
                  id={`${data.options[1].name}-${key}`}
                  onChange={this.handleChange}
                />
                {data.options[1].label}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RadioButton;
