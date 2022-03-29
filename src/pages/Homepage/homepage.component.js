import React from "react";
import Cardlist from "../../components/CardlistContainer/CardlistContainer.component";
import { createStructuredSelector } from "reselect";
import { cartToggleState } from "../../redux/cart/cart.selectors";
import Navbar from "../../components/Navbar/Navbar.component";
import { toggleSearch } from "../../redux/Search/Search.actions";
import { connect } from "react-redux";
import CheckoutPage from "../Checkout/checkout.page";
import Sidebar from "../../components/cart sidebar/sidebar";
import CardlistContainerComponent from "../../components/CardlistContainer/CardlistContainer.component";
function Homepage({ toggle, cart }) {
  return (
    <div className="homepage">
      <Navbar />
      <CardlistContainerComponent />
      <CheckoutPage />
      <Sidebar cartState={cart} />
    </div>
  );
}
const mapD = (d) => ({
  toggle: () => d(toggleSearch()),
});
const m = createStructuredSelector({
  cart: cartToggleState,
});
export default connect(m, mapD)(Homepage);
