import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../public/assets/home.png";
import logo2 from "../../public/assets/create-blog.png";
import logo3 from "../../public/assets/user.png";

const Navbar = () => {
  // Check if token is present in localStorage
  const token = localStorage.getItem("token");

  // Define paths based on the presence of the token
  const createBlogPath = token ? "/createblog" : "/login";
  const userProfilePath = token ? "/userprofile" : "/login";

  return (
    <div className="navbar">
      <table>
        <tbody>
          <tr>
            <th>
              <Link to={"/home"}>
                <img src={logo1} alt="Home" />
              </Link>
            </th>
            <th>
              <Link to={createBlogPath}>
                <img src={logo2} alt="Create Blog" />
              </Link>
            </th>
            <th>
              <Link to={userProfilePath}>
                <img src={logo3} alt="User Profile" />
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Navbar;
