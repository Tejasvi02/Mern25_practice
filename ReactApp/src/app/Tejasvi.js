import React, {Component} from "react";

export default class TejasviComponent extends Component {
    constructor(props){
        super();
        this.state ={
            name: "Tejasvi",
        };
    }
    changeUserNameEvent = (evt)=>{
        this.setState({
            name: "Updated name"
        })
        evt.preventDefault();
    }

    forceUpdateEvent = () =>{ //trying forceupdated, not recommended, need not use setState
        this.state.name = "Forced Name"
        this.forceUpdate();
    }


    render(){
        return(
            <div>
                <h1>{this.props.header}</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeUserNameEvent}>Change User Name</button>
                <button onClick={this.forceUpdateEvent}>Force Update</button> 
            </div>
            
        )
    }

}
