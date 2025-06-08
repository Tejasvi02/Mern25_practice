import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentOrders, cancelOrder } from "../../State/Order/RecentOrderAction";

const RecentOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.recentOrderReducer);
    const user = useSelector(state => state.userReducer.user);

    useEffect(() => {
        dispatch(fetchRecentOrders(user._id));
    }, []);

    const handleCancel = (orderId) => {
        dispatch(cancelOrder(orderId));
    };

    const isCancelable = (createdAt) => {
    const orderDate = new Date(createdAt);
    const now = new Date();
    const diffInDays = (now - orderDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 2;
    };

    return (
        <div>
            <h2>Recent Orders</h2>
            {
                orders.map(order => (
                    <div key={order._id}>
                        <p>Status: {order.status}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                        <ul>
                            {order.order.map(item => (
                                <li key={item._id}>{item.name} x {item.qty}</li>
                            ))}
                        </ul>
                        {order.status === "Pending" && isCancelable(order.createdAt) && (
                            <button onClick={() => handleCancel(order._id)}>Cancel</button>
                        )}

                        {order.status === "Pending" && !isCancelable(order.createdAt) && (
                            <p><b>This order is now being delivered. Cancellation not available.</b></p>
                        )}

                        {order.status === "Cancelled" && (
                            <p><b>Status: Cancelled</b></p>
                        )}

                        {order.status === "Delivered" && (
                            <p><b>Status: Delivered</b></p>
                        )}
                        <hr />
                    </div>
                ))
            }
        </div>
    );
};

export default RecentOrders;
