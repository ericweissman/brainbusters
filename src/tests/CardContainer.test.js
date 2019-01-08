import React from 'react';
import CardContainer from '../CardContainer';
import { questions } from '../MockData'
import setupTests from '../setupTests'
import { shallow } from 'enzyme';


describe('CardContainer', () => {
  let wrapper;

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