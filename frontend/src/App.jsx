import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./PostCreateAndUserProfile/createBlog";
import Allpost from "./HomePage/allpost";
import Login from "./LoginAndSignup/login";
import Signup from "./LoginAndSignup/signup";
import AdminLogin from "./LoginAndSignup/adminlogin";
import Singlepost from "./HomePage/onepost";
import Admin from "./AdminDashboard/Admin";
import CardList from "./AdminDashboard/CardList";
import BlogList from "./AdminDashboard/BlogList";
import ProfilePage from "./PostCreateAndUserProfile/profilePage";
import EditProfile from "./PostCreateAndUserProfile/editProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/createblog" element={<CreateBlog />} />
          <Route exact path="/home" element={<Allpost />} />
          <Route exact path="/post/:id" element={<Singlepost />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userprofile" element={<ProfilePage />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="manage-users" element={<CardList />} />
            <Route path="manage-posts" element={<BlogList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
