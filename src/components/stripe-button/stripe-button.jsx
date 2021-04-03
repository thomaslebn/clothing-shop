import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IcCdqKa212FpGXN8bnoXvymO9QEwpNFaAt12Aqwbd5AjAFF7ze1Rd5doQmRGhdgDaYZTBTAWxUWFxPpwB18U1xl00kNwNlFdI";

  const onToken = () => {
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Shop"
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

export default StripeButton;
