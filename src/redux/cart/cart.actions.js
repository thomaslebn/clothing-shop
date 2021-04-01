import { cartActionsTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionsTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionsTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionsTypes.REMOVE_ITEM,
  payload: item,
});
