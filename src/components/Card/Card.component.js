import React, { useState } from "react";
import "./card.styles.scss";
import Img from "../../assets/demo.jpg";
import { BiCartAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
function Card({ d, item }) {
  const [Img, setImg] = useState(`${item.imageUrl}`);

  // console.log(item);
  return (
    <div className="card__container">
      <div className="img__container">
        <img src={Img} />
      </div>
      <div className="product__info">
        <div className="product__name">{item.name}</div>
        <div className="product__price">
          {item.price * 20}
          <div className="cart__icon__container">
            <BiCartAlt
              className="add_to_cart"
              onClick={() => {
                d(item);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const map = (dispatch) => ({
  d: (i) => dispatch(addToCart(i)),
});
export default connect(null, map)(Card);
