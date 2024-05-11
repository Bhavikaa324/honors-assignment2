import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllPosts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog">
      {posts.map((post, index) => (
        <Link
          to={`/post/${post._id}`}
          className="blogs"
          style={{
            borderBottom: "1px solid black",
          }}
          key={index}
        >
          <h2>{post.title}</h2>
          <p className="info">
            <a className="user">{post.uploader.username}</a>
            <time>{new Date(post.createdAt).toLocaleString()}</time>
          </p>
          <p className="description">{post.content}</p>
        </Link>
      ))}
    </div>
  );
}
