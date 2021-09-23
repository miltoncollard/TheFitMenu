import product_card from '../../../../data/product_data'
import ItemCount from './ItemCount';
//css
import './ItemProducto.css';

const ItemProducto = () => {
    const listItems = product_card.map((item) =>

        <div key={item.id}>
            <div className="product__card__img">
                <img src={item.thumb}/>
            </div>
            <button>{item.product_name}</button>
        </div>
    );


    return ( 
        <div className="product__container">
            <div className="product__card">
                {listItems}
            </div>

            <ItemCount stock="4" initial="0"/>
        </div>
    );
  }
  
  export default ItemProducto;