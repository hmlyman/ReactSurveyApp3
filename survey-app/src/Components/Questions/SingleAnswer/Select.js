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
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="selectContainer">
        {SelectData.map((data, key) => {
          return (
            <div key={key} className=" control-label">
              <h5>{data.question}</h5>
              <form onSubmit={this.handleSubmit}>
                <input
                  type={data.type}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <label></label>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Select;
