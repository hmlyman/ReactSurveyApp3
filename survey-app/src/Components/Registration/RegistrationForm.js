import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const RegistrationForm = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({});
  const [loginValues, setLoginValues] = useState({});
  const history = useHistory({});

  const triggerBackendUpdate = () => {
    setLoginValues({});
  };

  const callback = (name, value) => {
    console.log("Name and Password saved.");
    loginData[name] = value;
    setLoginData(loginData);
    console.log(loginData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginValues(loginValues);
    triggerBackendUpdate();
    if (state.password === state.confirmPassword) {
      await fetch("/api/survey", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      history.push({ pathname: "/survey" });
    }
    // } else {
    //   props.showError("Passwords do not match");
    // }
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail">Email Address</label>
          <input
            type="email"
            triggerCallback={callback}
            className="form-control"
            name="Email"
            id="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            triggerCallback={callback}
            name="Password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
