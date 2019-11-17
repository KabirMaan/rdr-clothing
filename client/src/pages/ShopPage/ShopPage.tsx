import React, { useEffect } from "react";
//import CategoryPreviews from "../../components/CategoryPreviews";
import "./ShopPage.scss";

import { RouteComponentProps, Route } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import { connect } from "react-redux";

import CollectionPreviewsContainer from "../../components/shopPage/CollectionPreviewsContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";
import { Dispatch } from "redux";

interface ShopPageProps extends RouteComponentProps {
  fetchCollectionsStart: typeof fetchCollectionsStart;
}

const ShopPage: React.FC<ShopPageProps> = ({
  fetchCollectionsStart,
  match
}): JSX.Element => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionPreviewsContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
