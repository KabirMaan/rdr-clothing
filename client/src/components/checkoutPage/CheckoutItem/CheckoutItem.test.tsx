import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CheckoutItem from './CheckoutItem';

describe('CheckoutItem component', () => {
    let wrapper: ShallowWrapper;
    let mockClearItem: (event: React.MouseEvent<HTMLDivElement>) => void;
    let mockAddItem: (event: React.MouseEvent<HTMLDivElement>) => void
    let mockRemoveItem: (event: React.MouseEvent<HTMLDivElement>) => void

    beforeEach(() => {
        mockClearItem = jest.fn();
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();

        const mockProps = {
            cartItem: {
                id: 1,
                imageUrl: 'www.testImage.com',
                price: 10,
                name: 'hats',
                quantity: 2
            },
            onClearItemClick: mockClearItem,
            onAddItemClick: mockAddItem,
            onRemoveItemClick: mockRemoveItem
        };

        wrapper = shallow(<CheckoutItem {...mockProps} />);
    });

    it('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call clearItem when remove button is clicked', () => {
        wrapper.find('.remove-button').simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    });

    it('should call addItem when left arrow is clicked', () => {
        wrapper
            .find('.quantity')
            .childAt(0)
            .simulate('click');

        expect(mockRemoveItem).toHaveBeenCalled();
    });

    it('should call addItem when right arrow is clicked', () => {
        wrapper
            .find('.quantity')
            .childAt(2)
            .simulate('click');

        expect(mockAddItem).toHaveBeenCalled();
    });
});