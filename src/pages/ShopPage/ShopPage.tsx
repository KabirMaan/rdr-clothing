import React from "react";
//import CategoryPreviews from "../../components/CategoryPreviews";
import "./ShopPage.scss";
import CollectionPreviews from "../../components/CollectionPreviews";
import { RouteComponentProps, Route } from "react-router-dom";
import CollectionPage from "../CollectionPage";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../utils/firebase";
import { Dispatch } from "redux";
import { updateCollections } from "../../redux/actions/shop/shopActions";
import { connect } from "react-redux";
import WithSpinner from "../../components/WithSpinner";

const CollectionPageWithSPinner = WithSpinner(CollectionPage);
const CollectionPreviewsWithSpinner = WithSpinner(CollectionPreviews);
interface ShopPageProps extends RouteComponentProps {
  updateCollections: any;
}

class ShopPage extends React.Component<ShopPageProps> {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot: any) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <div>
        <Route
          exact
          path={`${this.props.match.path}`}
          render={props => (
            <CollectionPreviewsWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSPinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
