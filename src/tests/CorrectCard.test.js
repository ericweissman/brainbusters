import React from 'react';
import CorrectCard from '../CorrectCard.js'
import setupTests from '../setupTests'
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
const id = 21
const updateGuessedCardsMock = jest.fn()
const showAllCardsMock = jest.fn()
const updateStudyListMock = jest.fn()

describe('CorrectCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CorrectCard 
          question={question}
          correct_answer={correct_answer}
          id={id}
          updateGuessedCards={updateGuessedCardsMock}
          showAllCards={showAllCardsMock}
          updateStudyList={updateStudyListMock}
      />
    )
  });

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateStudyList when the back-to-quiz-btn is clicked', () => {
    wrapper.find('.back-to-quiz-btn').simulate('click');
    expect(updateStudyListMock).toBeCalled();
  })


});