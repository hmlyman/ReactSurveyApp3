import React, { Component } from "react";
import { NameFormData } from "../Data/SurveyData";

class NameForm extends Component {
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
      <div id="nameContainer" className="container">
        {NameFormData.map((data, key) => {
          return (
            <div key={key}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    name={data.name}
                    type={data.type}
                    required={true}
                    placeholder={data.placeholder}
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

export default NameForm;
