import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import imagen from '../../../assets/img/products/clasica.png';

//external components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function CartWidget({show, close}){
    
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    console.log("cart: ",cart)
    return(
        <div className={`cart__widget ${show ? 'active' : ''}`}>
            <div className="cart__widget__title">
                <h4>Carrito</h4>
                <button onClick={close}><FontAwesomeIcon icon={faTimesCircle} /></button>
            </div>

            <div className="cart__widget__product">
                <div className="product__img">
                    <img src={imagen} alt=""/>
                </div>
                <div className="product__data">
                    <span>{cart.nameVianda}</span>
                    <span>{cart.namePlatos}</span>
                </div>
                <div className="product__dataprice">
                   <span>Cantidad: {cart.length}</span>
                   <br />
                   <span>Precio: ${totalPrice}</span>
                </div>

            </div>
        </div>
    )
}