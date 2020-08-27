import React from "react";

const Cart = (props) => {
  let totalPrice = 0;
  totalPrice = props.cart.reduce((acc, current) => acc + current.price, 0);

  const formatNumber = (num) => {
    let precision = num.toFixed(2);
    return Number(precision);
  };

  const styles = {
    color: "green",
  };

  return (
    <div>
      <h4 style={styles}>Course Purchased: {props.cart.length}</h4>
      <h4 style={styles}>Total Price: ${formatNumber(totalPrice)}</h4>
    </div>
  );
};

export default Cart;
