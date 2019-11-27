import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CartPreview from "./CartPreview";
import Product from "../Product";

describe("CartDropdown component", () => {
  let wrapper: ShallowWrapper;

  const mockCartItems = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
      name: "Black And White Longsleeve",
      price: 5
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
      name: "Black And White Longsleeve",
      price: 5
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
      name: "Black And White Longsleeve",
      price: 5
    }
  ];

  beforeEach(() => {
    const mockProps = {
      cartItems: mockCartItems,
      onCheckoutButtonClick: jest.fn()
    };

    wrapper = shallow(<CartPreview {...mockProps} />);
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   it("should call history.push when button is clicked", () => {
  //     wrapper.find("CartDropdownButton").simulate("click");
  //     expect(mockHistory.push).toHaveBeenCalled();
  //     expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  //   });

  it("should render an equal number of CartItem components as the cartItems prop", () => {
    expect(wrapper.find(Product).length).toEqual(mockCartItems.length);
  });

  it("should render EmptyMessageContainer if cartItems is empty", () => {
    const mockProps = {
      cartItems: [],
      onCheckoutButtonClick: jest.fn()
    };

    const newWrapper = shallow(<CartPreview {...mockProps} />);

    expect(
      newWrapper.containsMatchingElement(
        <span className="cart-items__empty">Your cart is empty</span>
      )
    ).toBeTruthy();
  });
});
