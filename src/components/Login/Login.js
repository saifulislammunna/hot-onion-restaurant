import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-form">
             <div>
                 <h2>Log in</h2>
                 <form  >
                     <input type="email" name="" id="" placeholder="Your  Email"/>
                     <br />
                     <input type="password" name="" id="" />
                     <br />
                     <input type="submit" value="Submit" />
                 </form>
                 <p>new to hot onion restaurant? <Link to="/signup">Sign Up</Link></p>
                 <div>----------------or----------------</div>
                 <button className="btn-regular">Google Sign In</button>
             </div>
             
        </div>
    );
};

export default Login;