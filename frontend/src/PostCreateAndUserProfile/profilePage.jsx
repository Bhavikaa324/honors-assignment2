import React, { useEffect } from "react";
import "./profilePage.css";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  useEffect(() => {
    // Dummy data for blogs
  }, []);

  const blogs = [
    {
      title: "First Blog",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Second Blog",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Third Blog",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <div>
      <div id="dashboard">
        <h1>My Blog</h1>
      </div>

      <div className="container">
        <div className="profile">
          <h2>Name</h2>
          <div className="profile-info">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          </div>
          <button className="edit-profile-btn">
            <Link to={"/editprofile"}>Edit Profile</Link>
          </button>
        </div>
        <div className="blog-section">
          <h2>My Blogs</h2>
          <div className="blog-list">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-item">
                <h3>{blog.title}</h3>
                <p>{blog.content.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
