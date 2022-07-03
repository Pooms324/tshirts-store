import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../cartContext/CartContext";
import Button from "../components/uiElements/Button";
import "./Navigation.css";

const Navigation = (props) => {
  const cartCtx = useContext(CartContext);
  const totalitemsInCart = cartCtx.cart.length;
  return (
    <nav>
      <div className="nav-box">
        <div className="right">
          <NavLink className="nav_link" to="/tshirts">
            <img className="logo" />
          </NavLink>
        </div>
        <div className="left">
          <ul>
            <li>
              <NavLink className="nav_link" to="/tshirts/cart">
                <Button className="cart_btn">
                  Cart : <span>{totalitemsInCart}</span>
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </nav>
  );
};
export default Navigation;
