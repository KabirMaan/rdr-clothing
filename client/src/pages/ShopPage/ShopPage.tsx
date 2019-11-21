import React, { useEffect, Suspense, lazy } from "react";
//import CategoryPreviews from "../../components/CategoryPreviews";
import "./ShopPage.scss";

import { RouteComponentProps, Route } from "react-router-dom";
import { Dispatch } from "redux";
import Spinner from "../../components/shared/Spinner";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import { connect } from "react-redux";

const CollectionPreviewsContainer = lazy(() =>
  import("../../components/shopPage/CollectionPreviewsContainer")
);
const CollectionPageContainer = lazy(() =>
  import("../CollectionPage/CollectionPageContainer")
);

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
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionPreviewsContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
