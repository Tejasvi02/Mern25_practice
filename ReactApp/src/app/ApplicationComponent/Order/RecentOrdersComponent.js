import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentOrders, cancelOrder } from "../../State/Order/RecentOrderAction";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";
import { addNotification } from "../../State/Notification/NotificationAction";

const RecentOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.recentOrderReducer);
    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (user?._id) {
            dispatch(fetchRecentOrders(user._id));
        }
    }, [dispatch, user]);

    const handleCancel = (orderId) => {
        dispatch(cancelOrder(orderId));
        dispatch(addNotification(`Order #${orderId} has been cancelled`));
    };

    const isCancelable = (createdAt) => {
        const orderDate = new Date(createdAt);
        const now = new Date();
        const diffInDays = (now - orderDate) / (1000 * 60 * 60 * 24);
        return diffInDays <= 2;
    };

    const handleReorder = (orderItems) => {
        orderItems.forEach(item => {
            dispatch({
                type: "ADD_ITEM_TO_CART",
                payload: item
            });
        });
        navigate("/cart");
    };

    const openReviewModal = (order, productId) => {
        setSelectedOrder(order);
        setSelectedProductId(productId);
        setShowModal(true);
    };

    const handleSubmitReview = () => {
        if (!selectedOrder || !selectedProductId) return;

        axios.post("http://localhost:9000/order/api/review", {
            orderId: selectedOrder._id,
            productId: selectedProductId,
            rating,
            comment,
        })
        .then(res => {
            alert("Review submitted!");
            setShowModal(false);
            setRating(0);
            setComment("");
        })
        .catch(err => {
            alert("Failed to submit review");
            console.error(err);
        });
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
                                <li key={item._id}>
                                    {item.name} x {item.qty}

                                    {order.status === "Delivered" && (
                                        <Button
                                            className="ms-2"
                                            size="sm"
                                            onClick={() => openReviewModal(order, item._id)}
                                        >
                                            Review
                                        </Button>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <button onClick={() => handleReorder(order.order)}>Reorder</button>

                        {order.status === "Pending" && isCancelable(order.createdAt) && (
                            <button onClick={() => handleCancel(order._id)}>Cancel</button>
                        )}

                        {order.status === "Pending" && !isCancelable(order.createdAt) && (
                            <p><b>This order is now being delivered. Cancellation not available.</b></p>
                        )}

                        {order.status === "Cancelled" && (
                            <p><b>Status: Cancelled</b></p>
                        )}

                        <hr />
                    </div>
                ))
            }

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Rating (1 to 5)</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={5}
                                value={rating}
                                onChange={e => setRating(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleSubmitReview}>Submit Review</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RecentOrders;
