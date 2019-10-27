import React, { Component } from "react";
import MenuItem from "../MenuItem";
import "./Categories.scss";
import { withRouter, RouteComponentProps } from "react-router";

interface CategoriesProps extends RouteComponentProps {}
interface CategoriesState {
  menuItems: { title: string; imageUrl: string; id: number; linkUrl: string }[];
}

class Categories extends Component<CategoriesProps, CategoriesState> {
  state = {
    menuItems: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats"
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "jackets"
      },
      {
        title: "trainers",
        imageUrl:
          "https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        id: 3,
        linkUrl: "trainers"
      },
      {
        title: "womens",
        imageUrl:
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        size: "large",
        id: 4,
        linkUrl: "womens"
      },
      {
        title: "mens",
        imageUrl:
          "https://images.unsplash.com/photo-1542053254535-def95e944232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        size: "large",
        id: 5,
        linkUrl: "mens"
      }
    ]
  };
  onMenuItemClick = (linkUrl: string): void => {
    this.props.history.push(`${this.props.match.url}${linkUrl}`);
  };
  render() {
    return (
      <div className="categories">
        {this.state.menuItems.map(({ title, imageUrl, id, size, linkUrl }) => {
          return (
            <MenuItem
              key={id}
              imageUrl={imageUrl}
              menuTitle={title}
              size={size}
              onMenuItemClick={() => this.onMenuItemClick(linkUrl)}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(Categories);
