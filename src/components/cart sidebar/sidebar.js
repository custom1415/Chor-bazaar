import React from "react";
import { connect } from "react-redux";
import { GrClose } from "react-icons/gr";
import { createStructuredSelector } from "reselect";
import { cartItems, totalAmount } from "../../redux/cart/cart.selectors";
import { removeFromCart, showCartSidebar } from "../../redux/cart/cart.actions";
import "./sidebar.scss";
import { AiOutlineClose } from "react-icons/ai";
const CartSidebar = ({
  cartItems,
  showCartSidebar,
  cartState,
  removeItem,
  cartTotal,
}) => {
  console.log(typeof cartTotal);
  return (
    <>
      <div className={`${cartState ? "" : "hide"} sidebar`}>
        <div className="topBar">
          <div className="title">Shopping Cart</div>
          <GrClose onClick={showCartSidebar} />
        </div>
        <div className="cartItems">
          {cartItems.length ? (
            cartItems.map((item, i) => {
              console.log(item);
              const { id, name, imageUrl, price } = item;

              return (
                <div className="cart__item" key={id}>
                  <img src={imageUrl} />
                  <div className="product__details">
                    <p className="name">{name}</p>
                    <div className="quantity__container">
                      <p className="quantity">{item.quantity}</p>
                      <span>X</span>
                      <p>{price * 20}</p>
                    </div>
                  </div>
                  <AiOutlineClose
                    onClick={() => {
                      removeItem(item);
                      console.log(item);
                    }}
                  />
                </div>
              );
            })
          ) : (
            <div className="empty__cart">No products in cart</div>
          )}
        </div>
        {cartItems.length ? (
          <div className="bottomBar">
            <div className="total">
              <p className="Subtotal">Subtotal</p>
              <p className="total__amount">NPR {cartTotal * 20}</p>
            </div>
            <button className="viewCartBtn">VIEW CART</button>
            <button className="checkoutBtn"> CHECKOUT</button>
          </div>
        ) : null}
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: cartItems,
  cartTotal: totalAmount,
});
const mapDispatchToProps = (dispatch) => ({
  showCartSidebar: () => dispatch(showCartSidebar()),
  removeItem: (item) => dispatch(removeFromCart(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
