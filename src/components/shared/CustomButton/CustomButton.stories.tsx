import * as React from "react";
import CustomButton from "./CustomButton";
import { storiesOf } from "@storybook/react";
import { CenterDecorator } from "../../../../.storybook/decorators.stories";

storiesOf("Custom Button", module)
  .addDecorator(CenterDecorator)
  .add("default", () => <CustomButton>Button</CustomButton>);
