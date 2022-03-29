import { cartActTypes } from "./cart.types";
import { addItemToCart, removeFromCart } from "./cart.utils";
const INITIAL_STATE = {
  cart: [],
  toggle: false,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };

    case cartActTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(state.cart, action.payload),
      };
    case cartActTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default cartReducer;

// import { cartActTypes } from "./cart.types";
// import { addItemToCart } from "./cart.utils";
// const INITIAL_STATE = {
//   cart: [],
//   toggle: false,
// };
// const cartReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case cartActTypes.ADD_TO_CART:
//       return {
//         ...state,
//         cart: addItemToCart(state.cart, action.payload),
//       };
//     case cartActTypes.TOGGLE_SIDEBAR:
//       return {
//         ...state,
//         toggle: !state.toggle,
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;
