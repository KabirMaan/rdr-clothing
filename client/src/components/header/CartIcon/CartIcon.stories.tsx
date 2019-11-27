import * as React from "react";
import CartIcon from "./CartIcon";
import { storiesOf } from "@storybook/react";
import { CenterDecorator } from "../../../../.storybook/decorators.stories";

storiesOf("Cart Icon", module)
  .addDecorator(CenterDecorator)
  .add("default", () => <CartIcon toggleCartHidden={() => {}} />);
