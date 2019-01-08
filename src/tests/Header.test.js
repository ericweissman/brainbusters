import React from 'react';
import Header from '../Header';
import setupTests from '../setupTests'
import { shallow } from 'enzyme';

const toggleMock = jest.fn();
const toggleInstructionsShownMock = jest.fn();
const resetQuizMock = jest.fn();
const studyList = [1, 2];
const showAllQuestions = false;

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
  })



})

