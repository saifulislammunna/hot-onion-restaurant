import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../../AddToCart/AddToCart';
import Header from '../Header/Header';
 
import LunchFood from '../LunchFood/LunchFood';

const Lunch = () => {
    const [lunchs, setLunchs ] = useState([]);
    
    useEffect( () => {
        fetch(`./lunch.json`)
        .then(res => res.json())
        .then(data => setLunchs(data));
    },[])

    const [foodAdded , setFoodAdded] = useState([]);

    const handleFoodAdded = (lunch) => {
      const newFoodAdded = [...foodAdded,  lunch];
      setFoodAdded(newFoodAdded);
   }
    
    return (
        <div>
            <div className="time-to-eat-food">
             <Link to="/breakfast" className="breakfast"  > <h3    >Breakfast  </h3> </Link>
             <Link to="/lunch" className="breakfast"  > <h3    >Lunch  </h3> </Link>
             <Link to="/dinner" className="breakfast"  > <h3    >Dinner</h3> </Link>
             </div>
             <div className="items-container">
            {
                    lunchs.map(lunch => <LunchFood
                         lunch= {lunch}
                    key = {lunch.img}
                    handleFoodAdded ={handleFoodAdded}
                    >
    
                    </LunchFood >)
                }
            </div>
            <AddToCart  foodAdded ={foodAdded} ></AddToCart>
        </div>
    );
};

export default Lunch;