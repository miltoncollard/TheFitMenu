import React, { useState } from 'react';
//css
import './ItemCount.css';

const ItemCount =({initial = 0}, stockCount) =>{
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(5)
    

    return(
        <div className ="item__count">
            <div className="stock__countButtons">
                <button disabled={stock === 0 || count <= 0} onClick={() => setCount(count - 1) && setStock(stock + 1) && stockCount(count)}>-</button>
                <span className="span__count">{stock === 0 ? 'Sin stock' : count}</span>
                <button disabled={stock === 0 || count >= stock} onClick={() => setCount(count + 1) && setStock(stock - 1) && stockCount(count)}>+</button>
            </div>
            <span className="span__stock">Stock: {stock - count}</span>
        </div>
    )
}

export default ItemCount