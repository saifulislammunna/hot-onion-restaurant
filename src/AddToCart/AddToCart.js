import React from 'react';

const AddToCart = (props) => {
    const {foodAdded}= props;
   console.log({foodAdded});
    return (
        <div>
              <span>{props.foodAdded.length} </span>
        </div>
    );
};

export default AddToCart;