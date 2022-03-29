import { cartActTypes } from "./cart.types";

export const addToCart = (item) => {
  return {
    type: cartActTypes.ADD_TO_CART,
    payload: item,
  };
};
export const removeFromCart = (item) => {
  return {
    type: cartActTypes.REMOVE_FROM_CART,
    payload: item,
  };
};
export const showCartSidebar = () => {
  return {
    type: cartActTypes.TOGGLE_SIDEBAR,
  };
};

