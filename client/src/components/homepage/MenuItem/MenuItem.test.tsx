import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MenuItem from './MenuItem';



describe('MenuItem component', () => {
    let wrapper: ShallowWrapper;
    //   let mockMatch;
    //   let mockHistory;
    let mockOnMenuItemClick: jest.Mock<any, any>

    const size = 'large';
    const imageUrl = 'testimage';
    const menuTitle = 'Test Title'
    const menuSubTitle = 'Test SubTitle'

    beforeEach(() => {
        mockOnMenuItemClick = jest.fn()

        const mockProps = {
            onMenuItemClick: mockOnMenuItemClick,
            menuTitle,
            menuSubTitle,
            size,
            title: 'hats',
            imageUrl
        };

        wrapper = shallow(<MenuItem {...mockProps} />);
    });

    it('should render MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should onMenuItemClick to have been called', () => {
        wrapper.find('.menu-item').simulate('click');

        expect(mockOnMenuItemClick).toHaveBeenCalled()
    });

    // it('should pass size to div as the prop size', () => {
    //     expect(wrapper.find('.menu-item').prop('size')).toBe(size);
    // });

    // it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    //     expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(
    //         imageUrl
    //     );
    // });
});