import React from "react";
import { Link } from "react-router-dom";
import SubmittedData from "../Data/SubmittedData.json";
import Filter from "../Components/FilterComponent";

class LoadedSurvey extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-6 mx-auto text-center">
            <h1>Load Your Survey</h1>
            <div>
              <Filter
                onTextChange={(text) => this.setState({ filterString: text })}
              />
            </div>
            {SubmittedData.filter((SubmittedData) => {
              return SubmittedData.email === "email@email.com";
            }).map((SubmittedData, index) => {
              return (
                <div className="text-left">
                  <div>
                    <p>
                      <strong>Name: </strong>
                    </p>
                    <p>{SubmittedData.fullName}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Email: </strong>
                    </p>
                    <p>{SubmittedData.email}</p>
                  </div>
                  <div>
                    <p>
                      <strong>
                        Are you aware you are canceling with your current
                        company and entering a contract with Alder, Inc.?{" "}
                      </strong>
                    </p>
                    <p>{SubmittedData.message}</p>
                  </div>
                  <div>
                    <p>
                      <strong>
                        Do you understand you will be paying a monthly rate of
                        $49.95?
                      </strong>
                    </p>
                    <p>{SubmittedData.radioChoice}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Check all that apply. I understand:</strong>
                    </p>
                    <p>{SubmittedData.checkboxChoice}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Which of the following is not true?</strong>
                    </p>
                    <p>{SubmittedData.Select}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Select all that apply:</strong>
                    </p>
                    <p>{SubmittedData.multiSelect}</p>
                  </div>
                </div>
              );
            })}
            <Link
              name="loadedSurveyToHomeButton"
              className="btn btn-primary my-5 mx-5"
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default LoadedSurvey;
