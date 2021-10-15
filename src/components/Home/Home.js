import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch(`./items.JSON`)
        .then(res => res.json())
        .then(data => console.log(data));
    },[])
    return (
        <div>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;