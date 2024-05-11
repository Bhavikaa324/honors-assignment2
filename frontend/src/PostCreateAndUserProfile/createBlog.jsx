import React, { useState } from "react";
import axios from "axios";
import "./createBlog.css";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and content.");
      return;
    }

    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      // Make sure token is present
      if (!token) {
        alert("User not authenticated. Please login.");
        return;
      }

      // Include token in the headers of the POST request
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make a POST request to add the post
      const response = await axios.post(
        "http://localhost:8080/addpost",
        {
          title,
          content,
        },
        config
      );

      console.log(response.data); // Log the response data

      // Clear the form after successful submission
      setTitle("");
      setContent("");
      alert("Post added successfully!");
      history("/home");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post. Please try again later.");
    }
  };

  return (
    <div>
      <div id="dashboard">
        <h1>My Blog</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Share your story"
        ></textarea>
        <button type="submit" id="draftBtn">
          Save as Draft
        </button>
        <button type="submit" id="publishBtn">
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
