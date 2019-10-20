import * as React from "react";
import FormInput from "./FormInput";
import { storiesOf } from "@storybook/react";

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
    <div style={{ width: "400px" }}>{storyFn()}</div>
  </div>
);

storiesOf("Form Input", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <FormInput
      handleChange={() => console.log("input change")}
      label="email"
      required
      value=""
      name="email"
      type="email"
    />
  ));
