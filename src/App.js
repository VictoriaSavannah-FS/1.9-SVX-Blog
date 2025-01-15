import logo from "./logo.svg";
import "./App.css";
// pages
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
// import routes/router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import css styles
import "./styles.css";
// importing myheadshot / picture
import headshot1 from "./imgs/headshot1.jpeg";

function App() {
  return (
    <Router>
      <div>
        <header className="header-container">
          <img src={headshot1} alt="My Headshot" className="headshot" />
          <h1 className="title">SVX</h1>
          <nav>
            <a href="/">Home</a> | <a href="/posts">Posts</a>
          </nav>
        </header>
        <Routes>
          {/* route to pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
      <footer className="footer">
        <p>◊ 2025 SVX Blog | All rights reserved ◊</p>
      </footer>
    </Router>
  );
}

export default App;
