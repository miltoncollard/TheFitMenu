import React,{useState, useEffect} from "react";

function itemDetail(props){
    
    const platos = props.platos;

    return(
        <div className="detail__item">
            <span>•{platos}</span>
        </div>
    )
}

export default itemDetail;