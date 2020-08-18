import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import App2 from "./test2";
import LoadedSurvey from "./Routes/loadedSurvey";
import ThankYou from "./Routes/thankYou";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/survey" component={App2} />
      <Route path="/loadedSurvey" component={LoadedSurvey} />
      <Route path="/thankyou" component={ThankYou} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
