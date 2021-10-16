 
 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreakfastFood from '../BreakfastFood/BreakfastFood';
import './Breakfast.css'
const Breakfast = () => {
    
    const [breakFasts, setBreakFasts ] = useState([]);
    useEffect( () => {
        fetch(`./breakfast.json`)
        .then(res => res.json())
        .then(data => setBreakFasts(data));
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
                    breakFasts.map(breakFast => <BreakfastFood
                        breakFast = {breakFast}
                    key = {breakFast.img}
                    >
    
                    </BreakfastFood >)
                }
            </div>
              
            </div>
    );
};

export default Breakfast;