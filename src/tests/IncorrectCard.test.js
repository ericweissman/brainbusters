import React from 'react';
import IncorrectCard from '../IncorrectCard.js'
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
const correct_answer = "Testing is my favorite hobby."
const incorrect_answer = "Daggob!"
const id = 21
const updateGuessedCardsMock = jest.fn()
const updateStudyListMock = jest.fn()
const showAllCards = true;
const resetMock = jest.fn();

describe('IncorrectCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <IncorrectCard
        question={question}
        correct_answer={correct_answer}
        incorrect_answer={incorrect_answer}
        id={id}
        updateGuessedCards={updateGuessedCardsMock}
        showAllCards={showAllCards}
        updateStudyList={updateStudyListMock}
        reset={resetMock}
      />
    )
  });

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateguessedcards and update study list on button click', () => {
    wrapper.find('.back-to-quiz-button').simulate('click');
    expect(updateGuessedCardsMock).toBeCalled();
    expect(updateStudyListMock).toBeCalled();
  })

});