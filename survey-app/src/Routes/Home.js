import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { NameEmailComponent } from "../Components/NameEmailComponent";
import NameEmailData from "../Data/NameEmailData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar">
            <Link
              name="loadSurveyButton"
              className="btn btn-primary my-2 mx-5"
              to="/loadedSurvey"
            >
              Load Survey
            </Link>
          </nav>
        </div>
        <div className="container">
          <div className="col-6 mx-auto text-left">
            <NameEmailComponent inputs={NameEmailData} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
