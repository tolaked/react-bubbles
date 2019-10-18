import React, { useState, useEffect } from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import WithAuth from "../axios/index";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const initialState = [
  {
    color: "",
    code: {
      hex: ""
    },
    id: ""
  }
];

const BubblePage = () => {
  const [colorList, setColorList] = useState(initialState);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const WithAuthCheck = (Component, props) => {
    if (localStorage.getItem("token")) {
      <Component {...props} />;
    }
    return <Redirect to="/" />;
  };

  useEffect(() => {
    WithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        alert(err.error);
      });
  }, []);

  return (
    <>
      <NavLink exact to="/">
        Login
      </NavLink>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
