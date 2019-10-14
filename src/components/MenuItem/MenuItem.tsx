import React from "react";
import "./MenuItem.scss";

interface MenuItemProps {
  menuTitle: string;
  menuSubTitle?: string;
}
const MenuItem = (props: MenuItemProps): JSX.Element => {
  return (
    <div className="menu-item">
      <div className="menu-item__content">
        <div className="menu-item__title">{props.menuTitle}</div>
        <div className="menu-item__subtitle">{props.menuSubTitle}</div>
      </div>
    </div>
  );
};

MenuItem.defaultProps = {
  menuSubTitle: "SHOP NOW"
} as Partial<MenuItemProps>;

export default MenuItem;
