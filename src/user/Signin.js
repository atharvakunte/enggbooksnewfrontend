import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  var { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, didRedirect: true });
          });
        }
      })
      .catch(console.log("Sign in Request Failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user) {
        return <Redirect to="/admin/dashboard" />;
      }
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-warning">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div>
        <div>
          <h3 className="text-center p-4 mb-5"> Admin Login</h3>
        </div>
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <form>
              <div className="form-group">
                <label className="text-dark">Email</label>
                <input
                  onChange={handleChange("email")}
                  value={email}
                  className="form-control"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Password</label>
                <input
                  onChange={handleChange("password")}
                  value={password}
                  className="form-control"
                  type="password"
                />
              </div>
              <button onClick={onSubmit} className="btn btn-dark btn-block">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
