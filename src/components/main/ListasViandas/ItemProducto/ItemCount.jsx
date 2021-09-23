import React, { useState } from 'react';
import product_card from '../../../../data/product_data'
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

    const ctrlStock = product_card.map((item) =>
        <div className="stock__item">
            <button className="stock__btnrst" onClick={rstClick}>-</button>
            <p><span>{click}</span></p>
            <button className="stock__btnadd" onClick={addClick}>+</button>
        </div>
    );

    return ( 
        <div className="product__stock">
            {ctrlStock}
        </div>
    );
}