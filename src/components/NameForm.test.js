import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;
  
  it('renders correctly', () => {
    component = shallow(<NameForm />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});