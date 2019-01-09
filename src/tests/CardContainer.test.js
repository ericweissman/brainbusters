import React from 'react';
import CardContainer from '../CardContainer';
import { shallow } from 'enzyme';

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
const updateStudyList = jest.fn();
const studyList = [1,2]
const showAllQuestions = jest.fn();
const updateGuessedCards = jest.fn();
const guessedQuestions = [1,2]


describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer 
        questions={questions}
        updateStudyList={updateStudyList}
        studyList={studyList}
        showAllQuestions={showAllQuestions}
        updateGuessedCards={updateGuessedCards}
        guessedQuestions={guessedQuestions}
      />
    )
  });

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

})