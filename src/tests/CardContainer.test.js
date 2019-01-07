import React from 'react';
import CardContainer from '../CardContainer';
import dataset from '../Data/Dataset'
import setupTests from '../setupTests'
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  let questions = dataset.ewQuestions


  beforeEach(() => {
    wrapper = shallow(
      <CardContainer 
        questions={questions}
      />
    )
  })

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

})