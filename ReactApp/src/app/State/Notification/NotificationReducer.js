import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "./NotificationAction";

const initialState = [];

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      // Avoid duplicates (optional)
      if (state.includes(action.payload)) return state;
      return [...state, action.payload];

    case REMOVE_NOTIFICATION:
      return state.filter((msg) => msg !== action.payload);

    default:
      return state;
  }
};

export default notificationReducer;
