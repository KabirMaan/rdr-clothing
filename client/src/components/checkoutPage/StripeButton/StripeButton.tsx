import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import axios from "axios";
interface StripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({
  price
}): JSX.Element => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_eMdo4vayAU2BRsyyNPDSfQCz";

  const onToken = (token: Token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(() => {
        alert("succesful payment");
      })
      .catch((error: Error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
