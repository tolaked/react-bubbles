import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div className="App">
        <Container />
      </div>
    </Router>
  );
}

export default App;
