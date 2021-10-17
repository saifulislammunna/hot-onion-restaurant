import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BreakFastDetails.css';


const BreakFastDetails = ( ) => {
     
    const {id} = useParams();
    const [breakFast,setBreakFast] = useState( []);
    // console.log(params);
    useEffect(()=>{
         
        fetch(`https://raw.githubusercontent.com/saifulislammunna/hot-onion-restaurant/main/public/breakfast.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
               const selected = data.find (food => food.id == id)
               console.log(selected) 
               
               setBreakFast(selected);
        });
    },[])
   /*  const temp = breakFast?.img?.substring(1,breakFast.img.length)
    const img = `../../../public/${temp}` */
    return (
        <div>
            <h3> Details of: {id}</h3>
             <img src={breakFast.img}  alt="" />
             <h1>{breakFast.name} </h1>
             <p>{breakFast.description}</p>
             <h3>{breakFast.price}</h3>
            
            
            
        </div>
    );
};

export default BreakFastDetails;