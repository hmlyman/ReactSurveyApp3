import React, { Component } from "react";
import { EmailFormData } from "../Data/SurveyData";

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("Email: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="emailContainer" className="container">
        {EmailFormData.map((data, key) => {
          return (
            <div key={key}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    name={data.name}
                    type={data.type}
                    placeholder={data.placeholder}
                    onChange={this.handleChange}
                    required={data.required}
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

export default EmailForm;
