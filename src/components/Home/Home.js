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
                <Link to="/home/breakfast" className="breakfast"> <h3 >Breakfast</h3> </Link>
                <h3 className="breakfast">Launch</h3>
                <h3 className="breakfast">Dinner</h3>
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