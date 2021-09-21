//css
import './ItemComentarios.css';
//internal componets
import comment_card from '../../../../data/clients_comment'
//external components
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ItemComentarios = () => {
    const listItems = comment_card.map((item) =>
        <div className="comment__card" key={item.id}>
            <h4>{item.client_name}</h4>
            <p>{item.comment}</p>
            <a href="#"><FontAwesomeIcon icon={faHeart}/></a>
        </div>
    )
    return ( 
        <section className="clientes__container">
            {listItems}
        </section>
    );
  }
  
export default ItemComentarios;