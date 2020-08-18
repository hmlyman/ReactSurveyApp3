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
      <div className="shortAnswerContainer">
        {ShortAnswerData.map((data, key) => {
          return (
            <div key={key} className="">
              <h5>{data.question}</h5>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type={data.type}
                    value={this.state.value}
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

export default ShortAnswerQuestion;
