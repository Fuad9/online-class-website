import React from "react";

const Cart = (props) => {
  let totalPrice = 0;
  totalPrice = props.cart.reduce((acc, current) => acc + current.price, 0);
  return (
    <div>
      <h4>Course Purchased: {props.cart.length}</h4>
      <h4>Total Price: {totalPrice}</h4>
    </div>
  );
};

export default Cart;
