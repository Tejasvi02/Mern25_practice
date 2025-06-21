import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import NotificationBell from "./NotificationBell";

let Header = (props) => {
    let user = props.user;
    const usrName = user && user.userName ? user.userName : "";

    const navigateHook = useNavigate();

    // Placeholder click handler
    const handleNotificationClick = (msg) => {
        console.log("Static Notification Clicked:", msg);
        // optionally navigate based on message here
    };

    return (
        <>
            {usrName !== "" ? (
                <h2>
                    Hi {usrName}, {user.mobile} , Welcome to Shopping Cart sponsored by Tech Team SIT
                </h2>
            ) : (
                <h2>
                    Welcome to Shopping Cart sponsored by Tech Team SIT,
                    <div><h3>Please click on login button to proceed to login.</h3></div>
                </h2>
            )}

            <div>
                <NavLink to="/home" className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/userhook" className="button" activeclassname="true"> Login </NavLink>
                <NavLink to="/about" className="button" activeclassname="true"> About </NavLink>

                {usrName !== "" && (
                    <>
                        <NavLink to="/product" className="button" activeclassname="true"> Product </NavLink>
                        <NavLink to="/cart" className="button" activeclassname="true"> Cart </NavLink>
                        <NavLink to="/checkout" className="button" activeclassname="true"> Checkout </NavLink>
                        <NavLink to="/recent-orders" className="button" activeclassname="true"> RecentOrders </NavLink>

                        {/* Notification Bell */}
                        <NotificationBell
                        notifications={[
                            "Add Products from Product Screen",
                            "Add Items from Cart Page",
                            "Review Cart from Checkout Page",
                            "Make Payment from Payment Page",
                            "Assist for Cancel/Reorder"
                        ]}
                        onClick={(msg) => console.log("Clicked Notification:", msg)}
                        />
                    </>
                )}
            </div>
        </>
    );
};

let mapStateToProps = (store) => {
    return {
        user: store.userReducer.user
    };
};

export default connect(mapStateToProps, null)(Header);
