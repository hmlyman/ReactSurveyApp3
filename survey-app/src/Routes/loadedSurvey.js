import React from "react";
import { Link } from "react-router-dom";
import LoadSurveyComponent from "../Components/Posts/LoadSurveyComponent";
import SubmittedData from "../Data/SubmittedData.json";

class LoadedSurvey extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="col-6 mx-auto text-center">
            <h1>Loaded Survey</h1>
            {SubmittedData.map((submittedData, index) => {
              return (
                <div className="text-left">
                  <div>
                    <p>
                      <strong>Name: </strong>
                    </p>
                    <p>{submittedData.fullName}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Email: </strong>
                    </p>
                    <p>{submittedData.email}</p>
                  </div>
                  <div>
                    <p>
                      <strong>
                        Are you aware you are canceling with your current
                        company and entering a contract with Alder, Inc.?{" "}
                      </strong>
                    </p>
                    <p>{submittedData.message}</p>
                  </div>
                  <div>
                    <p>
                      <strong>
                        Do you understand you will be paying a monthly rate of
                        $49.95?
                      </strong>
                    </p>
                    <p>{submittedData.radioChoice}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Check all that apply. I understand:</strong>
                    </p>
                    <p>{submittedData.checkboxChoice}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Which of the following is not true?</strong>
                    </p>
                    <p>{submittedData.Select}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Select all that apply:</strong>
                    </p>
                    <p>{submittedData.multiSelect}</p>
                  </div>
                </div>
              );
            })}
            <form>
              <LoadSurveyComponent />
            </form>
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
