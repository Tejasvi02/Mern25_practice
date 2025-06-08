import * as actionTypes from "../ActionTypes";

let Initial_State = [];

let RecentOrderReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS:
            return action.payload.orders;
        case actionTypes.SAVE_ORDER:
            return [...state, action.payload.order];
        case actionTypes.CANCEL_ORDER:
            return state.map(order =>
                order._id === action.payload.orderId
                    ? { ...order, status: "Cancelled" }
                    : order
            );
        default:
            return state;
    }
};

export default RecentOrderReducer;
