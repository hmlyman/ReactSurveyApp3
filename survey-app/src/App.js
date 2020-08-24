import React from "react";
import "./App.css";
import NameForm from "./Components/NameForm.js";
import EmailForm from "./Components/EmailForm.js";
import { Link } from "react-router-dom";

class App extends React.Component {
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
