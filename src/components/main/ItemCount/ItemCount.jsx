import React, { useState } from 'react';
//css
import './ItemCount.css';

const ItemCount =(props) =>{

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(5)

    function handleClick(event){
        props(event.target.count);
    }

    return(
        <div className ="item__count">
            <div className="stock__countButtons">
                <button disabled={stock === 0 || count <= 1} onClick={() => setCount(count - 1) && setStock(stock + 1) && handleClick}>-</button>
                <span className="span__count">{stock === 0 ? 'Sin stock' : count}</span>
                <button disabled={stock === 0 || count >= stock} onClick={() => setCount(count + 1) && setStock(stock - 1) && handleClick}>+</button>
            </div>
            <span className="span__stock">Stock: {stock - count}</span>
        </div>
    )
}

export default ItemCount