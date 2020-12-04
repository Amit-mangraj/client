// @flow
import React, { useContext } from 'react';
import '../App.css';
import { Usercontext } from './../App'
import { Link,useHistory } from 'react-router-dom';

const Navbar = () => {
    const history= useHistory()
    const { state, dispatch } = useContext(Usercontext)
    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.tooltipped');
    //     var instances = M.Tooltip.init(elems, options);
    //   });
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create</Link></li>,
                <button className="btn-floating btn-large waves-effect waves-light red #000000 black darkenen-1 "
                 onClick={() => { localStorage.clear() 
                  dispatch({type:"CLEAR"});   history.push('/signin')}}> <i className="material-icons">input</i>
        </button>
            ]
        }
        else {
            return [<li><Link to="/signIn">SignIn</Link></li>,
            <li><Link to="/signup">SignUp</Link></li>]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={state ? "/" : "/signin"} className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
//this is comment