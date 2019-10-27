import * as React from "react";
import CartPreview from "./CartPreview";
import { storiesOf } from "@storybook/react";
import { CenterDecorator } from "../storybook/decorators.stories";

storiesOf("Cart Preview", module)
  .addDecorator(CenterDecorator)
  .add("default", () => <CartPreview />);
