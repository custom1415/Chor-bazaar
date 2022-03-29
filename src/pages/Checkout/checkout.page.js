import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItems } from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems }) => {
  console.log("hii");
  return <></>;
};
const mapStateToProps = createStructuredSelector({
  cartItems: cartItems,
});
export default connect(mapStateToProps)(Checkout);
