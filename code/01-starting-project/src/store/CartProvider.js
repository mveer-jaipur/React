import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const cartItemIndex = state.items.findIndex(
      (cartItem) => cartItem.id === action.item.id
    );

    const existingCartItem = state.items[cartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "SUB") {
    let updatedTotalItems;

    const existingCartItemIndex = state.items.findIndex(
      (cartItem) => cartItem.id === action.id
    );

    const exitingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exitingCartItem.price;

    if (exitingCartItem.amount > 1) {
      const updatedCartItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount - 1,
      };
      updatedTotalItems = [...state.items];
      updatedTotalItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedTotalItems = state.items.filter(
        (item) => item.id !== exitingCartItem.id
      );
    }

    return {
      items: updatedTotalItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "SUB", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
