import React from "react";
import "./MenuItem.scss";
import classNames from "classnames";

interface MenuItemProps {
  menuTitle: string;
  imageUrl: string;
  menuSubTitle?: string;
  size?: string;
  onMenuItemClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const MenuItem: React.FC<MenuItemProps> = ({
  menuTitle,
  menuSubTitle,
  imageUrl,
  size,
  onMenuItemClick
}): JSX.Element => {
  return (
    <div
      className={classNames({
        "menu-item": true,
        [`menu-item__${size}`]: size
      })}
      onClick={onMenuItemClick}
    >
      <div
        className="menu-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="menu-item__content">
        <h1 className="menu-item__title">{menuTitle.toUpperCase()}</h1>
        <span className="menu-item__subtitle">{menuSubTitle}</span>
      </div>
    </div>
  );
};

MenuItem.defaultProps = {
  menuSubTitle: "SHOP NOW"
} as Partial<MenuItemProps>;

export default MenuItem;
