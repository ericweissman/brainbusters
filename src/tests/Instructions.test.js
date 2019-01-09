import React from 'react';
import Instructions from '../Instructions';
import { shallow } from 'enzyme';

const toggleInstructionsMock = jest.fn()

describe('Instructions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Instructions 
        toggleInstructions={toggleInstructionsMock}
      />
    )
  });

  it('should match snapshot when all data is passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggle instructions on click', () => {
    wrapper.find('button').simulate('click');
    expect(toggleInstructionsMock).toBeCalled()
  });

})