import React from 'react';
import Instructions from '../Instructions';
import setupTests from '../setupTests'
import { shallow } from 'enzyme';

describe('Instructions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Instructions />
    )
  })

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})