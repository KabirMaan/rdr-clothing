import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CartIcon from "./CartIcon";

describe("CartIcon component", () => {
  let wrapper: ShallowWrapper;
  let mockToggleCartHidden: jest.Mock<any, any>;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggleCartHidden when icon is clicked", () => {
    wrapper.find(".cart-icon").simulate("click");
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it("should render the itemCount as the text", () => {
    const itemCount = parseInt(wrapper.find(".cart-icon__count").text());
    expect(itemCount).toBe(0);
  });
});
