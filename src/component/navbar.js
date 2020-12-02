// @flow
import * as React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
const Navbar = () =>{
  return (
      <nav>
    <div className="nav-wrapper">
      <Link to="/home" className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/signIn">SignIn</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </div>
  </nav>
  );
};
export default Navbar;
