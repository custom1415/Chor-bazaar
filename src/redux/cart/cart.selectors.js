import { createSelector } from "reselect";

const selectCartState = (state) => state.cart;
export const cartToggleState = createSelector(
  [selectCartState],
  (state) => state.toggle
);
export const cartItems = createSelector([selectCartState], (cart) => cart.cart);
export const totalAmount = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.price * cartItem.quantity,
    0
  )
);
