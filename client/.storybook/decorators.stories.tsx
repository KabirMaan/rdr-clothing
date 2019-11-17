import React from "react";

export const CenterDecorator = (storyFn: () => React.ReactNode) => (
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
