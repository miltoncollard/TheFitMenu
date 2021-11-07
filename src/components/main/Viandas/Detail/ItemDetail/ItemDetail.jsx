import React,{useState, useEffect} from "react";

function ItemDetail({platos, stock, changeSelect, value, id}){
    
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


//OPCIONES STOCK SELECCION DE PLATOS
/*
OPCION A:
Se generan un select por cada plato. Se comunica todo el tiempo el valor de cada select al
componente padre (ProductDetailContainer)


*/