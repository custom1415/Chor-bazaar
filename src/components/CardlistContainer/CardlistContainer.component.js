import React from "react";
import "./CardlistContainer.styles.scss";
import CardList from "../Card-list/CardList.component";
import Search from "../Search/Search.component";
import { connect } from "react-redux";
import SHOP_DATA from "../shop.data";

function CardlistContainer({ showSearchBox }) {
  const navLinks = ["home", "shop", "blog", "contact", "", "", "", ""];

  return (
    <div className="cardlist__container">
      <Search showSearchBox={showSearchBox} />
      {SHOP_DATA.map((item, i) => {
        return <CardList key={item.id} item={item} />;
      })}
    </div>
  );
}

export default connect()(CardlistContainer);
