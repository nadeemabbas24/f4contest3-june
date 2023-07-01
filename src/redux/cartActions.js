import * as action from "./actionTypes";

export const addToCart = (item) => {
  return { type: action.ADD_TO_CART, payload: item };
};

export const removeFromCart = (id) => {
  return { type: action.REMOVE_FROM_CART, payload: id };
};

export const checkout = () => {
  return { type: action.CHECKOUT };
};
