import React from 'react';

const DinnerFood = (props) => {
    const {img,name,description,price} = props.dinner;
    return (
        <div>
            
              
        <div className="p-5  item">
             
             <img  className="rounded-3"  src={img} width="300" height="240" alt="" />
              <h2 className="item-name fs-3 pt-2"> Name :{name}</h2>
              
             <p>  {description}</p>
             <h3>{price}</h3>
             <button className="btn-danger">Add to Cart</button>
        </div>      
        </div>
    );
};

export default DinnerFood;