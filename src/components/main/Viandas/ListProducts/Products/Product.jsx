import React from "react";
import {Link} from 'react-router-dom';
import ItemCount from "./ItemCount";
import './Product.css'
//<ItemCount stock={4} initial={0}/>

const Product = (props) =>{
    return(
        <div className="home__product__card">
            <div className="home__product__card__img">
                <img src={props.thumb}/>
            </div>
            <Link to="/nuestrasviandas"><button>{props.title}</button></Link>
        </div>
    )

}

export default Product