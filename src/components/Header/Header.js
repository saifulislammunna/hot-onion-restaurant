import React from 'react';
import logo  from '../../images/logo2.png';
import './Header.css';
const Header = () => {
    return (
        <div className="topbar">
           <div className="wrapper">
             <div className="left">
                <img className="logo" src={logo} alt="" />
              </div>
              <div className="right">
                  <h2>this is left header</h2>
              </div>
           </div>
        </div>
    );
};

export default Header;