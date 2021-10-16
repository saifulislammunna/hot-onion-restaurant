import React from 'react';
import './Banner.css'
 
/* import img from "../../images/bannerbackground.png" */
 
const Banner = () => {
    return (
        <div>
            
         <div className="background-image d-flex  align-items-center justify-content-center">
             <input type="search" name="" placeholder="search your food items" id="" />
              <button className="rounded btn-danger">Search</button>
         {/* <img  
            className="w-100" src= {img} alt="" /> */}
         </div>
            
        </div>
    );
};

export default Banner;