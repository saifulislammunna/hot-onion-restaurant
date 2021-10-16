import React from 'react';
import img from "../../images/bannerbackground.png"
const Banner = () => {
    return (
        <div>
            
         <div className="background-image">
         <img  
            className="w-100" src= {img} alt="" />
         </div>
            
        </div>
    );
};

export default Banner;