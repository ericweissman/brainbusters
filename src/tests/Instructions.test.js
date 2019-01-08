import React from 'react';
import Instructions from '../Instructions';
import setupTests from '../setupTests'
import { shallow } from 'enzyme';

describe('Instructions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Instructions 
        toggleInstructions={jest.fn()}
      />
    )
  })

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggle instructions on click', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper('toggleInstructions')).toHaveBeenCalled(1)
  })

})