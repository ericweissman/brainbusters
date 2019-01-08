import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';

const toggleMock = jest.fn();
const toggleInstructionsShownMock = jest.fn();
const resetQuizMock = jest.fn();
const studyList = [1, 2];
const showAllQuestions = false;
const questions = [
  {
    "id": 1,
    "question": "What array prototype method would return a sum of the elements in an array?",
    "answers": [
      ".sort()",
      ".reduce()",
      ".forEach()"
    ],
    "correct_answer": ".reduce()",
    "concept": "prototypes"
  },
  {
    "id": 2,
    "question": "Which prototype method returns the first element in an array?",
    "answers": [
      ".pop()",
      ".shift()",
      ".map()"
    ],
    "correct_answer": ".shift()",
    "concept": "prototypes"
  }
];

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header 
        toggle={toggleMock}
        resetQuiz={resetQuizMock}
        studyList={studyList}
        showAllQuestions={showAllQuestions}
      />
    )
  })
  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({ showInstructions: false });
  });

  it('should change state when toggleInstructionsShown is called', () => {
    expect(wrapper.state()).toEqual( { showInstructions: false });
    wrapper.instance().toggleInstructionsShown();
    expect(wrapper.state()).toEqual({ showInstructions: true });
    wrapper.instance().toggleInstructionsShown();
    expect(wrapper.state()).toEqual({ showInstructions: false });
  })

})

