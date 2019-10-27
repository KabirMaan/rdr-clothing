import * as React from "react";
import { storiesOf } from "@storybook/react";
import CollectionPreviewRow from "./CollectionPreviewRow";

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
    <div style={{ width: "90%" }}> {storyFn()}</div>
  </div>
);

const collection = {
  id: 1,
  title: "Hats",
  routeName: "hats",
  items: [
    {
      id: 1,
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25
    },
    {
      id: 2,
      name: "Blue Beanie",
      imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      price: 18
    },
    {
      id: 3,
      name: "Brown Cowboy",
      imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      price: 35
    },
    {
      id: 4,
      name: "Grey Brim",
      imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      price: 25
    },
    {
      id: 5,
      name: "Green Beanie",
      imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
      price: 18
    },
    {
      id: 6,
      name: "Palm Tree Cap",
      imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      price: 14
    },
    {
      id: 7,
      name: "Red Beanie",
      imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
      price: 18
    },
    {
      id: 8,
      name: "Wolf Cap",
      imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
      price: 14
    },
    {
      id: 9,
      name: "Blue Snapback",
      imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
      price: 16
    }
  ]
};

storiesOf("Collection Preview Row", module)
  .addDecorator(CenterDecorator)
  .add("with menu title", () => (
    <CollectionPreviewRow id={1} collection={collection}></CollectionPreviewRow>
  ));
