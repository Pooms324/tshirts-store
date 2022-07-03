import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../cartContext/CartContext";

const Cart = () => {
  const ctx = useContext(CartContext);
  const increaseQuantityHandler = (item) => {
    ctx.increaseQuantity({ ...item, quantity: 1 });
  };
  const decreaseQuantityHandler = (id) => {
    ctx.decreaseQuantity(id);
  };
  const deleteItemFromCartHandler = (id) => {
    ctx.deleteFromCart(id);
  };

  const cartitems = ctx.cart.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        key={item.id}
        imageURL={item.imageURL}
        quantity={item.quantity}
        quantityLimit={item.quantityLimit}
        onAdd={increaseQuantityHandler.bind(null, item)}
        onRemove={decreaseQuantityHandler.bind(null, item.id)}
        onDelete={deleteItemFromCartHandler.bind(null, item.id)}
      />
    );
  });

  return <>{cartitems}</>;
};

export default Cart;
