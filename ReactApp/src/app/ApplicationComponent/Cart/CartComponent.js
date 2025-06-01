import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, saveCartToDB } from "../../State/Cart/CartActions";

const CartComponent = () => {

 const cartItems = useSelector((state) => state.cartReducer.items) || [];
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    // Pass cartItems array directly, don't wrap in object here
    dispatch(saveCartToDB(cartItems));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              {item.name} - {item.qty} x ${item.price}
              <button onClick={() => handleRemove(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={handleCheckout}>Save to Checkout</button>
      )}
    </div>
  );
};

export default CartComponent;
