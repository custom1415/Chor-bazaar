import { SearchActionTypes } from "./Search.types";
const INITIAL_STATE = {
  isSearchBoxHidden: true,
};
const searchReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_BOX_TOGGLE:
      return {
        ...state,
        isSearchBoxHidden: !state.isSearchBoxHidden,
      };

    default:
      return state;
  }
};

export default searchReducers;
