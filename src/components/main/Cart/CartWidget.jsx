import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import ItemsWidget from './ItemsWidget';

//external components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function CartWidget ({show,close}){

    const {cartItems} = useContext(CartContext)
    
    return(
        <div className={`cart__widget ${show ? 'active' : ''}`}>
            <div className="cart__widget__title">
                <h4>Carrito</h4>
                <button onClick={close}><FontAwesomeIcon icon={faTimesCircle} /></button>
            </div>

            <div className="cart__widget__product">
                {cartItems.map(element => <ItemsWidget {... element}/>)}
            </div>
        </div>
    )
}
