import React, {Component} from "react";

export default class ApplicationComponent extends Component {

    render(){
        let name = "Joel", x=5, y = 9
        return( //vitual dom or jsx code (javascript like xml structure)
            <div>
                <h1>This is coming from Application Component</h1>
                
                <b>{name}</b>
                <hr />
                <b>Multiply 5*9 = {5*9} </b>
                <hr />
                <b>Sum 5+9 = {5+9} </b>
            </div>            
        )
    }
}