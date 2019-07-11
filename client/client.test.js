// import { shallow } from 'enzyme';
// import Photolist from './src/components/photoList.jsx'
// import React from 'react'
// import React from 'react'
// import {mount, shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('<Photolist/>', () => {
    it('renders three <Foo /> components', () => {
      const wrapper = shallow(<Photolist />);
      expect(wrapper.find('div')).toExist();
    });
})