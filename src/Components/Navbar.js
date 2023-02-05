import React from 'react'
import { Link } from "react-router-dom";
function Navbar(){
   //Display the Navbar
    return (
      <div
        style={{
          display: "flex",
          background: "blue",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Food App</h1>
        </Link>

        <Link to="/order" style={{ textDecoration: "none",marginLeft:"1rem",fontSize:"2rem",cursor:"pointer" }}>
          order
        </Link>
      </div>
    );
  }
export default Navbar;