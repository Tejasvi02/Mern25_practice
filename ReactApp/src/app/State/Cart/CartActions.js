import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const addToCart = (product) => ({
  type: actionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});

export const saveCartToDB = (cartItems) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:9000/cart/api/saveCart", { cartItems });
      dispatch(clearCart());
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };
};
