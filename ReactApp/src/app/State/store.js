//store will be working as container

import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import userReducer from "./User/UserReducer";
import productReducer from "./Product/ProductReducer";
import cartReducer from "./Cart/CartReducer";
import couponReducer from "./Coupon/CouponReducer"; 
import recentOrderReducer from "./Order/RecentOrderReducer";
import notificationReducer from "./Notification/NotificationReducer";

let rootReducer = combineReducers({
    //useReducer : userReducer - if we have imported another name for userReducer as useReducer this will work
    userReducer,
    productReducer,
    cartReducer,
    couponReducer,
    recentOrderReducer,
    notificationReducer
})


function logger({ getState }) {

  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

//create or configure and export the store from this code
export default configureStore({
        reducer : rootReducer,
        middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    },
    {},//inital state if we want to set from store instead of reducer
)

// Redux - the data management library for front-end applications (not just react)
// Reducers <callback functions - with switch case using action <type and payload>>
// Actions  <action object consists of <type and payload>>
// ActionCreator <can be understood as the event handler call from the front end>
// Dispatcher <creates a pipeline of multiple actions and takes them to store/reducer>
// Store <collection of reducers/states and acts as parent of all react app components so that states can be accessed via props>