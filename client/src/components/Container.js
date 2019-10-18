import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Login";
import styled from "styled-components";
import BubblePage from "./BubblePage";

function Container(props) {
  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const withAuthCheck = (Component, props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };

  return (
    <StyledDiv>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Login
        </NavLink>
        &nbsp;
        <NavLink exact to="/colors" activeClassName="active">
          Colors
        </NavLink>
        &nbsp;
        <button onClick={Logout}>Logout</button>
      </nav>

      <main>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/colors"
          component={props => withAuthCheck(BubblePage, props)}
        />
      </main>
    </StyledDiv>
  );
}

export default withRouter(Container);

const StyledDiv = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  background: Navajo white;
`;
