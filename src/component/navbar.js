// @flow
import React,{useContext} from 'react';
import '../App.css';
import {Usercontext} from './../App'
import {Link} from 'react-router-dom';

const Navbar = () =>{
    const {state,dispatch}= useContext(Usercontext)
    const renderList=()=>{
        if(state){
            return [
                <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create</Link></li>
            ]
        }
        else{
            return[<li><Link to="/signIn">SignIn</Link></li>,
            <li><Link to="/signup">SignUp</Link></li>]
        }
    }
  return (
      <nav>
    <div className="nav-wrapper">
      <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>
  </nav>
  );
};
export default Navbar;
