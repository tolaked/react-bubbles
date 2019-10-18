import React, { useRef } from "react";
import axios from "axios";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const onSubmit = () => {
    axios
      .post("http://localhost:8000", {
        username: usernameRef.current.value,
        passwordRef: usernameRef.current.value
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
    <form>
      <h1>Welcome to the Bubble App!</h1>
      <label>usernameRef</label>
      <input ref={usernameRef} type="text" />
      <br />
      <label>password</label>
      <input ref={passwordRef} type="text" />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};

export default Login;
