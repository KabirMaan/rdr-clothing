import React from "react";
import Directory from "./Directory";
import { withRouter, RouteComponentProps } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../../redux/directory/directorySelectors";
import { connect } from "react-redux";

interface DirectoryContainerProps extends RouteComponentProps {
  sections: {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size: string;
  }[];
}

const DirectoryContainer: React.FC<DirectoryContainerProps> = ({
  history,
  match,
  sections
}) => {
  const onMenuItemClick = (linkUrl: string): void => {
    history.push(`${match.url}${linkUrl}`);
  };

  return <Directory sections={sections} onMenuItemClick={onMenuItemClick} />;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default withRouter(connect(mapStateToProps)(DirectoryContainer));
