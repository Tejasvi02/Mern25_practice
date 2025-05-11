//- Create a functional component name Login
//- Use div Baased Structure to show text boxes for login details needs to be 4 
//- Create one event handler and bind the state change with it to call re-render
//- Use one of the textbox to change the data without using event handler, but using inline code

//here we have used form based 
import React, { useState } from "react";
//this is the functional component it is imported in application.js

const Login = () => {
  // Individual states for each input field
  let [userName, updateUserName] = useState("");
  let [password, updatePassword] = useState("");
  let [email, updateEmail] = useState("");
  let [phone, updatePhone] = useState("");

  // Unified change handler based on name attribute
  let handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userName") updateUserName(value);
    else if (name === "password") updatePassword(value);
    else if (name === "email") updateEmail(value);
  };

  // Handle form submission
  let handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Logged in: Username: ${userName}`);
  };

  return (
    <>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit} className="form col-md-12">
        <div className="form-control">
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            value={userName}
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter phone"
            // Inline handler to update state directly without function reference
            onChange={(e) => updatePhone(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
