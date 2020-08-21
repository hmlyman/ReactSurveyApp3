import React, { Component } from "react";
import { SelectData } from "../../../Data/SurveyData";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

    console.log("Select: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="selectContainer" className="container">
        {SelectData.map((data, key) => {
          return (
            <div key={key} className=" control-label">
              <h5>{data.question}</h5>
              <select
                name={data.name}
                className=""
                onChange={this.handleChange}
                required={data.required}
              >
                <option hidden value>
                  Select one
                </option>
                <option
                  value={data.options[0].value}
                  id={`${data.name}-${key}`}
                >
                  {data.options[0].label}
                </option>
                <option
                  value={data.options[1].value}
                  id={`${data.name}-${key}`}
                >
                  {data.options[1].label}
                </option>
                <option
                  value={data.options[2].value}
                  id={`${data.name}-${key}`}
                >
                  {data.options[2].label}
                </option>
              </select>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Select;
