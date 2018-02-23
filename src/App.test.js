import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let component = null;
  
  it('renders correctly', () => {
    component = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});