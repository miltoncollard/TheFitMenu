import React from "react";
import {Link} from 'react-router-dom';
import ItemCount from "./ItemCount";
import img from '../../../../../assets/img/products/clasica.png'
import './ProductSimple.css'
//<ItemCount stock={4} initial={0}/>

const ProductSimple = (props) =>{

    const menus = props.name;

    return(
        <div className="home__product__card">
            <div className="home__product__card__img">
                <img src={img}/>
            </div>
            <Link to="/nuestrasviandas"><button>VIANDAS {props.name}</button></Link>
        </div>
    )

}

export default ProductSimple