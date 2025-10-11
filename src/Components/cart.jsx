import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import style from "../styles/cart.module.css";
export default function Cart() {
  const { items, clearCart1 } = useContext(CartContext);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className={`${style.cart_page} container`}>
      <h2 className={style.cart_title}>Cart</h2>

      <div className={style.cart_table}>
        <div className={style.cart_header}>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {items.map((item) => (
          <div key={item.id} className={style.cart_item}>
            <div className={style.cart_product}>
              <img src={item.images[0]} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <p>${item.price}</p>
            <p>{item.quantity}</p>

            <p>${item.price * (item.quantity || 1)}</p>
          </div>
        ))}
      </div>

      <div className={style.cart_actions}>
        <button onClick={() => {}} className={style.return_btn}>
          Return To Shop
        </button>
      </div>

      <div className={style.cart_bottom}>
        <div className={style.coupon}>
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>

        <div className={style.cart_total}>
          <h3>Cart Total</h3>
          <div className="row">
            <p>Subtotal:</p>
            <p>{subtotal} $</p>
          </div>
          <div className="row">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className={`row ${style.total}`}>
            <p>Total:</p>
            <p>{subtotal}</p>
          </div>
          <button onClick={() => clearCart1()} className={style.checkout_btn}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
