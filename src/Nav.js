import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };
  return (
    <div className="Nav">
        <nav>
            <Link style={navStyle} to="/">
                <h4>Love NBA Draft</h4>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/bigBoard">
                    <li>Big Board 2020</li>
                </Link>
                <Link style={navStyle} to="/mockDraft">
                    <li>Mock Draft</li>
                </Link>
                <Link style={navStyle} to="/bigBoardNextYear">
                    <li>Big Board 2021</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;