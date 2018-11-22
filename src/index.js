import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const initialState = {
  services: [
    {
      id: 1,
      icon: "fas fa-question-circle",
      heading: "Ask a Question",
      description: "Post a question to our diverse community"
    },
    {
      id: 2,
      icon: "fas fa-exclamation-circle",
      heading: "Answer a Question",
      description: "Post your very own answers to questions"
    },
    {
      id: 3,
      icon: "fas fa-check-circle",
      heading: "Vote on Answers",
      description: "Up-vote or Down-vote an answer"
    }
  ],
  questions: [
    {
      id: 1,
      date_posted: "Wed, 01 Aug 2018 00:00:00 GMT",
      question: "What is a variable?"
    },
    {
      id: 2,
      date_posted: "Sat, 04 Aug 2018 00:00:00 GMT",
      question: "What is an interpreted language?"
    }
  ],
  answers: [
    {
      id: 1,
      question_id: 1,
      answer: "A storage construct whose value can change",
      date_posted: "Fri, 03 Aug 2018 00:00:00 GMT"
    },
    {
      id: 2,
      question_id: 1,
      answer: "A simple link to a location in memory",
      date_posted: "Sat, 04 Aug 2018 00:00:00 GMT"
    },
    {
      id: 3,
      question_id: 2,
      answer: "Sample answer for question 2",
      date_posted: "Sat, 04 Aug 2018 00:00:00 GMT"
    }
  ]
};
const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
