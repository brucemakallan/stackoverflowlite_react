import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

const initialState = {};
const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <div>StackOverflow-Lite</div>
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
