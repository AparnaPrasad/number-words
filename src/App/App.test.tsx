import React from 'react';
import { findByAttribute } from '../../utilities/testUtils';
import { shallow } from 'enzyme';
import App from './App';

const renderComponent = () => {
    const wrapper = shallow(<App />);
    return wrapper;
}

describe('test App component', () => {
    it('should render the compoenent without error', () => {
        const wrapper = renderComponent();
        const appComponent = findByAttribute(wrapper, 'app-component-id');
        expect(appComponent.length).toBe(1)
    })
})