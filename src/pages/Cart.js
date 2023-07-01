import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout, removeFromCart } from "../redux/cartActions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    updateTotal();
  });

  const updateTotal = () => {
    let totalPrice = 0;
    cart.map((obj) => {
      totalPrice += obj.price;
    });
    setTotal(totalPrice);
    console.log("total", total);
  };

  const removeCartHandler = (id) => {
    dispatch(removeFromCart(id));
    updateTotal();
  };

  const checkoutHandler = () => {
    dispatch(checkout());
    setCheckoutSuccess(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Cart</h1>
      {checkoutSuccess && (
        <h3 style={{ textAlign: "center" }}>You Checkeout successfully !</h3>
      )}
      {!checkoutSuccess && (
        <div className="cart-container">
          <div className="product-container">
            {cart &&
              cart.map((obj) => {
                return (
                  <div className="card" key={obj.id}>
                    <img src={obj.thumbnail} alt="product" />
                    <p>Title: {obj.title}</p>
                    <p>Price: {obj.price}</p>
                    <button onClick={() => removeCartHandler(obj.id)}>
                      Remove
                    </button>
                  </div>
                );
              })}
          </div>

          <div className="checkout">
            <p>Checkout List</p>
            <div class="list-item">
              {cart &&
                cart.map((obj) => {
                  return (
                    <p>
                      <span>{obj.title}</span>Rs.{obj.price}
                    </p>
                  );
                })}
            </div>
            <div class="total">
              <p>Total</p>
              <p>Rs.{total}</p>
            </div>
            <button class="checkout-btn" onClick={checkoutHandler}>
              Click To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
