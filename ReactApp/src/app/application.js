import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css"
import Footer from  "./CommonComponent/FooterComponent"
//import TejasviComponent from "./Tejasvi";
import Header from "./CommonComponent/HeaderComponent";
import Home from "./CommonComponent/HomeComponent";
import NotFound from "./CommonComponent/NotFoundComponent";
import About from "./CommonComponent/AboutComponent";

export default class ApplicationComponent extends Component {

    constructor(props){
        super();
        this.state ={
            userName: "Edhoi",
            userAddress: "abc"
        }
    }

    changeUserNameEvent = (evt) => {
        // this.state.userName ="Tej" -  in this methhod, virtual dom will not be created
        this.setState({
            userName: `Dat-
            This is coming from Application Component
            This is coming from Application Component`
        })
        this.sessionName = "The session is on react and state and its virtual dom coupling!!!"
        console.log(this.state.userName)
        //alert("User name updated!")
        evt.preventDefault();
    }

    //update life cycle method
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState)
        if(this.state.userName == nextState.userName){
            return false; //render method is not called if value is not updated
        } else {
            return true
        }
    }

    render(){     
        console.log("Render method is called!!")
        return( //vitual dom or jsx code (javascript like xml structure)
            <Router>
                <div className="topdiv">
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={this.state.user} />}/>
                            <Route path="home" element={<Home />}/>
                            <Route path="about" element={<About />}/>
                            <Route path="about/:id" element={<About />}/>
                            <Route path="about/:id/:name" element={<About />}/>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer sessionName={this.sessionName}/>
                </div>    
            </Router>      
        )
    }
}