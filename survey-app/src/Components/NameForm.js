import React, { Component } from "react";
import { NameFormData } from "../Data/SurveyData";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { fullName: null, errors: { fullName: "" } };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    console.log("Name: ", event.target.value);
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName = value.length < 2 ? "Please enter your full name" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Name");
    } else {
      console.error("Invalid Name");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div id="nameContainer" className="form-group">
        {NameFormData.map((data, key) => {
          return (
            <div key={key}>
              <form onSubmit={this.handleSubmit} noValidate>
                <input
                  className="form-control"
                  name={data.name}
                  type={data.type}
                  placeholder={data.placeholder}
                  required={data.required}
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.fullName.length > 0 && (
                  <span className="error">{errors.fullName}</span>
                )}
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NameForm;
