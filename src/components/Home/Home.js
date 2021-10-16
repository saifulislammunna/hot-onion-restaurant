import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
import Food from '../Food/Food';
import './Home.css'
const Home = () => {

    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch(`./items.json`)
        .then(res => res.json())
        .then(data => setItems(data));
    },[])
    return (
        <div>
            <div className="time-to-eat-food">
                <Link to="/breakfast" className="breakfast"> <h3    >Breakfast  </h3> </Link>
                <Link to="/lunch" className="breakfast"> <h3    >Lunch </h3> </Link>
                <Link to="/breakfast" className="breakfast"> <h3    >Dinner </h3> </Link>
                 
            </div>
            <div className="items">
            <div className="items-container">
            {
                    items.map(item => <Food 
                    item = {item}
                    key = {item.img}
                    >
    
                    </Food>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;