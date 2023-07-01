import { createStore } from "redux";
import * as actions from "./redux/actionTypes";

const initialState = {
  loading: false,
  product: [],
  error: "",
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHED_REQUEST:
      return { ...state, loading: true };
    case actions.FETCHED_SUCCESS:
      return { ...state, loading: false, product: action.payload, error: "" };
    case actions.FETCHED_ERROR:
      return { ...state, error: action.payload };
    case actions.ADD_TO_CART:
      let added = false;
      state.cart.map((obj) => {
        if (obj.id === action.payload.id) {
          alert("This item is already in cart!");
          added = true;
          return;
        }
      });
      if (!added) return { ...state, cart: [...state.cart, action.payload] };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id != action.payload;
        }),
      };

    case actions.CHECKOUT:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
