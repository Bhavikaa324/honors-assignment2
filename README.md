# honors-assignment2
# Blog-website

This is a blog website built with:

* Frontend: React
* Backend: Node.js Express
* Database: MongoDB[cluster]

## Frontend (React)

The frontend uses React, a JavaScript library for building user interfaces. It leverages components for reusable UI elements.

**Components:**

* CreateBlog: Create new blog posts.
* Allpost: Display a list of all blog posts.
* Login: Login to the website.
* Signup: Sign up for an account.
* AdminLogin: Admin login access.
* Singlepost: View a single blog post.
* Admin: Admin dashboard.
    * CardList: List of users (Admin view).
    * BlogList: List of blog posts (Admin view).
* ProfilePage: User profile view.
* EditProfile: Edit user profile details.

## Backend (Node.js, Express)

The backend utilizes Node.js, a JavaScript runtime environment, and Express, a web framework for building web applications in Node.js. It handles API requests from the frontend and interacts with the database.

## Database (MongoDB)

MongoDB, a NoSQL database, stores data in flexible JSON-like documents.

## Routes

**Frontend Routes**

* `/`: Displays all blog posts.
* `/createblog`: Creates a new blog post.
* `/post/:id`: Views a single blog post.
* `/signup`: Signs up for an account.
* `/login`: Logs in to the website.
* `/userprofile`: Shows the user's profile page.
* `/editprofile`: Allows editing user profile.
* `/adminlogin`: Admin login access.
* `/admin`: Admin dashboard with nested routes:
* `/admin/manage-users`: Lists users (Admin view).
* `/admin/manage-posts`: Lists blog posts (Admin view).

**Backend Routes (API)**

These routes are handled by the Express application and are typically accessed through AJAX requests from the frontend.

* **POST /api/auth/signup**: Route for user signup.
* **POST /api/auth/login**: Route for user login.
* **GET /api/posts**: Route to retrieve all blog posts.
* **GET /api/posts/:id**: Route to retrieve a single blog post (replace `:id` with the actual post ID).
* **POST /api/posts**: Route to create a new blog post.
* **PUT /api/posts/:id**: Route to update an existing blog post (replace `:id` with the actual post ID).
* **DELETE /api/posts/:id**: Route to delete a blog post (replace `:id` with the actual post ID).

**Explanation:**

* `*` in the route path indicates the default route for the frontend.
* `:id` in the route path represents a dynamic parameter that captures the post ID for single post retrieval and update/delete operations.
* `**POST**`, `**GET**`, `**PUT**`, and `**DELETE**` are HTTP methods used for different actions:
    * `**GET**`: Retrieves data from the server.
    * `**POST**`: Creates new data on the server.
    * `**PUT**`: Updates existing data on the server.
    * `**DELETE**`: Deletes data from the server.
* `/api` prefix is commonly used to denote API endpoints in web applications.

**Note:** These backend routes are typically not directly accessed by users in the browser. They are used by the frontend application through AJAX requests to interact with the server.

## Getting Started

**Prerequisites:** Node.js and npm (or yarn)

1. Clone this repository.
2. Install dependencies for frontend:

   ```bash
   cd frontend
   npm install

3. Install dependencies for backend:

   ```bash
   cd backend
   npm i

## Runnig this project 

1. For frontend:

   ```bash
   cd frontend
   npm run dev

localhost will open at port no. 5173

2. For backend:

   ```bash
   cd backend
   node index.js


## Technologies Used
* React
* Node.js
* Express
* MongoDB
* React Router
* Mongoose

## For Admin Usage 

# Username :  
            admin
# Password : 
            admin123

# Note :
Feel free to adjust the content as needed and add any additional information you think would be helpful!