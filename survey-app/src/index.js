import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Routes/Home";
import * as serviceWorker from "./serviceWorker";
import Survey from "./Routes/survey.js";
import LoadedSurvey from "./Routes/loadedSurvey";
import ThankYou from "./Routes/ThankYou";
import CanceledSurvey from "./Routes/CancelSurvey";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./UserModel/login";
import Secret from "./UserModel/Secret";
import authorization from "./UserModel/authorization";
import Home from "./Components/Home";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/survey" component={Survey} />
      <Route path="/loadedSurvey" component={LoadedSurvey} />
      <Route path="/Thankyou" component={ThankYou} />
      <Route path="/CancelSurvey" component={CanceledSurvey} />
      <Route path="/secret" component={authorization(Secret)} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
