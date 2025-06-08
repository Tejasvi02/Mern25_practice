import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Footer from "./CommonComponent/FooterComponent";
import Header from "./CommonComponent/HeaderComponent";
import Home from "./CommonComponent/HomeComponent";
import NotFound from "./CommonComponent/NotFoundComponent";
import About from "./CommonComponent/AboutComponent.jsx";
//import UserComponent from "./ApplicationComponent/User/UserComponent.jsx";
//import UserComponent from "./ApplicationComponent/User/UserContainer.js";
import UserHookComponent from "./ApplicationComponent/User/UserHooksComponent.js"
import ProductComponent from "./ApplicationComponent/Product/ProductComponent.js";
import CartComponent from "./ApplicationComponent/Cart/CartComponent";
import Checkout from "./ApplicationComponent/Checkout/CheckoutComponent.js";
import CouponComponent from "./ApplicationComponent/Coupon/CouponComponent"; 
import Hooks from "./Hooks/UnderstandingHooks.js";

export default class ApplicationComponent extends Component {

    /**
     *
     */
    constructor(props) {
        super();
        this.state = {
            userName : "react user ",
            user : {
                    userName : "Test User",
                    userAge : 19
                    }
        }
        this.sessionName = "MERNStack - React Props"
    }

    changeUserNameEvent = (userName)=>{
        this.setState({
            userName : userName
        })
        console.log(this.state.userName)

        evt.preventDefault();
    }


    render(){
        
        console.log("Render method is called!!")
        return( //vitual dom or jsx code (javascript like xml structure)
            <Router>                
                <div className="topdiv">
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={this.state.user} />}/>
                            <Route path="home" element={<Home user={this.state.user} />}/>
                            <Route path="userhook" element={<UserHookComponent />}/>
                            <Route path="product" element={<ProductComponent />}/>
                            <Route path="checkout" element={<Checkout />}/>
                            <Route path="cart" element={<CartComponent />}/>
                            <Route path="coupon" element={<CouponComponent />} />
                            <Route path="about" element={<About />}/>
                            <Route path="hook" element={<Hooks />}/>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer sessionName={this.sessionName}/>
                </div>    
            </Router>      
        )
    }
}
