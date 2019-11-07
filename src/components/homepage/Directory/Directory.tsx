import React, { Component } from "react";
import MenuItem from "../MenuItem";
import "./Directory.scss";
import { withRouter, RouteComponentProps } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../../redux/directory/directorySelectors";
import { connect } from "react-redux";

interface DirectoryProps extends RouteComponentProps {
  sections: {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size: string;
  }[];
}
interface DirectoryState {}
//make functional component
class Directory extends Component<DirectoryProps, DirectoryState> {
  onMenuItemClick = (linkUrl: string): void => {
    this.props.history.push(`${this.props.match.url}${linkUrl}`);
  };
  render() {
    return (
      <div className="directory">
        {this.props.sections.map(({ title, imageUrl, id, size, linkUrl }) => {
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
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default withRouter(connect(mapStateToProps)(Directory));
