import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home.js";
import Login from "./Components/Login/login.js";
import About from "./Components/About/about.js";
// import Register from "./Components/Register/register.js"
import Profile from "./Components/Profile/profile.js";
import UpdateProfile from "./Components/UpdateProfile/updateProfile.js";
import Header from "./Components/Layout/header.js";
import Footer from "./Components/Layout/footer.js";

function App() {
  return (
    <div>
     <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />

            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Register" element={<Register />}/> */}
            <Route path="/Profile" element={<Profile />} />
            <Route path="/UpdateProfile/:id" element={<UpdateProfile />} />
          </Routes>
        </Router>
        <Footer />
    
    </div>
  );
}

export default App;
