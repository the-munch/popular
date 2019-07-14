import React from 'react';
import {mount, shallow} from 'enzyme';
import Photolist from '../client/src/components/photoList.jsx';
import PopHeader from '../client/src/components/header.jsx';
import Popular from '../client/src/components/popular.jsx';



describe('components', () => {
  it('Popular Parent Application Renders', () => {
    shallow(<Popular />)
    });
})

describe('components', () => {
    it('Popular Dish Photolist Renders', () => {
     shallow(<Photolist data = {[]} />)
      });
})

describe('components', () => {
  it('Popular Dish Header Renders', () => {
    shallow(<PopHeader />)
    });
})

describe('Test Button Click', () => {
  it('Test Click Event For Left Button', () => {
    const button = mount(<PopHeader />);
    button.find('.spanForLeftArrow').simulate('click')
  });
  it('Test Click Event For Reft Button', () => {
    const wrapper = shallow(<PopHeader />);
    wrapper.find('.spanForRightArrow').simulate('click')
  });
});

describe('Testing Jest and Enzyme assertions', () => {
  it('.toExist', () => {
    const wrapper = shallow(<Popular data = {[]}/>);
    expect(wrapper.instance().scrollLeft()).toBeCalledTimes(1);
  })
})



// expect(wrapper.instance().modalLeft).toHaveBeenCalled()

describe('Testing Jest and Enzyme assertions', () => {
  it('.toBeChecked', () => {
    const wrapper = shallow(<Popular />);
    expect(wrapper.find('.moduleContainer')).toBeChecked;
    expect(wrapper.find('scrollLeft')).toBeChecked;
  })
})

describe('Testing Jest and Enzyme assertions', () => {
  it('.toExist', () => {
    const wrapper = shallow(<Popular />);
    expect(wrapper.find('If any Letter that exist within this parent component')).toExist;
    expect(wrapper.find('testing is hard')).toExist;
    expect(wrapper.find('learning as we go')).toExist;
    expect(wrapper.find('I need to test functionality')).toExist;
  })
})
