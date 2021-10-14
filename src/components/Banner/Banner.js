import React from 'react';
import img from "../../images/bannerbackground.png"
const Banner = () => {
    return (
        <div>
            <img className="w-100" src= {img} alt="" />
        </div>
    );
};

export default Banner;