import product_card from '../../../../data/product_data'
//css
import './ItemProducto.css';

const ItemProducto = () => {
    const listItems = product_card.map((item) =>
        <div className="product__card" key={item.id}>
            <div className="product__card__img">
                <img src={item.thumb}/>
            </div>
            <button>{item.product_name}</button>
        </div>
    
    );
    return ( 
        <div className="product__container">
            {listItems}
        </div>
    );
  }
  
  export default ItemProducto;