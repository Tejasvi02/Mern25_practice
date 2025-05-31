import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../State/Cart/CartActions";

let ProductItemComponent = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

      const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product));
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
            <button onClick={addItemToCart}>Add Item</button>
          </ul>
        )}
      </li>
    </ul>
  )
}

export default ProductItemComponent;