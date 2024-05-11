import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (!username.trim() || !password.trim()) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        username,
        password,
      });

      if (!response.data.token) {
        setErrorMessage(response.data.message);
        return;
      }

      // Save token to local storage
      localStorage.setItem("token", response.data.token);

      // Redirect to home route
      history("/home");
    } catch (error) {
      console.error(error);
      setErrorMessage("Internal server error.");
    }
  };

  return (
    <div className="loginbox">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input type="submit" value="Sign In" />
      </form>
      <Link to={"/signup"}>Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Login;
