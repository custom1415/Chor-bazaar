import React from "react";
import "./CardList.styles.scss";
import Img from "../../assets/demo.jpg";
import { BiCartAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import CardComponent from "../Card/Card.component";
function CardList({ d, item }) {
  // console.log(item.items);
  return (
    <div className="cardlist__card__container">
      <div className="product__category">{item.title}</div>

      <div className="product__cards">
        {item.items.map((i) => {
          return <CardComponent key={i.id} item={i} />;
        })}
      </div>
    </div>
  );
}
const map = (dispatch) => ({
  d: (i) => dispatch(addToCart(i)),
});
export default connect(null, map)(CardList);
