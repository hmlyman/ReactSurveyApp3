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
      <div id="emailContainer" className="form-group">
        {EmailFormData.map((data, key) => {
          return (
            <div key={key}>
              <form onChange={this.handleChange}>
                <input
                  className="form-control"
                  name={data.name}
                  type={data.type}
                  placeholder={data.placeholder}
                  required={data.required}
                />
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EmailForm;
