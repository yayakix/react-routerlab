import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="title">IStonks</div>
        </Link>
        <Link to="/about">
          <div className="navitem">About</div>
        </Link>
        <Link to="/stonks">
          <div className="navitem">Stonks</div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
