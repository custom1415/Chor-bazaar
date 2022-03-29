import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";

import searchReducers from "./Search/Search.reducers";
export default combineReducers({
  search: searchReducers,
  cart: cartReducer,
});
