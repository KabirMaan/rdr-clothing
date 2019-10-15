import { storiesOf } from "@storybook/react";
import * as React from "react";
import MenuItem from "./MenuItem";

const CenterDecorator = (storyFn: any) => (
  <div
    style={{
      width: "100%",
      height: "500px",
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
  .add("with menu title", () => (
    <MenuItem
      menuTitle="Mens"
      imageUrl="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      size="large"
      onMenuItemClick={() => {}}
    ></MenuItem>
  ));
