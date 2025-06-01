import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../State/Cart/CartActions";

let ProductItemComponent = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

      const dispatch = useDispatch();

let addItemToCartClick = (evt) => {
  // Create the cart item object with required properties
  let itemToAdd = {
    _id: product._id,
    name: product.name,
    desc: product.desc,
    price: product.price,
    rating: product.rating,
    qty: 1 // or get from input if needed
  };

  // Optional alert or console.log for debugging
  alert("Adding to cart: " + JSON.stringify(itemToAdd));

  // Dispatch the action with that item
  dispatch(addToCart(itemToAdd));

  evt.preventDefault();
};

    //let dispatchToAddProduct = useDispatch();

    // let addItemToCart = (product)=>{
    //     dispatchToAddProduct(AddItemToCart(product))        
    // }

  return (
    <ul className="product col-md-11">
      <li className="product" onClick={() => toggleShowHide(!showHide)}>
        {product.name}
        {showHide && (
          <ul>
            <li>{product.price}</li>
            <li>{product.desc}</li>
            <li>{product.rating}</li>
            <button onClick={addItemToCartClick}>Add Item</button>
          </ul>
        )}
      </li>
    </ul>
  )
}

export default ProductItemComponent;