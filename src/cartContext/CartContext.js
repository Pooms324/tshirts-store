import React, { useReducer } from "react";
export const CartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addToCart(item) {},
  increaseQuantity(item) {},
  decreaseQuantity(id) {},
  deleteFromCart(id) {},
});

const intialState = {
  cart: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const tShirts = action.items;
    let newCartItems;
    newCartItems = state.cart.concat(tShirts);
    newCartItems = newCartItems.filter((item, index, cart) => {
      return (
        index === cart.findIndex((itemInCart) => itemInCart.id === item.id)
      );
    });
    const newTotalAmount = newCartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    return {
      cart: newCartItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "INCREASE_QTY") {
    const tShirt = action.item;
    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.id === tShirt.id
    );
    const newTotalAmount = state.totalAmount + tShirt.price * tShirt.quantity;
    const existingCartItem = state.cart[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
        disableButton: false,
      };

      updatedItems = [...state.cart];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.cart.concat(tShirt);
    }
    return {
      cart: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "DECREASE_QTY") {
    const itemId = action.id;
    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.id === itemId
    );

    const existingCartItem = state.cart[existingCartItemIndex];
    const newTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.quantity === 1) {
      updatedItems = state.cart.filter((item) => itemId !== item.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.cart];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      cart: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "DELETE_ITEM") {
    const itemId = action.id;
    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.id === itemId
    );

    const existingCartItem = state.cart[existingCartItemIndex];
    const newTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.quantity;
    let updatedItems;
    if (existingCartItem) {
      updatedItems = state.cart.filter((item) => itemId !== item.id);
    }
    return {
      cart: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  return intialState;
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, intialState);
  const addToCartHandler = (items) => {
    dispatchAction({ type: "ADD_TO_CART", items });
  };
  const increaseQuantityHandler = (item) => {
    dispatchAction({ type: "INCREASE_QTY", item });
  };
  const decreaseQuantityHandler = (id) => {
    dispatchAction({ type: "DECREASE_QTY", id });
  };
  const deleteFromCartHandler = (id) => {
    dispatchAction({ type: "DELETE_ITEM", id });
  };
  const contextValues = {
    cart: cartState.cart,
    totalAmount: cartState.totalAmount,
    addToCart: addToCartHandler,
    increaseQuantity: increaseQuantityHandler,
    decreaseQuantity: decreaseQuantityHandler,
    deleteFromCart: deleteFromCartHandler,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
