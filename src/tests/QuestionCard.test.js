import React from 'react';
import QuestionCard from '../QuestionCard';
import { shallow } from 'enzyme';


const question = {
  "id": 1,
  "question": "What array prototype method would return a sum of the elements in an array?",
  "answers": [
    ".sort()",
    ".reduce()",
    ".forEach()"
  ],
  "correct_answer": ".reduce()",
  "concept": "prototypes"
}
const answers = ['a', 'b', 'c']
const correct_answer = "Testing is my favorite hobby."
const key = 1
const id = 21
const concept = "array"
const updateGuessedCardsMock = jest.fn()
const updateStudyListMock = jest.fn()
const showAllQuestions = true;

const evaluateGuessMock = jest.fn();


describe('QuestionCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <QuestionCard
        key={key}
        id={id}
        question={question}
        answers={answers}
        correct_answer={correct_answer}
        concept={concept}
        updateStudyList={updateStudyListMock}
        updateGuessedCards={updateGuessedCardsMock}
        showAllQuestions={showAllQuestions}
      />
    )
  });

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({answered_correctly: null, incorrect_answer: null})
  })

  // it('should fire evaluateGuess when a guess button is clicked', () => {
  //   wrapper.find('guess-button').simulate('click');
  //   expect(evaluateGuessMock).toBeCalled();
  // });

  it('should reset state of answered_correctly to null if resetAnswered is called', () => {
    wrapper.setState({ answered_correctly: true, incorrect_answer: null });
    wrapper.instance().resetAnswered();
    expect(wrapper.state()).toEqual({ answered_correctly: null, incorrect_answer: null });
  });

  // it('should change answered_correctly to True if user guess is correct when evaluate Guess is called', (event) =>{
  //   let guess = event.target.innerText
  //   guess = "array"
  //   wrapper.instance().evaluateGuess(guess);
  //   expect(wrapper.state()).toEqual({ answered_correctly: true })
  // })
})

