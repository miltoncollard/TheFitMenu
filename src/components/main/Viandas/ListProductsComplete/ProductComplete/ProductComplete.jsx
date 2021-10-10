import React from "react";
import {Link} from 'react-router-dom';
import img from '../../../../../assets/img/products/vegetarianas.png';

//CSS
import './ProductComplete.css'

const ProductAPI = ({price, name, plates, id}) =>{
    const cadena = name.split('-');
    console.log("plates ", plates)
    return(
        <div className="product__card">
            <div className="product__card__img">
                <img src={img}/>
            </div>
            <div className="product__card__text">
                <h4>VIANDA {cadena[1]}</h4>
                <h4>{cadena[0]}</h4>
                <h4>${price}</h4>
            </div>
            <Link to={{ pathname: `/menu/${id}`, state: { plates: plates}}} className="link"><button>COMPRAR</button></Link>
        </div>
    )

}

export default ProductAPI