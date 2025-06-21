import React, { useState } from "react";

const NotificationBell = () => {
  // Initial notifications (static)
  const [notifications, setNotifications] = useState([
    "Add Products from Product Screen",
    "Add Items from Cart Page",
    "Review Cart from Checkout Page",
    "Make Payment from Payment Page",
    "Assist for Cancel/Reorder",
  ]);

  // Handle notification click
  const handleNotificationClick = (msg) => {
    alert(`You clicked notification: ${msg}`); // Just for demo
    // Remove clicked notification from list (reduce count)
    setNotifications((prev) => prev.filter((n) => n !== msg));
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
              <span className="dropdown-item text-muted">
                No new notifications
              </span>
            </li>
          ) : (
            notifications.map((msg, index) => (
              <li key={index}>
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
