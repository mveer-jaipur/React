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
    let updateTotalItems = [];

    const cartItemIndex = state.items.findIndex(
      (cartItem) => cartItem.id === action.id
    );

    if (cartItemIndex >= 0 && state.items[cartItemIndex].amount > 1) {
      updateTotalItems = state.items.map((item, index) => {
        if (index === cartItemIndex) {
          return { ...item, amount: item.amount - 1 };
        }

        return item;
      });
    }

    const updatedTotalAmount =
      state.totalAmount -
      state.items[cartItemIndex].price * updateTotalItems[cartItemIndex].amount;

    return {
      items: updateTotalItems,
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
