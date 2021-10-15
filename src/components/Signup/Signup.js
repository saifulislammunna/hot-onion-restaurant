import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
const Signup = () => {
    return (
        <div>
              <div>
                  <h2>Register: Creacte Account</h2>
                  <form>
                      <input type="name" name="" id="" placeholder="name" />
                      <br />
                      <input type="email" name="" id="" placeholder="email" />
                      <br />
                      <input type="password" name="" id="" placeholder="password" />
                      <br />
                      <input type="password" name="" id="" placeholder="confirm password" />
                       <br />
                      <input className="btn-regular" type="submit" value="Sign in" />

                  </form>
                  <p>Already have an account? <Link to="/login">Log In</Link></p>
                  <div>-----------or----------</div>
                  <button className="btn-regular">Google Sign In</button>

              </div>
        </div>
    );
};

export default Signup;