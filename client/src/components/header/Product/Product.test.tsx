import React from "react";
import { shallow } from "enzyme";
import Product from "./Product";

it("should render CartItem component", () => {
  const mockItem = {
    id: 1,
    imageUrl: "www.testImage.com",
    price: 10,
    name: "hats",
    quantity: 2
  };

  expect(shallow(<Product item={mockItem} />)).toMatchSnapshot();
});
