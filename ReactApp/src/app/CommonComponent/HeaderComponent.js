import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import NotificationBell from "./NotificationBell";

const Header = ({ user, cart }) => {
  const usrName = user && user.userName ? user.userName : "";

  const staticNotifications = [
    "Add Products from Product Screen",
    "Add Items from Cart Page",
    "Review Cart from Checkout Page",
    "Make Payment from Payment Page",
    "Assist for Cancel/Reorder",
  ];

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  console.log(totalQty)
  const allNotifications = [`Items in Cart: ${totalQty}`, ...staticNotifications];


  return (
    <>
      {usrName !== "" ? (
        <h2>
          Hi {usrName}, {user.mobile} , Welcome to Shopping Cart sponsored by Tech Team SIT
        </h2>
      ) : (
        <h2>
          Welcome to Shopping Cart sponsored by Tech Team SIT,
          <div>
            <h3>Please click on login button to proceed to login.</h3>
          </div>
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

            <NotificationBell notifications={allNotifications} />
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (store) => ({
  user: store.userReducer.user,
  cart: store.cartReducer || [], // ✅ CORRECT
});

export default connect(mapStateToProps)(Header);
