import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import ComponentTypes from "./ComponentTypes";
import Footer from "./FooterComponent";

//export default class Home extends Component {

//PureComponent has inbuilt implementation of shouldComponentUpdate to compare and check at least for one state or props change
//before making a render call
export default class Home extends PureComponent {

    //creation life cycle starts
    constructor(props){
        super();
        //initializing the state/props/fields etc
        this.state = {
            userName : props.user.userName,
            userAge : props.user.userAge,
            userAddress : "No Space on earth!!",
            userData : props.userData
        }
        this.counter = 100;        
        this.intervalObject = null;
        //this.incrementCounter();

        this.userNameRef = React.createRef();//creates a reference pointer so that html can be accessed with this 

        //html will not be present so this can't be accessed in contructor LC method
        //this.userNameRef.current.value = "Value has been updated"
        //this.userNameRef.current.focus();
    }
    
    //this creation life cycle method ensure html is rendered on browser we can make call to fetch data and bind it to html element
    componentDidMount(){
        console.log("componentDidMount" )

        // setTimeout(()=>{
        //     this.userNameRef.current.value = "Value has been updated"
        //     this.userNameRef.current.focus();
        // },2000)
        
    }

    incrementCounter = ()=>{
        this.intervalObject = setInterval(()=> {//continous loop
                this.setState(
                    {userAge : this.counter})
                //console.log(this.state.counter)
                this.counter++;
                console.log(this.counter)
                
            }, 2000);//runs every  2 seconds forever - unless cleared
    }

    changeUserAddressEvent = (evt)=>{
        //this api is tightly coupled with react renderer to create new virtual dom using all the update life cycle methods
        this.setState({
            userAddress : "Somewhere on earth!!!"
        })

        //when we update the state using force update it directly calls render to create virtual dom
        // this.state.userAddress = "Somewhere on earth!!!"
        // this.forceUpdate()

        evt.preventDefault();
    }

    //update life cycle methods called after render
    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");

        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        // console.log("prevState",prevState);
        // console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }

    //destruction life cycle method
    //it must be used to clear all the api calls, reference that are used in current component
    componentWillUnmount(){
        
        console.log("componentWillUnmount is called")
        //clearInterval(this.intervalObject);
    }

    //defining the event handler to be executed by child component
    eventToBeCalledFromChild = (userAge) => {
        this.setState({
            userAge
        })
    }

    //render life cycle method must be implemented to return the view/virtual dom/jsx
    render(){
        console.log("Home Render!!!")
        return(
            <div className={"loadimage form"} style={{border:"1px solid red"}}>
                <h1>{this.state.title}</h1>
                <b className="feature">{"Product Feature's :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>                
                    <li>Allow user's to add to cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                    <li>Allow users to cancel the order.</li>
                    <li>Allow users to reorder the cart.</li>
                    <li>Add products/items to create product collection.</li>
                    <li>Allow users to give ratings to each product.</li>
                    <li>Have notifications on top right with logout.</li>
                </ul>
            </div>
        )
    }
}
Home.propTypes = {
    userName : PropTypes.string.isRequired,
    user : PropTypes.object.isRequired,
    // userAge : PropTypes.number.isRequired,
    // userData : PropTypes.string.isRequired
}