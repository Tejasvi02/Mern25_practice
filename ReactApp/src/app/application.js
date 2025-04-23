import React, {Component} from "react";
import Footer from  "./CommonComponent/FooterComponent"
import TejasviComponent from "./Tejasvi";

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
        let name = "Joel", x=5, y = 9
        
        return( //vitual dom or jsx code (javascript like xml structure)
            <div>
                <TejasviComponent header = {"Header from Application Component to Tejasvi"}></TejasviComponent>
                <h1>This is coming from Application Component</h1>
                <b>{name}</b>
                <hr />
                <b>Multiply 5*9 = {5*9} </b>
                <hr />
                <b>Sum 5+9 = {5+9} </b>
                <hr />
                <b>{this.state.userName}</b>
                <hr />
                <Footer sessionName={this.sessionName}/> 
                {/* binding event to a button in react component */}
                <button onClick={this.changeUserNameEvent}>Change User Name</button>
            </div>            
        )
    }
}