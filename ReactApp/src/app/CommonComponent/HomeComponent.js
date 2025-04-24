import React, { Component } from "react";

export default class Home extends Component {

    constructor(props){
        super();
    }

    //render life cycle method must be implemented to return the view/virtual dom/jsx
    render(){
        return(
            <h1>Home Component</h1>    
        )
    }
}