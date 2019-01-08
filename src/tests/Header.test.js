import React from 'react';
import Header from '../Header';
import setupTests from '../setupTests'
import { shallow } from 'enzyme';


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header 
      />
    )
  })
  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({ showInstructions: false });
  });



})

