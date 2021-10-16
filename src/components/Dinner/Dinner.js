import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DinnerFood from '../DinnerFood/DinnerFood';

const Dinner = () => {
    const [dinners, setDinners ] = useState([]);
    useEffect( () => {
        fetch(`./dinner.json`)
        .then(res => res.json())
        .then(data =>  setDinners(data));
    },[])
    return (
        <div  >
        <div className="time-to-eat-food">
         <Link to="/breakfast" className="breakfast"  > <h3    >Breakfast  </h3> </Link>
         <Link to="/lunch" className="breakfast"  > <h3    >Lunch  </h3> </Link>
         <Link to="/dinner" className="breakfast"  > <h3    >Dinner</h3> </Link>
            
         </div>
        <div className="items-container">
        {
                dinners.map(dinner => <DinnerFood
                    dinner = {dinner}
                key = {dinner.img}
                >

                </DinnerFood >)
            }
        </div>
        </div>
    );
};

export default Dinner;