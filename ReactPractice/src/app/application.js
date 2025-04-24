import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './CommonComponent/HomeComponent';
import MyComponent from './CommonComponent/MyComponent';

export default class ApplicationComponent extends Component  {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tej/:email/:nextSession" element={<MyComponent />} />
        </Routes>
      </Router>
    );
  }
}

