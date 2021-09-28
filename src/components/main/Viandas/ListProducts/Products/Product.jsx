import React from "react";
import ItemCount from "./ItemCount";
import './Product.css'


const Product = (props) =>{
    console.log("props: ", props)
    console.log("props img: ", props.thumb)
    console.log("props name: ", props.product_name)
    return(
        <div className="product__card">
            <div className="product__card__img">
                <img src={props.thumb}/>
            </div>
            <button>{props.title}</button>
            
            <ItemCount stock={4} initial={0}/>
        </div>
    )

}

export default Product