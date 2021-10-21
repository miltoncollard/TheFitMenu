import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import ItemsWidget from './ItemsWidget';
//CSS
import './CartWidget.css';
//external components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function CartWidget ({show,close}){

    const {cartItems} = useContext(CartContext)
    let productItem = []
    cartItems.map(element =>{
        productItem.push(element)
    })

    return(
        <div className={`cart__widget ${show ? 'active' : ''}`}>
            <div className="cart__widget__title">
                <h4>Carrito</h4>
                <button onClick={close}><FontAwesomeIcon icon={faTimesCircle} /></button>
            </div>

            <div className="cart__widget__product">
                {productItem.map(element => <ItemsWidget data={element}/>)}
            </div>
            {cartItems.length === 0 && <div className="message-cart-empty">El carrito de compras está vacio</div>}
            {cartItems.length > 0 && <button className="cart__widget__button">Finalizar Pedido</button>}

        </div>
    )
}
