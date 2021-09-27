import React, { useState } from 'react';
//css
import './ItemCount.css';

export default function ItemCount ({stock, initial}){
    const [click, setClick] = useState(initial);
    
    const rstClick = () =>{
        if(click > initial){
            setClick(click - 1);
        }
    }
    const addClick = () =>{
        if(click <= stock){
            setClick(click + 1);
        }
    }

    return ( 
        <div className="stock__item">
            <button className="stock__btnrst" onClick={rstClick}>-</button>
            <p><span>{click}</span></p>
            <button className="stock__btnadd" onClick={addClick}>+</button>
        </div>
    )
}