import React from 'react';
import Controls from '../Controls';
import setupTests from '../setupTests'
import { shallow } from 'enzyme';

const studyList = [1, 2]
const showAllQuestions = true;
const toggleInstructionsShownMock = jest.fn();
const resetQuizMock = jest.fn();
const toggleMock = jest.fn();

describe('Controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Controls 
        studyList={studyList}
        showAllQuestions={showAllQuestions}
        toggleInstructionsShown={toggleInstructionsShownMock}
        resetQuiz={resetQuizMock}
        toggle={toggleMock}
      />
    )
  })

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire toggleInstructionsShown when the toggle-instructions-btn is clicked', () => {
    wrapper.find('.toggle-instructions-btn').simulate('click');
    expect(toggleInstructionsShownMock).toBeCalled();
  });

  it('should fire resetQuiz when the reset-quiz button is clicked', () => {
    wrapper.find('.reset-quiz').simulate('click');
    expect(resetQuizMock).toBeCalled();
  });

  it('should fire toggle on cards-to-show button when it is clicked', () => {
    wrapper.find('.cards-to-show').simulate('click');
    expect(toggleMock).toBeCalled();
  });

})