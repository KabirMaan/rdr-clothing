import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CollectionPreviews from "../CollectionPreviews/";
import { selectIsCollectionFetching } from "../../../redux/shop/shopSelectors";
import WithSpinner from "../../shared/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionPreviewsContainer: any = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPreviews);

export default CollectionPreviewsContainer;
