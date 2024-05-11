import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (!name.trim() || !username.trim() || !password.trim()) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/user/signin", {
        name,
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
    <div className="loginbox1">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter Name" required />
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
        <input type="submit" value="Sign Up" />
      </form>
      <Link to={"/login"}>Already have an account? Login</Link>
    </div>
  );
};

export default Signup;
