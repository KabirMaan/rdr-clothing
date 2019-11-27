import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Header from "./HeaderComponent";
import CartPreview from "../CartPreview";

describe("Header component", () => {
  let wrapper: ShallowWrapper;
  let mockSignOutStart: jest.Mock<any, any>;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: "123",
        createdAt: {
          seconds: 1234,
          nanoseconds: 1234
        },
        email: "test@gmail.com",
        id: "1"
      },
      signOutStart: mockSignOutStart
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if currentUser is present", () => {
    it("should render sign out link", () => {
      expect(
        wrapper
          .find(".option")
          .at(2)
          .text()
      ).toBe("SIGN OUT");
    });

    it("should call signOutStart method when link is clicked", () => {
      wrapper
        .find(".option")
        .at(2)
        .simulate("click");

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe("if currentUser is null", () => {
    it("should render sign in link", () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(
        newWrapper
          .find(".option")
          .at(2)
          .text()
      ).toBe("SIGN IN");
    });
  });

  describe("if hidden is true", () => {
    it("should not render CartDropdown", () => {
      expect(wrapper.exists(CartPreview)).toBe(false);
    });
  });

  describe("if currentUser is null", () => {
    it("should render CartPreviewContainer", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartPreview)).toBe(true);
    });
  });
});
