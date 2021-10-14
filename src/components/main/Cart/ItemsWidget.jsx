import React, { useContext } from 'react'
import imagen from '../../../assets/img/products/clasica.png';
import { CartContext } from '../../../context/cartContext'
//External Componentes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
//CSS
import './ItemsWidget.css';
const ItemsWidget = ({item, count}) => {
  const {title, price} = item

  const {removeItem, clear} = useContext(CartContext)
  return (
    <div className="cart__itemWidget">
      <div className="itemWidget__data">      
        <img src={imagen} alt="" />
        <p>Producto | {count}u. x $2400</p>      
      </div>
      <div className="itemWidget__remove">
        <button onClick={removeItem}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
  )
}

export default ItemsWidget