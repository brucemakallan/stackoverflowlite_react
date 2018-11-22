import React from "react";
import { shallow } from "enzyme";
import Answer from "./Answer";

describe("<Answer />", () => {
  let answer, answerComponent;
  beforeEach(() => {
    answer = {
      id: 1,
      question_id: 1,
      answer: "A storage construct whose value can change",
      date_posted: "Fri, 03 Aug 2018 00:00:00 GMT"
    };
    answerComponent = shallow(<Answer answer={answer} />);
  });

  it("should render correctly", () => {
    expect(answerComponent).toMatchSnapshot();
  });

  it("should contain the correct answer", () => {
    expect(answerComponent.find("#answer_answer").text()).toEqual(
      answer.answer
    );
  });

  it("should contain the correct date posted", () => {
    expect(answerComponent.find("#answer_date_posted").text()).toEqual(
      answer.date_posted
    );
  });
});
