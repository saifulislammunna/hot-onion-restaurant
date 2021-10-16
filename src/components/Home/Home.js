 
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
 

import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Cart from '../Cart/Cart';
 
import Food from '../Food/Food';
import './Home.css'
const Home = () => {

    const [items, setItems] = useState([]);
    // const [cart,setCart] = useState([]);


    useEffect( () => {
        fetch(`./items.json`)
        .then(res => res.json())
        .then(data => setItems(data));
    },[])
    return (
        <div>
            {/* <div className="time-to-eat-food">
                <Link to="/breakfast" className="breakfast"> <h3    >Breakfast  </h3> </Link>
                <Link to="/lunch" className="breakfast"> <h3    >Lunch </h3> </Link>
                <Link to="/breakfast" className="breakfast"> <h3    >Dinner </h3> </Link>
                 
            </div> */}
            <div className="items">

                <Breakfast></Breakfast>
            {/* <div className="items-container">
            {
                    items.map(item => <Food 
                    item = {item}
                    key = {item.img}
                    >
    
                    </Food>)
                }
            </div> */}
            </div>
            <button className="btn-danger">Checkout your food</button>

            <div>
               <div className="p-5">
               <h1 className="text-start ">Why you choose us</h1>
                <p className="text-start  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque debitis consequatur, magni corporis enim.</p>
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
            {/* <Button>shop</Button> */}
            {/* <Button> shop</Button> */}
            {/* <div className="cart-container">
                 <Cart cart={cart}>
                  
                     
                      
                 </Cart>
               </div> */}
        </div>
    );
};

export default Home;