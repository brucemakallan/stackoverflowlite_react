import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionsContainer extends Component {
  render() {
    return (
      <div className="container">
        {this.props.questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions
});
export default connect(mapStateToProps)(QuestionsContainer);
