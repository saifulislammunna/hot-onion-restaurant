import React from 'react';
import './Food.css'
const Food = (props) => {
    const {img,icon,arrow,name,description,price} = props.item;
    return (
        <div className="p-5  item">
            <img  className="rounded-3"  src={img} width="300" height="240" alt="" />
             <div>
             
             <div className="d-flex">
             <img   className="w-25 p-1" src= {icon} alt="" />
             <h2 className="item-name fs-3 pt-2"> Name :{name}</h2>
            
             </div>
             
            <p>  {description}</p>  
             </div>
             <h3>{price}</h3>
            <div className="d-flex">
            
             
             <p  >see more <img className="w-25 p-3" src={arrow} alt="" /> </p>
             
            </div>
        </div>
    );
};

export default Food;