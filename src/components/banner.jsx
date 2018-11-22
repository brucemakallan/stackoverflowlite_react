import React from "react";
import Login from "./Login";
import "./banner.css";

const Banner = props => {
  return (
    <section className="banner text-white">
      <div className="container pt-4">
        <div className="row d-flex h-100">
          <div className="col col-8 justify-content-center align-self-center">
            <h1>
              StackOverflow<span className="primary-color">Lite</span>
            </h1>
            <h6>
              StackOverflow-lite is a platform where people can ask questions
              and provide answers
            </h6>
          </div>
          <div className="col col-4">
            <Login />
          </div>
        </div>
      </div>
      <div className="text-center pt-3 pb-3 sign-up-call">
        Wish to be a part of our community?
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => {
            window.location = "../signup.html";
          }}
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Banner;
