import React from "react";

const Answer = props => {
  return (
    <div className="answer-card m-2 p-2">
      <div className="row">
        <div className="col col-10" id="answer_answer">
          {props.answer.answer}
        </div>
        <div className="col col-2 text-right">
          <i className="fas fa-check green m-2" />
          <i className="fas fa-pencil-alt m-2 green" />
          <i className="fas fa-trash m-2 red" />
        </div>
        <div className="col col-12 my-2 small brown">
          <i className="far fa-clock" />
          &nbsp;
          <span id="answer_date_posted">{props.answer.date_posted}</span>
        </div>

        <div className="col col-12 thumbs">
          <i className="fas fa-thumbs-up" />
          <i className="fas fa-thumbs-down" />
          <span className="small brown"># Votes</span>
        </div>
      </div>
    </div>
  );
};

export default Answer;
