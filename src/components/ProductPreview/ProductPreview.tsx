import React from "react";
import "./ProductPreview.scss";
import CustomButton from "../CustomButton";
import { Dispatch } from "redux";
import { addItem } from "../../redux/actions/cart/cartActions";
import { connect } from "react-redux";

interface ProductPreviewProps {
  item: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };

  addItem: typeof addItem;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  item,
  addItem
}): JSX.Element => {
  const { imageUrl, name, price } = item;
  return (
    <div className="product-preview">
      <div
        className="product-preview__image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="product-preview__footer">
        <div className="product-preview__name">{name}</div>
        <div className="product-preview__price">{price}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} invertedColors>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: any) => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(ProductPreview);
