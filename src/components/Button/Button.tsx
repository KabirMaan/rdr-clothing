import * as React from "react";
import "./Button.scss";
export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}

const Button: React.SFC<IButtonProps> = props => (
  <button onClick={props.onClick} className="button" type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {}
};
export default Button;
