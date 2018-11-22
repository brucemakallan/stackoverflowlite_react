import React from "react";
import "./banner.css";

const Login = props => {
  return (
    <div className="login-box p-3 pb-5 mt-5 mb-5">
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
