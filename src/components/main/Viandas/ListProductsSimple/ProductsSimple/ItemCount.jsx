import React, { useState } from 'react';
//css
import './ItemCount.css';

export default function ItemCount (props){
    const [click, setClick] = useState(0);

    return ( 
        <div className="stock__item">
            <button className="stock__btnrst" onClick={props.onLess}>-</button>
            <p><span>{props.quantity}</span></p>
            <button className="stock__btnadd" onClick={props.onAdd}>+</button>
        </div>
    )
}