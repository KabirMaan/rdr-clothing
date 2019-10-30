import React from "react";
//import CategoryPreviews from "../../components/CategoryPreviews";
import "./ShopPage.scss";
import CollectionPreviews from "../../components/CollectionPreviews";
import { RouteComponentProps, Route } from "react-router-dom";
import CollectionPage from "../CollectionPage";

interface ShopPageProps extends RouteComponentProps {}

const ShopPage: React.FC<ShopPageProps> = ({ match }): JSX.Element => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionPreviews} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />>
    </div>
  );
};

export default ShopPage;
