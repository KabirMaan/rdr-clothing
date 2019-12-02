import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FormInput from './FormInput';

;

describe('FormInput component', () => {
    let wrapper: ShallowWrapper;
    let mockHandleChange: jest.Mock<any, any>;

    beforeEach(() => {
        mockHandleChange = jest.fn();

        const mockProps = {
            type: "email",
            label: 'email',
            name: 'email',
            value: 'test@gmail.com',
            handleChange: mockHandleChange
        };

        wrapper = shallow(<FormInput {...mockProps} />);
    });

    it('should render FormInput component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleChange method when input changes', () => {
        wrapper.find('.form-input__handler').simulate('change');

        expect(mockHandleChange).toHaveBeenCalled();
    });

    it('should render FormInputLabel if there is a label', () => {
        console.log(wrapper)
        expect(wrapper.exists('.form-input__label')).toBe(true);
    });

    // it('should not render FormInputLabel if there is no label', () => {
    //     const mockNewProps = {
    //         type: "email",
    //         name: "email",
    //         label: '',
    //         value: 'test@gmail.com',
    //         handleChange: mockHandleChange
    //     };

    //     const newWrapper = shallow(<FormInput {...mockNewProps} />);

    //     expect(newWrapper.exists('#form-input__label')).toBe(false);
    // });
});