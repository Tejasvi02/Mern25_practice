import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import Cart from "../Cart/CartComponent";
import { saveRecentOrder } from "../../State/Order/RecentOrderAction";
import { EmptyTheCart } from "../../State/Cart/CartAction";

let Checkout = () => {
    const user = useSelector((state) => state.userReducer.user);
    const coupon = useSelector((state) => state.couponReducer.coupon);
    const cartList = useSelector((state) => state.cartReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const payNow = new URLSearchParams(location.search).get("pay") === "true";

    const [checkout, setCheckout] = useState(true);

    // Handle auto-payment trigger via query param
    useEffect(() => {
        if (payNow) {
            // Prevent this effect from re-triggering due to Redux state changes
            dispatch(saveRecentOrder(cartList, user._id));
            dispatch(EmptyTheCart());
            setCheckout(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // <-- Run only once on mount


    const makePaymentClick = () => {
        dispatch(saveRecentOrder(cartList, user._id));
        dispatch(EmptyTheCart());
        setCheckout(false);
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
                        <button onClick={() => setCheckout(true)}>Go To Checkout</button>
                    </div>
                </Fragment>
            }
        </>
    );
};

export default Checkout;
