import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <div className="button-container">
      <Link to="manage-users" className="custom-button">
        Manage a User
      </Link>
      <Link to="manage-posts" className="custom-button">
        Manage a Post
      </Link>
    </div>
  );
};

export default Button;
