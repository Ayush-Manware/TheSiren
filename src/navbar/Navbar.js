import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="home">
          <Link to="/"> Home </Link>
        </div>
        <div className="bollywood">
          <Link to="/Bollywood">Bollywood</Link>
        </div>
        <div className="technology">
          <Link to="/Technology">Technology</Link>
        </div>
        <div className="hollywood">
          <Link to="/Hollywood">Hollywood</Link>
        </div>

        <div className="fitness">
          <Link to="/Fitness">Fitness</Link>
        </div>

        <div className="food">
          <Link to="/Food">Food</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
