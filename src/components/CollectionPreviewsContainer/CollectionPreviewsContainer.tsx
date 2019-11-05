import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CollectionPreviews from "../CollectionPreviews/CollectionPreviews";
import { selectIsCollectionFetching } from "../../redux/actions/shop/shopSelectors";
import WithSpinner from "../WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionPreviewsContainer: any = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPreviews);

export default CollectionPreviewsContainer;
