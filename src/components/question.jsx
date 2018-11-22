import React, { Component } from "react";
import "../index.css";
import "./questions.css";
import Answer from "./Answer";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    return (
      <div className="question-card p-3 m-4">
        <div className="question-heading">
          <i className="fas fa-question-circle" />{" "}
          {this.props.question.question}
        </div>
        <div>
          <small className="grey">
            <i className="far fa-clock" /> {this.props.question.date_posted}
          </small>
        </div>
        <small className="brown">Answers (#)</small>
        <div className="answers">
          {this.props.answers
            .filter(answer => answer.question_id === this.props.question.id)
            .map(answer => (
              <Answer key={answer.id} answer={answer} />
            ))}
        </div>
        <button className="btn btn-primary btn-sm">Submit Answer</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  answers: state.answers
});
export default connect(mapStateToProps)(Question);
