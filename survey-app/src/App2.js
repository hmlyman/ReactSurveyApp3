import React from "react";
import "./App.css";
import NameForm from "./Components/NameForm.js";
import EmailForm from "./Components/EmailForm.js";
import { Link } from "react-router-dom";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class App extends React.Component {
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
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Name");
    } else {
      console.error("Invalid Name");
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameForm required onChange={this.handleChange} />
          <EmailForm />
          <button
            className="btn btn-primary mt-4 mb-2 mx-5"
            type="submit"
            onSubmit={this.handleSubmit}
          >
            <Link className="text-white" name="BeginSurveyButton" to="/survey">
              Begin Survey
            </Link>
          </button>
          <Link
            name="loadSurveyButton"
            className="btn btn-primary my-2 mx-5"
            to="/loadedSurvey"
          >
            Load Survey
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
