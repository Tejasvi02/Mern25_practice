import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotificationBell = ({ notifications: initialNotifications }) => {
  const [notifications, setNotifications] = useState(initialNotifications || []);
  const navigate = useNavigate();

  
  useEffect(() => {
    setNotifications(initialNotifications || []);
  }, [initialNotifications]);

  // Map notification messages to routes
  const routeMap = {
    "Add Products from Product Screen": "/product",
    "Add Items from Cart Page": "/cart",
    "Review Cart from Checkout Page": "/checkout",
    "Make Payment from Payment Page": "/checkout?pay=true",
    "Assist for Cancel/Reorder": "/recent-orders",
  };

  const handleNotificationClick = (msg) => {
    const route = routeMap[msg] || "/"; // fallback to home
    navigate(route);

    // Optionally remove notification after clicking uncomment below to see
    //setNotifications((prev) => prev.filter((n) => n !== msg));
  };

  return (
    <div style={{ position: "absolute", top: "10px", right: "20px" }}>
      <div className="dropdown">
        <button
          className="btn btn-light position-relative dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          🔔
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {notifications.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow">
          {notifications.length === 0 ? (
            <li>
              <span className="dropdown-item text-muted">No new notifications</span>
            </li>
          ) : (
            notifications.map((msg, idx) => (
              <li key={idx}>
                <button
                  className="dropdown-item"
                  onClick={() => handleNotificationClick(msg)}
                >
                  {msg}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default NotificationBell;
