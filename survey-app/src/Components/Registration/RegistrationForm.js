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
  console.log(props);

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
      try {
        await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        history.push({ pathname: "/survey" });
      } catch (err) {
        console.log(err);
      }
    }
    // } else {
    //   props.showError("Passwords do not match");
    // }
  };

  return (
    <div className="container">
      <div className="card col-6 mx-auto login-card mt-2">
        <form onSubmit={handleSubmit}>
          <div className="form-group text-left">
            <label htmlFor="loginEmail">Email Address</label>
            <input
              type="email"
              onBlur={callback}
              className="form-control"
              name="Email"
              id="email"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
              required={true}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              onBlur={callback}
              name="Password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="loginConfirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Password"
              onChange={handleChange}
              required={true}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
