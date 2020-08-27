import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartCount.css";

const CartCount = (props) => {
  return (
    <div className="cart-count">
      <h2>
        Course Order Summary <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge">{props.cart.length}</span>
      </h2>
    </div>
  );
};

export default CartCount;
