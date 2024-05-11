import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import SearchBar from './SearchBar';
import './BlogList.css'; // Import the CSS file for styling

function BlogList() {
  // State to store the blogs
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Function to fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getAllPosts"); 
      setBlogs(response.data);
      setFilteredBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to handle search
  const handleSearch = (searchTerm) => {
    // Filtering blogs based on the username
    const filtered = blogs.filter((blog) =>
      blog.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div>
      {/* SearchBar component */}
      <SearchBar handleSearch={handleSearch} />

      {/* Blog cards */}
      <div className="blog-list card-list">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card card">
            <h1>{blog.title}</h1>
            <h3>By: {blog.username}</h3>
            <p>{blog.description}</p>
            <div className="buttons">
              <button>View Blog</button>
              <button>Delete Blog</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
