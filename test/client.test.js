import React from 'react';
import {mount, shallow} from 'enzyme';
import Photolist from '../client/src/components/photoList.jsx'

describe('<Photolist/>', () => {
    it('renders something', () => {
     shallow(<Photolist data = {[]} />)
      // expect(wrapper.find('div')).toBe(true);
      });
})

describe('<Photolist/>', () => {
  it('takes in CSS componenets', () => {
   shallow(<Photolist data = {[]} />)
    // expect(wrapper.find('div')).toBe(true);
    });
})


