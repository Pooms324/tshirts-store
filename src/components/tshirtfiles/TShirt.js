import React, { useContext } from "react";
import "./TShirt.css";
import { CartContext } from "../../cartContext/CartContext";
import Button from "../uiElements/Button";
const TShirt = ({ name, price, id, imageURL, currency, quantityLimit }) => {
  const ctx = useContext(CartContext);
  const userCartItems = [];
  userCartItems.push({
    name,
    price,
    id,
    imageURL,
    quantity: 1,
    quantityLimit,
  });
  const addItemToCart = () => {
    ctx.addToCart(userCartItems);
  };

  return (
    <div className="product_card">
      <div className="top">
        <img className="tshirt_image" alt={name} src={`${imageURL}`} />
      </div>
      <div className="seperation_block"></div>
      <div className="bottom">
        <h1 className="tshirt_name">{name}</h1>

        <p className="tshirt_price">
          {currency}.{price}
        </p>
        <Button className="add_to_cart" click={addItemToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default TShirt;
