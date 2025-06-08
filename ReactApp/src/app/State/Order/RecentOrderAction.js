import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const saveRecentOrder = (order, userid) => {
    const orderData = {
        userid,
        order,
        status: "Pending",
        createdAt: new Date()
    };

    return dispatch => {
        axios.post("http://localhost:9000/order/api/save", orderData)
            .then(response => {
                dispatch({
                    type: actionTypes.SAVE_ORDER,
                    payload: { order: response.data }
                });
            });
    };
};

export const fetchRecentOrders = (userid) => {
    return dispatch => {
        axios.post("http://localhost:9000/order/api/fetch", { userid })
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_ORDERS,
                    payload: { orders: response.data }
                });
            });
    };
};

export const cancelOrder = (orderId) => {
    return dispatch => {
        axios.post("http://localhost:9000/order/api/cancel", { orderId })
            .then(() => {
                dispatch({
                    type: actionTypes.CANCEL_ORDER,
                    payload: { orderId }
                });
            });
    };
};
