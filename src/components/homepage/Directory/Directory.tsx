import React from "react";
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

const Directory: React.FC<DirectoryProps> = ({ history, match, sections }) => {
  const onMenuItemClick = (linkUrl: string): void => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div className="directory">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => {
        return (
          <MenuItem
            key={id}
            imageUrl={imageUrl}
            menuTitle={title}
            size={size}
            onMenuItemClick={() => onMenuItemClick(linkUrl)}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default withRouter(connect(mapStateToProps)(Directory));
