import React, { Component } from "react";
import Banner from "./Banner";
import ServicesContainer from "./ServicesContainer";
import QuestionsContainer from "./QuestionsContainer";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Banner />
        <ServicesContainer />
        <QuestionsContainer />
      </React.Fragment>
    );
  }
}

export default Home;
