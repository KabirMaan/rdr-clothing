import React, { Component } from "react";
import MenuItem from "../../components/MenuItem";
import "./HomeContainer.scss";

export default class HomeContainer extends Component {
  state = {
    menuItems: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5
      }
    ]
  };
  render() {
    return (
      <div className="home-container">
        {this.state.menuItems.map(({ title, imageUrl, id, size }) => {
          return (
            <MenuItem
              key={id}
              imageUrl={imageUrl}
              menuTitle={title}
              size={size}
            />
          );
        })}
      </div>
    );
  }
}
