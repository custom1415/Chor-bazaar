import React from "react";
import "./Navbar.styles.scss";
import { BiBox, BiCart, BiSearchAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { toggleSearch } from "../../redux/Search/Search.actions";
import { showCartSidebar } from "../../redux/cart/cart.actions";
import { AiOutlineUser } from "react-icons/ai";
import { RiCriminalFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Navbar({ isSearchBoxHidden, showCartSidebar }) {
  const navLinks = ["home", "shop", "blog", "contact"];
  const history = useNavigate();
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="navbar">
        <div className="logo__container">
          <div className="logo__icon">
            <RiCriminalFill />
          </div>
          <p className="logo__name">Chor bazaar</p>
        </div>
        <div className="searchbox__container">
          <input type="text" className="search__bar" placeholder="Search" />
          <BiSearchAlt
            className="floating__search"
            style={{
              position: "absolute",
              top: "50%",
              right: "2%",
              transform: "translateY(-50%)",
              color: "black",
            }}
          />
        </div>
        <div className="cart__container">
          <AiOutlineUser
            onClick={() => {
              history("/signin");
            }}
          />
          <div className="cart__icon">
            <BiCart onClick={showCartSidebar} />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  isSearchBoxHidden: () => dispatch(toggleSearch()),
  showCartSidebar: () => dispatch(showCartSidebar()),
});
export default connect(null, mapDispatchToProps)(Navbar);
