import "./App.css";
import Blog from "./Blog.jsx";
import Header from "./Header.jsx";

import Navbar from "./Navbar.jsx";

function Allpost() {
  return (
    <main>
      <Header />
      <Blog />

      <div className="container">
        <Navbar />
      </div>
    </main>
  );
}

export default Allpost;
