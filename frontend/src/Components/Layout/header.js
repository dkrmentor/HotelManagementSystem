import React from "react";
import { Link } from "react-router-dom";
import{ useNavigate} from "react-router-dom"
const Header = () => {
  const Navigate = useNavigate()
  const btnHms = () => {
    Navigate('')
  }
  const btnLogin = () => {
    Navigate("/login")
  }
  const btnAbout = () => {
    Navigate("/about")
    
  }
   return (
    <div className="header">
      <div className="left-header">
        <button onClick={btnHms}>hms</button>
      </div>

      <div className="right-header">
        <button onClick={btnLogin}>
          Login
        </button>

        <button onClick = {btnAbout}>
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
