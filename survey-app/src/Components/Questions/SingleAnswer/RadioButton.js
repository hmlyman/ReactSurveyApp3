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
      <div className="radioButtonContainer">
        {RadioButtonData.map((data, key) => {
          return (
            <div key={key} className="radio-inline control-label">
              <h5>{data.question}</h5>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    className=""
                    required={data.required}
                    name={data.name}
                    type={data.type}
                    value={data.value}
                    id={`${data.name}-${key}`}
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RadioButton;
