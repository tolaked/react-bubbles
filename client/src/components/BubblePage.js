import React, { useState, useEffect } from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import WithAuth from "../axios/index";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    WithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        setColorList(res.data);
      }, console.log(colorList))
      .catch(err => {
        console.log(err.error);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
