import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Survey from "./Routes/survey.js";
import LoadedSurvey from "./Routes/loadedSurvey";
import ThankYou from "./Routes/thankYou";
import CanceledSurvey from "./Routes/cancelSurvey";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/survey" component={Survey} />
      <Route path="/loadedSurvey" component={LoadedSurvey} />
      <Route path="/thankyou" component={ThankYou} />
      <Route path="/cancelSurvey" component={CanceledSurvey} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
