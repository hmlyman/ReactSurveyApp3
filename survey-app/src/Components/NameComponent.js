import React, { Component } from "react";
import { NameFormData } from "../Data/SurveyData";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    console.log("Name: ", event.target.value);
  }
  render() {
    return (
      <div id="nameContainer" className="form-group">
        {NameFormData.map((data, key) => {
          return (
            <div key={key}>
              <form>
                <input
                  className="form-control"
                  name={data.name}
                  type={data.type}
                  placeholder={data.placeholder}
                  onChange={this.handleChange}
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

export default NameForm;
