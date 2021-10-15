import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css"
const Login = () => {

    const {user, signInUsingGoogle} =useFirebase();
    return (
        <div className="login-form">
             <div>
                 <h2>Log in</h2>
                 <form  >
                     <input type="email" name="" id="" placeholder="Your  Email"/>
                     <br />
                     <input type="password" name="" id="" />
                     <br />
                     <input className="btn-regular" type="submit" value="Submit" />
                 </form>
                 <p>new to hot onion restaurant? <Link to="/signup">Sign Up</Link></p>
                 <div>----------------or----------------</div>
                 <button 
                  className="btn-regular"
                  onClick={signInUsingGoogle}
                  >  Google Sign In</button>
             </div>
             
        </div>
    );
};

export default Login;