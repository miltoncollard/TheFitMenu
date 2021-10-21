import React from "react";
import {Link, useHistory} from 'react-router-dom';

//internal componets
import imgClasica from '../../../../../assets/img/products/clasica.png'
import imgLight from '../../../../../assets/img/products/light.png'
import imgProteica from '../../../../../assets/img/products/proteica.png'
import imgVeggie from '../../../../../assets/img/products/veggie.png'
//CSS
import './ProductComplete.css'


const ProductComplete = (vianda) =>{
    let img
    if(vianda.type === 'Clásico'){
        img = imgClasica
    }else{
        if(vianda.type === 'Protéico'){
            img = imgProteica
        }else{
            if(vianda.type === 'Veggie'){
                img = imgVeggie
            }else{
                if(vianda.type === 'Light'){
                    img =imgLight
                }
            }
        }
    }
    return(
        <div className="product__card">
            <div className="product__card__img">
                <img src={img}/>
            </div>
            <div className="product__card__text">
                <h4>VIANDA {vianda.type}</h4>
                <h3>$ 2350</h3>
            </div>
            <Link to={{ pathname: `/menu/${vianda.type}`, state: { plates: vianda.menu[0], id: vianda.id, type: vianda.type}}} className="link"><button>COMPRAR</button></Link>
        </div>
    )

}

export default ProductComplete