import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Singlepost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/getOnePosts/${id}`
        );
        setPost(response.data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; // Display a loading indicator while fetching the post
  }

  const { title, uploader, content } = post;

  return (
    <main>
      <Header />
      <h2 className="blogtitle">{title}</h2>
      <p className="info">
        <a className="user">{uploader.username}</a>
        <time>{new Date().toLocaleString()}</time>
      </p>
      <p className="description">{content}</p>
      <div className="container">
        <Navbar />
      </div>
    </main>
  );
}
