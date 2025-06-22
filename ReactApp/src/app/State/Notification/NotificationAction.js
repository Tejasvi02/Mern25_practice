export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

// Add notification action creator
export const addNotification = (message) => ({
  type: ADD_NOTIFICATION,
  payload: message,
});

// (Optional) Remove notification action creator if you want later
export const removeNotification = (message) => ({
  type: REMOVE_NOTIFICATION,
  payload: message,
});
