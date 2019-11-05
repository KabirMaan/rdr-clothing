import React from "react";
//import CategoryPreviews from "../../components/CategoryPreviews";
import "./ShopPage.scss";

import { RouteComponentProps, Route } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/actions/shop/shopActions";
import { connect } from "react-redux";

import CollectionPreviewsContainer from "../../components/CollectionPreviewsContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

interface ShopPageProps extends RouteComponentProps {
  updateCollections: any;
  fetchCollectionsStart: any;
}

class ShopPage extends React.Component<ShopPageProps> {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }
  render() {
    return (
      <div>
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionPreviewsContainer}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
