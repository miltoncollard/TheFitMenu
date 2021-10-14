import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
//css
import './cart.css';


export default function Cart(){

    const [showCart, setShowCart] = useState(false)

    const handleCart = () =>{
        !showCart ? setShowCart(true) : setShowCart(false)
    }


    return(
        <div className="nav__cart">
            <button variant="outlined" onClick={handleCart}>
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <CartWidget show={showCart} close={handleCart}/>
        </div>
    )
}