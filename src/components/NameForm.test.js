import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;
  const mockChange = jest.fn();
  const mockSubmit = jest.fn();

  it('renders correctly', () => {
    component = shallow(
      <NameForm
        onChange={mockChange}
        onSubmit={mockSubmit}
        value="hello"
      />
    );
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('shows valid input value', () => {
    expect(component.find('input').props().value).toBe('hello');
  });

  it('calls onChange', () => {
    const mockedEvent = {
      target: {
        value: 'world'
      }
    };
    component.find('input').simulate('change', mockedEvent);
    expect(mockChange.mock.calls.length).toBe(1);
  })

  it('calls onSubmit', () => {
    component.find('form').simulate('submit');
    expect(mockSubmit.mock.calls.length).toBe(1);
  });
});
