import React from 'react';
import './Banner.css'
 
/* import img from "../../images/bannerbackground.png" */
 
const Banner = () => {
    return (
        <div>
            
         <div className="background-image d-flex  align-items-center justify-content-center">
             <h1>Best food waiting for your belly </h1>
             <div className="d-flex">
             <input className="w-100" type="search" name="" placeholder="search your food items" id="" />
             <button className="rounded btn-danger">Search</button>
             </div>
         {/* <img  
            className="w-100" src= {img} alt="" /> */}
         </div>
         
            
        </div>
    );
};

export default Banner;