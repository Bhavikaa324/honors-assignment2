import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
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
      const response = await axios.post("http://localhost:8080/admin/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        // Store the admin token in local storage
        localStorage.setItem("adminToken", token);
        // Redirect to another page after successful login
        history("/admin");
      } else {
        setErrorMessage("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during admin login:", error);
      setErrorMessage("Internal server error. Please try again later.");
    }
  };

  return (
    <div className="loginbox">
      <h1>Admin Login</h1>
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
    </div>
  );
};

export default AdminLogin;
