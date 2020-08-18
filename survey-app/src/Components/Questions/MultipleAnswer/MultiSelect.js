import React, { Component } from "react";
import { MultiSelectData } from "../../../Data/SurveyData";

class MultiSelect extends Component {
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
      <div id="multiSelectContainer">
        {MultiSelectData.map((data, key) => {
          return (
            <div key={key} className="form-select">
              <h5>{data.question}</h5>
              <select name={data.name} className="" multiple={data.multiple}>
                {MultiSelectData.map((data, key) => {
                  return (
                    <option value={data.value} id={`${data.name}-${key}`}>
                      {data.label}
                    </option>
                  );
                })}
                )
              </select>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MultiSelect;
