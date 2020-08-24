import React, { Component } from "react";
import { ShortAnswerData } from "../../../Data/SurveyData";

class ShortAnswerQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("ShortAnswer: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div
          id="shortAnswerContainer"
          className="form-group"
          onSubmit={this.handleSubmit}
          noValidate
        >
          {ShortAnswerData.map((data, key) => {
            return (
              <div key={key} className="textarea">
                <h5>{data.question}</h5>
                <input
                  type={data.type}
                  value={data.value}
                  onChange={this.handleChange}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShortAnswerQuestion;
