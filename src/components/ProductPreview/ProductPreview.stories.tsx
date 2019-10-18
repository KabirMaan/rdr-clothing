import * as React from "react";
import { storiesOf } from "@storybook/react";
import ProductPreview from "./ProductPreview";

const CenterDecorator = (storyFn: any) => (
  <div
    style={{
      width: "100%",
      height: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Open Sans Condensed"
    }}
  >
    {storyFn()}
  </div>
);

storiesOf("Product Preview", module)
  .addDecorator(CenterDecorator)
  .add("with name, image and price", () => (
    <ProductPreview
      name="Brown Brim"
      imageUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png"
      price={25}
    ></ProductPreview>
  ));
