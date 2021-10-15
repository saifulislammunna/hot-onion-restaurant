import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo  from '../../images/logo2.png';
 
import './Header.css';
const Header = () => {
    return (
        <div className="topbar">
           <div className="wrapper">
             <div className="left">
                <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
              </div>
              <div className="right">
                <div className="item-container">
                <nav>
                 <NavLink className="log-in" to ="/login">Log in</NavLink>
                 <NavLink  className="sign-up"  to="/signup"><button className="btn-regular">Sign up</button> </NavLink>
                </nav>
                          
                         
                        
                </div>
              </div>
           </div>
        </div>
    );
};

export default Header;