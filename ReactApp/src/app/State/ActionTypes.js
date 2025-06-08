//this is the container of all action types to be used in our applications - readucer switch case and actions action types

export const AddUserToStore = "USER.ADDUSERTOSTORE";//
export const ADD_PRODUCTS_TOSTORE = "STORE.ADDPRODUCT";


//For Cart //action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

export const ADD_COUPON = "ADD_COUPON";

export const SAVE_ORDER = "ORDER.SAVE";
export const FETCH_ORDERS = "ORDER.FETCH";
export const CANCEL_ORDER = "ORDER.CANCEL";
