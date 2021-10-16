import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo  from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import './Header.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const {user, logOut} = useFirebase();
    return (
        <div className="topbar">
           <div className="wrapper">
             <div className="left">
                <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
              </div>
              <div className="right">
             
                <div className="item-container">
                    <div>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                <nav>
                 {
                   user.email ? <button onClick={logOut} className="log-in">Log out</button>
                    :
                   <NavLink className="log-in" to ="/login">Log in</NavLink>}
                 <NavLink  className="sign-up"  to="/signup"><button className="btn-regular">Sign up</button> </NavLink>
                </nav>
                          
                         
                        
                </div>
              </div>
           </div>
        </div>
    );
};

export default Header;