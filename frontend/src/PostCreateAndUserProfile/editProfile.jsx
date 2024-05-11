import React, { useState } from 'react';
import './editProfile.css'; // Import CSS file

function EditProfile() {
    const [formData, setFormData] = useState({
        name: '',
        about: '',
        oldPassword: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for handling form submission here
        console.log(formData); // Just for demonstration, you can replace it with your actual logic
    };

    return (
        <>
            <div className="edit-dashboard">
                <h1>My Blog</h1>
                </div>
            <div className="edit-container">
                <form id="editProfileForm" onSubmit={handleSubmit}>
                    <h2>Edit Profile</h2>
                    <div className="edit-form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="edit-form-group">
                        <label htmlFor="about">About:</label>
                        <textarea id="about" name="about" value={formData.about} onChange={handleChange}></textarea>
                    </div>
                    <div className="edit-form-group"><h3>Change Password: </h3></div>
                    <div className="edit-form-group">
                        <label htmlFor="oldPassword">Old Password:</label>
                        <input type="password" id="oldPassword" name="oldPassword" value={formData.oldPassword} onChange={handleChange} />
                    </div>
                    <div className="edit-form-group">
                        <label htmlFor="newPassword">New Password:</label>
                        <input type="password" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                    </div>
                    <button type="submit" id="saveChangesBtn">Save Changes</button>
                </form>
            </div>
        </>
    );
}

export default EditProfile;
