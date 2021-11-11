import React,{useState, useEffect} from "react";

//css
import './ItemDetail.css';

function ItemDetail({platos, stock, changeSelect, id}){
    
    console.log("STOCK: ", stock)
    console.log("PLATOS: ", platos)
    return(
        <div className="detail__item">
            <span>• {platos}</span>
            <select id={id} onChange={changeSelect}>
                <option selected={stock == 0}>0</option>
                <option selected={stock == 1}>1</option>
                <option selected={stock == 2}>2</option>
            </select>
        </div>
    )
}

export default ItemDetail;
