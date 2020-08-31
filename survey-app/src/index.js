import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Routes/Home";
import * as serviceWorker from "./serviceWorker";
import Survey from "./Routes/Survey.js";
import LoadedSurvey from "./Routes/LoadedSurvey";
import ThankYou from "./Routes/ThankYou";
import CanceledSurvey from "./Routes/CancelSurvey";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Survey" component={Survey} />
      <Route path="/LoadedSurvey" component={LoadedSurvey} />
      <Route path="/Thankyou" component={ThankYou} />
      <Route path="/CancelSurvey" component={CanceledSurvey} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();

// const store = createStore(rootReducer);

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/Survey" component={Survey} />
//       <Route path="/LoadedSurvey" component={LoadedSurvey} />
//       <Route path="/Thankyou" component={ThankYou} />
//       <Route path="/CancelSurvey" component={CanceledSurvey} />
//     </div>
//   </Router>
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   routing,
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// serviceWorker.unregister();
