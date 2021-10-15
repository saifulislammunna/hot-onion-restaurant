import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Food from '../Food/Food';
import './Home.css'
const Home = () => {

    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch(`./items.JSON`)
        .then(res => res.json())
        .then(data => setItems(data));
    },[])
    return (
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
    );
};

export default Home;