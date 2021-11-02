import React, { useContext, useState } from 'react'

//ASSETS
import imgClasica from '../../../assets/img/products/clasica.png'
import imgLight from '../../../assets/img/products/light.png'
import imgProteica from '../../../assets/img/products/proteica.png'
import imgVeggie from '../../../assets/img/products/veggie.png'
import { CartContext } from '../../../context/cartContext'
//External Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
//Internal Components
import ItemCount from '../ItemCount/ItemCount'
//CSS
import './ItemsWidget.css';


const ItemsWidget = ({data}) => {
  const {removeItem} = useContext(CartContext)
  const [cantidad, setCantidad] = useState('');
  
  let img
  if(data.type === 'Clásico'){
      img = imgClasica
  }else{
      if(data.type === 'Protéico'){
          img = imgProteica
      }else{
          if(data.type === 'Veggie'){
              img = imgVeggie
          }else{
              if(data.type === 'Light'){
                  img =imgLight
              }
          }
      }
  }



  return (
    <div className="cart__itemWidget">
      <div className="itemWidget__data">      
        <img src={img} alt="" />
        <div className="itemWidget__text">
          <p>Vianda {data.type} </p>  
          <p>$ {data.price}</p> 
          <ItemCount />
        </div>
      </div>
      <div className="itemWidget__remove">
        <button onClick={() => removeItem(data)}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
  )
}

export default ItemsWidget