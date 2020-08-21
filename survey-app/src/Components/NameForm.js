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
    console.log("Name: ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="nameContainer" className="form-group">
        {NameFormData.map((data, key) => {
          return (
            <div key={key}>
              <form onChange={this.handleChange} required={data.required}>
                <input
                  className="form-control"
                  name={data.name}
                  type={data.type}
                  placeholder={data.placeholder}
                />
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NameForm;
