import React, { useState } from "react";
import { useSelector } from "react-redux";

const CheckoutComponent = () => {
  const cartItems = useSelector(state => state.cartReducer.items);
  const user = useSelector(state => state.userReducer.user); // <-- get user from store

  // Uing  the userName from user reducer here
  const userName = user.userName || "Guest";  // fallback if empty
  const address = user.street || "No address provided";

  // Calculate totals
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  const [paymentDone, setPaymentDone] = useState(false);

  const handleMakePayment = () => {
    setPaymentDone(true);
  };

  if (paymentDone) {
    return (
      <div>
        <h1>Payment Page</h1>
        <p>Thank you for the payment, your items are under process!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout Page</h1>
      
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userName}</p>
      <p><strong>Address:</strong> {address}</p>

      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price Each</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.qty * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Total Quantity: {totalQty}</h3>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>

      {cartItems.length > 0 && (
        <button onClick={handleMakePayment}>Make Payment</button>
      )}
    </div>
  );
};

export default CheckoutComponent;
