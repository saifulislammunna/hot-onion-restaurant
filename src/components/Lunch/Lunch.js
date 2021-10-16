import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LunchFood from '../LunchFood/LunchFood';

const Lunch = () => {
    const [lunchs, setLunchs ] = useState([]);
    useEffect( () => {
        fetch(`./lunch.json`)
        .then(res => res.json())
        .then(data => setLunchs(data));
    },[])
    
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
                    >
    
                    </LunchFood >)
                }
            </div>
        </div>
    );
};

export default Lunch;