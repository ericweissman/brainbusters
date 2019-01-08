import React from 'react';
import CardContainer from '../CardContainer';
import mockData from '../MockData'
import setupTests from '../setupTests'
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  let questions = mockData.questions


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