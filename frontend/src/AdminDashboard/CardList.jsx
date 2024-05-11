import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import './CardList.css';

function CardList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getAllUsers'); // Replace with your actual API endpoint
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="card-list">
        {filteredUsers.map((user, index) => (
          <div key={index} className="card">
            <h1>{user.username}</h1>
            <p>Number of Posts: {user.postCount}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
