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
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="shortAnswerContainer" className="container">
        <div className="form-group" onSubmit={this.handleSubmit}>
          {ShortAnswerData.map((data, key) => {
            return (
              <div key={key} className="textarea">
                <h5>{data.question}</h5>
                <label>
                  <input
                    type={data.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShortAnswerQuestion;
