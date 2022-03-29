import { SearchActionTypes } from "./Search.types";

export const toggleSearch = (isSeachBoxHidden) => {
  return {
    type: SearchActionTypes.SEARCH_BOX_TOGGLE,

  };
};
