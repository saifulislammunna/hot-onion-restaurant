import React from 'react';
import { Link } from 'react-router-dom';
 
import './BreakfastFood.css'
const BreakfastFood = (props) => {
     
        const {img,name,description,price,id} = props.breakFast;
        const url = `/breakfast/${id}`;
    return (
        <Link className="link" to={url} >
        <div>
             
             <div className="p-5  item">
             
             <img  className="rounded-3"  src={img} width="300" height="240" alt="" />
              <h2 className="item-name fs-3 pt-2"> Name :{name}</h2>
              
             <p>  {description}</p>
             <h3>{price}</h3>
            
            {/*  <button className="btn-danger">Add to Cart</button> */}
             
        </div>   
            

        </div>
        </Link>
       
    );
};

export default BreakfastFood;