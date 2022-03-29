import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { connect } from "react-redux";
import "./Search.styles.scss";
function Search({ isSearchBoxHidden}) {
  return (
    <div className={!isSearchBoxHidden ? "show search__modal" : "search__modal"}>
      <input placeholder="Search" />
      <BiSearchAlt style={{ position: "absolute", right: "1em" }} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  isSearchBoxHidden: state.search.isSearchBoxHidden,
});
export default connect(mapStateToProps)(Search);
