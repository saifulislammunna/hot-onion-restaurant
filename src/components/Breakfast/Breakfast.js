/* import React, { useEffect, useState } from 'react';
import BreakfastFood from '../BreakfastFood/BreakfastFood';

const Breakfast = () => {
    
    const [breakFasts, setBreakFasts ] = useState([]);
    useEffect( () => {
        fetch(`./breakfast.json`)
        .then(res => res.json())
        .then(data => console.log(data));
    },[])
    return (
        <div className="items">
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

export default Breakfast; */