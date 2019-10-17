import React from "react";
//import CategoryPreviews from "../../components/CategoryPreviews";
import "./ShopPage.scss";
import CollectionPreviews from "../../components/CollectionPreviews";

const ShopPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>shop page</h1>
      {/* <CategoryPreviews /> */}
      <CollectionPreviews />
    </div>
  );
};

export default ShopPage;
