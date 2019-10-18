import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route exact path="/" component={Login} /> */}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        {/* <Route path="/color" component={BubblePage} /> */}
        <Container />
      </div>
    </Router>
  );
}

export default App;
