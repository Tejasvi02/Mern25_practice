import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../State/Product/ProductAction";
import DisplayProducts from "./DisplayProduct";

let ProductComponent = (props) => {

    let name = useRef(null)
    let price = useRef(null)
    let desc = useRef(null)
    let rating = useRef(null)

    let product = useSelector((state)=>state.productReducer.Product) //product reducer
    let user = useSelector((state) => state.userReducer.user);
    let dispatchProduct = useDispatch();

    //useEffect - reads all the changes that affect the state of the component and then does the job of re-render
    //if we pass the second parameter to initialize the state it will work as - componentDidMount
    //if we dont pass the second parameter to initialize the state it will work as - shouldComponentUpdate
    //if we return a child function then it will work as - componentWillUnMount
useEffect(() => {
    if (isAdmin && name.current && price.current && desc.current && rating.current) {
        name.current.value = product.name || "";
        price.current.value = product.price || "";
        desc.current.value = product.desc || "";
    }
}, [isAdmin, product]);


    let saveProductClick = (evt)=>{
        //creating product data model to be saved in db using product api
        let productToSave = {
            name : name.current.value,
            price : price.current.value,
            desc : desc.current.value,
        }

        alert("We are going to save this product!!! "+ JSON.stringify(productToSave))

        dispatchProduct(saveProduct(productToSave))
        evt.preventDefault();
    }

    //check if the user is admin, only then render the product adding part to all othe user just display the products
     const isAdmin = user && user.userName && user.userName.toLowerCase() === "admin";

    return(
        <div className="col-md-12">
            <h1 className="col-md-12">Product component</h1>

            {isAdmin && (
                <form className={"form componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Product Name</b>
                            <input type="text" className="form-control col-md-6 name" ref={name} maxLength={25} 
                            placeholder="Product Name" />
                        </div>
                        <div className="col-md-12">
                            <b>Price </b>
                            <input type="number" className="form-control col-md-6" ref={price} 
                            placeholder="Product Price" />
                        </div>
                        
                        <div className="col-md-12">
                            <b>Description </b>
                        <input type="text" className="form-control col-md-6" ref={desc} 
                            placeholder="Please Describe the product"  />
                        </div>

                        <input type="button" className={"form-control btn btn-primary col-md-3"} 
                            value={"Save Product"} 
                            onClick={saveProductClick}/>
                    </div>
                </form>
            )}

            {!isAdmin && (
                <div className="alert alert-info col-md-6">
                    <strong>Info:</strong> Only admin users can add or edit products.
                </div>
            )}

            <hr/>
            <DisplayProducts />
        </div>
    )
}

export default ProductComponent;