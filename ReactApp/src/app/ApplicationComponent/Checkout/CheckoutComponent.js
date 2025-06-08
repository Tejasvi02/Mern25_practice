import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { saveRecentOrder } from "../../State/Order/RecentOrderAction";
import { EmptyTheCart } from "../../State/Cart/CartAction";
import { useDispatch } from "react-redux";


import Cart from "../Cart/CartComponent";

let Checkout = () => {
    const user = useSelector((state) => state.userReducer.user);
    const coupon = useSelector((state) => state.couponReducer.coupon); // Get actual coupon from store
    
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartReducer);

    const [checkout, makePayment] = useState(true);
    const navigate = useNavigate();

    const makePaymentClick = () => {
            // Save order to recent orders
        dispatch(saveRecentOrder(cartList, user._id));
        // Empty cart
        dispatch(EmptyTheCart());   
        makePayment(!checkout);
    };

    const goToCart = (event) => {
        navigate('/cart');
        event.preventDefault();
    };

    return (
        <>
            {checkout ? 
                <Fragment>
                    <h1>Checkout Component</h1>
                    <div>
                        Hi, <b>{user.userName}</b>
                        <p>
                            Your items are checked out and will be delivered to the address below.
                            <br />
                            If everything looks good, proceed to payment.
                        </p>
                        <hr />
                        Mobile: <b>{user.mobile}</b>
                        <br />
                        Address: <b>{user.street}</b>
                        <hr />
                        {/* Coupon Display Logic */}
                        {coupon ? (
                            <p>Coupon applied successfully: <b>{coupon}</b></p>
                        ) : (
                            <p>
                                <b>No coupon applied.</b><br />
                                <NavLink to="/coupon">Click here to generate a coupon</NavLink>
                            </p>
                        )}
                        <hr />
                    </div>

                    <Cart readOnly={true} />

                    <div>
                        <button onClick={goToCart}>Go Back To Cart</button>
                        <button onClick={makePaymentClick}>Make Payment</button>
                    </div>
                </Fragment>
                :
                <Fragment>
                    <h1>Payment Page</h1>
                    <div>
                        Thank you for the payment, your items are under process!
                        <hr />
                    </div>
                    <div>
                        <button onClick={goToCart}>Go Back To Cart</button>
                        <button onClick={makePaymentClick}>Go To Checkout</button>
                    </div>
                </Fragment>
            }
        </>
    );
};

export default Checkout;