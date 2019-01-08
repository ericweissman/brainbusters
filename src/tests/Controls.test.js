import React from 'react';
import Controls from '../Controls';
import setupTests from '../setupTests'
import { shallow } from 'enzyme';

describe('Controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Controls />
    )
  })

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


})