import Navbar from "./Navbar";
import Button from "./Button";
import "./App.css";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="Admin">
      <Navbar />
      <Button />
      <Outlet />
    </div>
  );
};

export default Admin;
