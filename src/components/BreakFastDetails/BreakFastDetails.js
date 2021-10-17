import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BreakFastDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
 
const BreakFastDetails = ( ) => {
     
    const {id} = useParams();
    const [breakFast,setBreakFast] = useState(  []);
    // console.log(params);
    useEffect(()=>{
         
        fetch(`https://raw.githubusercontent.com/saifulislammunna/breakfast-api/main/public/breakfast.json`)
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
            <div className="time-to-eat-food">
             <Link to="/breakfast" className="breakfast"  > <h3    >Breakfast  </h3> </Link>
             <Link to="/lunch" className="breakfast"  > <h3    >Lunch  </h3> </Link>
             <Link to="/dinner" className="breakfast"  > <h3    >Dinner</h3> </Link>
                
             </div>
           
         <div className="d-flex  align-items-center justify-content-center">
         <div className=" selected-item d-flex   align-items-center justify-content-center p-5">
         
             
             <h1>{breakFast.name} </h1>
             <p>{breakFast.description}</p>
             <div className="d-flex justify-contect-center align-items-center">
             <h3>{breakFast.price}</h3>
               <div className="p-5  d-flex ">
                   <btn className="btn-light   "><FontAwesomeIcon    icon={faMinus} /></btn>
                   <input  id="phone-number" type="number" min="0" class="form-control text-center" value="1"/>
                   <btn className="btn-light"><FontAwesomeIcon    icon={faPlus} /></btn>
               </div>
             </div>
            
             <Button className="btn-danger  rounded-pill btn    ">
                 <FontAwesomeIcon    icon={faShoppingCart} />
                 <span className="p-2 "> Add </span></Button>
           </div>
            
            <div className="breakfast-img p-5">
            <img src={breakFast.img}  alt="" />
            </div>
         </div>
            
        </div>
    );
};

export default BreakFastDetails;