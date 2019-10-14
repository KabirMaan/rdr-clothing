import { storiesOf } from "@storybook/react";
import * as React from "react";
import MenuItem from "./MenuItem";

const CenterDecorator = (storyFn: any) => (
  <div
    style={{
      width: "100%",
      height: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <div style={{ width: "400px" }}>{storyFn()}</div>
  </div>
);

storiesOf("Menu Item", module)
  .addDecorator(CenterDecorator)
  .add("with menu title", () => <MenuItem menuTitle="Mens"></MenuItem>);
