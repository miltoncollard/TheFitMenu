import React from "react";
import {Link} from 'react-router-dom';
import img from '../../../../../assets/img/products/vegetarianas.png';

//CSS
import './ProductAPI.css'

const ProductAPI = (props) =>{
    console.log("nombre vianda: ", props.name)
    const cadena = props.name.split('-');
    return(
        <div className="product__card">
            <div className="product__card__img">
                <img src={img}/>
            </div>
            <div className="product__card__text">
                <h4>VIANDA {cadena[1]}</h4>
                <h4>{cadena[0]}</h4>
                <h4>${props.price}</h4>
            </div>
            <Link to="/menu" className="link"><button>COMPRAR</button></Link>
        </div>
    )

}

export default ProductAPI