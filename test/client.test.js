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
describe('Test Left Button Click', () => {
  it('Test Click Event For Left Button', () => {
    const wrapper = shallow(<PopHeader />);
    wrapper.find('.spanForLeftArrow').simulate('click')
  });
  it('Test Right Button Click', () => {
    const wrapper = shallow(<PopHeader />);
    wrapper.find('.spanForRightArrow').simulate('click')
 
  });
});

describe('Parent Popular Component', () => {
  const wrapper = shallow(<Popular />)
  it('State exist', () =>{
      expect(wrapper.state()).toExist;
  });
  it('State should have no items initially in the state', () => {
      expect(wrapper.state('list')).toHaveLength(0);
    });
  });

  // describe('Parent Popular Component', () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallow(<Popular />);
  // });

  //   it('should check `componentDidMount()`', () => {
  //     const instance = wrapper.instance();
  //     jest.spyOn(instance, 'randomFunction'); 
  //     instance.componentDidMount();
  //     expect(instance.randomFunction).toHaveBeenCalledTimes(1); 
  //   });
  // });
//   it('should open modal on click', () => {
//     const clickFn = jest.fn();
    // wrapper.setProps({
    //     onOpenClick: clickFn,
    // });
//     wrapper.find('.foodImg').simulate('click');
//     expect(clickFn).toHaveBeenCalled();
// });

  // const mouseOut = jest.fn();
  // const wrapper = shallow(<ImageGallery images={['img1', 'img2', 'img3']}/>);
  // });
  // wrapper.find('.gallery').simulate('mouseout');
  // expect(mouseOut).toHaveBeenCalled();

// expect(wrapper.instance().modalLeft).toHaveBeenCalled()

// it('should have methods that scroll left and right', () => {
//   const wrapper = mount(<PopHeader />)

      
//       simulate.scrollLeft(); 
//       // expect(wrapper.state('currStart')).toEqual(1);
//   });

  // images={['img1', 'img2', 'img3']}