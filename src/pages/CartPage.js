import { useState, useContext, useEffect } from "react";
import "./CartPage.css";
import Cart from "../components/cartfiles/Cart";
import { CartContext } from "../cartContext/CartContext";
import { NavLink } from "react-router-dom";
import Button from "../components/uiElements/Button";
import Loading from "../components/uiElements/Loading";
const CartPage = () => {
  const [showCheckOutForm, setShowCheckOutForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const cartCtx = useContext(CartContext);
  let classCheckOut = "checkout_card";
  if (showCheckOutForm) {
    classCheckOut = "checkout_card open";
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const finalCheckOut = cartCtx.cart.map((tshirt) => (
    <div key={tshirt.id} className="user_cart_items">
      <h4 className="cart_item_name">{tshirt.name}</h4>
      <h4 className="cart_item_quantity">Quantity:{tshirt.quantity}</h4>
    </div>
  ));
  const openCheckOutForm = () => {
    setShowCheckOutForm((prev) => !prev);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="cart_page">
      <div>
        {cartCtx.cart.length === 0 ? (
          <p>
            <b>No items in cart</b>
          </p>
        ) : (
          <Cart />
        )}
      </div>
      <div>
        <div className="checkout_section">
          {cartCtx.cart.length === 0 ? (
            <NavLink className="nav_link" to="/tshirts">
              <Button className="checkout_btn ">Back</Button>
            </NavLink>
          ) : (
            <Button
              disabled={cartCtx.cart.length === 0}
              className="checkout_btn"
              click={openCheckOutForm}
            >
              Check Out
            </Button>
          )}
          {cartCtx.cart.length !== 0 && (
            <div className={classCheckOut}>
              {finalCheckOut}
              <h4 className="total_price">
                Total Amount : <span>Rs.{cartCtx.totalAmount}</span>
              </h4>
              <Button className="order_btn">Order</Button>
            </div>
          )}
        </div>
        <NavLink to="/tshirts">
          <Button className="back">Back</Button>
        </NavLink>
      </div>
    </section>
  );
};

export default CartPage;
