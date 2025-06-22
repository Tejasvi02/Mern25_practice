import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddItemToCart } from "../../State/Cart/CartAction";
import { toast } from 'react-toastify';

const ProductItemComponent = ({ product }) => {
    const [reviews, setReviews] = useState([]);
    const [showReviews, setShowReviews] = useState(false);
    let [showHide, toggleShowHide] = useState(false)

    let dispatchToAddProduct = useDispatch();

    let addItemToCart = (product)=>{
        dispatchToAddProduct(AddItemToCart(product));
        alert(`${product.name} added to cart!`); 
        toast.success(`${product.name} added to cart 🛒`, {
            position: "top-right"
        });       
    }

    const fetchReviews = async () => {
        try {
            const response = await axios.post("http://localhost:9000/order/api/product-reviews", {
                productId: product._id
            });
            setReviews(response.data);
            setShowReviews(true);
        } catch (err) {
            console.error("Failed to fetch reviews:", err);
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={()=>addItemToCart(product)} >Add Item</button>

            <button onClick={fetchReviews}>View Reviews</button>

            {showReviews && (
                <div style={{ marginTop: "10px", padding: "10px", background: "#f9f9f9" }}>
                    <h4>Reviews:</h4>
                    {reviews.length > 0 ? (
                        reviews.map((review, idx) => (
                            <div key={idx} style={{ marginBottom: "8px" }}>
                                <strong>Rating:</strong> {review.rating} / 5 <br />
                                <strong>Comment:</strong> {review.comment} <br />
                                <small><i>By: {review.user}</i> on {new Date(review.date).toLocaleDateString()}</small>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductItemComponent;
