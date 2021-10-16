import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ItemDetails = () => {
    const { id} = useParams();
    const [item,setItem] = useState( {});
    // console.log(params);
    useEffect(()=>{
        const url = `./breakfast.json/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    },[])
    return (
        <div>
            <h3>Todo Detail of: {item.id}</h3>
            {/* <h1>{todo.userId} </h1>
            <h2>{todo.title}</h2>
            <h3>{todo.completed?"true":"false"}</h3> */}
        </div>
    );
};
 

export default ItemDetails;