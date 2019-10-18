import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
const Login = props => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })

      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/colors");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <StyledForm>
      <h1>Welcome to the Bubble App!</h1>
      <h3>Please login</h3>
      <Label>username</Label>
      <StyledInput ref={usernameRef} type="text" />
      <br />
      <Label>password</Label>
      <StyledInput ref={passwordRef} type="text" />
      <br />
      <StyledButton onClick={onSubmit}>Submit</StyledButton>
    </StyledForm>
  );
};

export default Login;

const StyledForm = styled.form`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const StyledButton = styled.div`
  background: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;
