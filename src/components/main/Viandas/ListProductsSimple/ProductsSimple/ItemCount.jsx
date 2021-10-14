import React, { useState } from 'react';
//css
import './ItemCount.css';

const ItemCount =({initial = 0, onAdd}) =>{
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(5)
    
    return(
        <div className ="item__count">
            <div className="stock__countButtons">
                {console.log("count: ", count)}
                {console.log("stock: ",stock)}
                <button disabled={stock === 0 || count <= 0} onClick={() => setCount(count - 1) && setStock(stock + 1)}>-</button>
                <span>{stock === 0 ? 'Sin stock' : count}</span>
                <button disabled={stock === 0 || count >= stock} onClick={() => setCount(count + 1) && setStock(stock - 1)}>+</button>
            </div>
            <span>Stock: {stock - count}</span>
            <div className="stock__addButton">
                <button disabled={stock === 0 || count <= 0 || count > stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
                
            </div>
        </div>
    )
}

export default ItemCount