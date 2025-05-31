import * as actionTypes from "../ActionTypes";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
      };
    case actionTypes.CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
