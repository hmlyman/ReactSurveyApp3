import React, { Component } from "react";
import { MultiSelectData } from "../../../Data/SurveyData";

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("MultiSelect: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="multiSelectContainer" className="container">
        {MultiSelectData.map((data, key) => {
          return (
            <div key={key} className="form-select">
              <h5>{data.question}</h5>
              <div>
                <select
                  name={data.name}
                  type={data.type}
                  className=""
                  multiple={data.multiple}
                  onChange={this.handleChange}
                  options={[
                    {
                      value: data.options[0].value,
                      label: data.options[0].label,
                    },
                    {
                      value: data.options[1].value,
                      label: data.options[1].label,
                    },
                    {
                      value: data.options[2].value,
                      label: data.options[2].label,
                    },
                  ]}
                >
                  <option
                    value={data.options[0].value}
                    id={`${data.options[0].name}-${key}`}
                  >
                    {data.options[0].label}
                  </option>
                  <option
                    value={data.options[1].value}
                    id={`${data.options[1].name}-${key}`}
                  >
                    {data.options[1].label}
                  </option>
                  <option
                    value={data.options[2].value}
                    id={`${data.options[2].name}-${key}`}
                  >
                    {data.options[2].label}
                  </option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MultiSelect;
