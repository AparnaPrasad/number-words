import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NumberCard from './NumberCard';
import { findByAttribute } from '../../utilities/testUtils';

const renderComponent = () => {
    const wrapper = shallow(<NumberCard />);
    return wrapper;
}
const changeInputValue = (wrapper: ShallowWrapper, value: string) => {
    const addFileIconComponent = findByAttribute(wrapper, 'number-input-element-id');
    addFileIconComponent.simulate('change', {
        target: {
            value
        },
        persist: jest.fn()
    })
}

describe("text NumberCard Component", () => {
    it("should render zero when 0 is entered", () => {
        const wrapper = renderComponent();
        changeInputValue(wrapper, '0')
        const numberText = findByAttribute(wrapper, 'number-text-display-id');
        expect(numberText.text()).toBe('zero')
    });
    it("should render 'ninety nine thousand nine ninety nine' when 99999 is entered", () => {
        const wrapper = renderComponent();
        changeInputValue(wrapper, '99999')
        const numberText = findByAttribute(wrapper, 'number-text-display-id');
        expect(numberText.text()).toBe('ninety nine thousand nine ninety nine')
    });
    it('should render overflow whem 100000 is entered', () => {
        const wrapper = renderComponent();
        changeInputValue(wrapper, '100000')
        const numberText = findByAttribute(wrapper, 'number-text-display-id');
        expect(numberText.text()).toBe('overflow')
    });
    it('should render ten whem 10 is entered', () => {
        const wrapper = renderComponent();
        changeInputValue(wrapper, '10')
        const numberText = findByAttribute(wrapper, 'number-text-display-id');
        expect(numberText.text()).toBe('ten')
    });
    it('should render seventeen when 17 is entered', () => {
        const wrapper = renderComponent();
        changeInputValue(wrapper, '17')
        const numberText = findByAttribute(wrapper, 'number-text-display-id');
        expect(numberText.text()).toBe('seventeen')
    });

    it('should render one hundren and twenty three when 123 is entered', () => {
        const wrapper = renderComponent();
        changeInputValue(wrapper, '123')
        const numberText = findByAttribute(wrapper, 'number-text-display-id');
        expect(numberText.text()).toBe('one hundren and twenty three')
    });


})