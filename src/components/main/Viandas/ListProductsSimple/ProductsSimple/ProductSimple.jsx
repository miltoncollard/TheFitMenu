import React from "react";
import {Link} from 'react-router-dom';
import imgClasica from '../../../../../assets/img/products/clasica.png'
import imgLight from '../../../../../assets/img/products/light.png'
import imgProteica from '../../../../../assets/img/products/proteica.png'
import imgVeggie from '../../../../../assets/img/products/veggie.png'
import './ProductSimple.css'
//<ItemCount stock={4} initial={0}/>

const ProductSimple = (props) =>{
    const imagen = () =>{
        if(props.name === 'Clásica'){
            return(<img src={imgClasica} alt="" />)
        }else if(props.name === 'Light'){
            return(<img src={imgLight} alt="" />)
        }else if(props.name === 'Protéico'){
            return(<img src={imgProteica} alt="" />)
        }else if(props.name === 'Veggie'){
            return(<img src={imgVeggie} alt="" />)
        }
    }

    return(
        <div className="home__product__card">
            <div className="home__product__card__img">
                {imagen()}
            </div>
            <Link to="/nuestrasviandas"><button>VIANDAS {props.name}</button></Link>
        </div>
    )

}

export default ProductSimple