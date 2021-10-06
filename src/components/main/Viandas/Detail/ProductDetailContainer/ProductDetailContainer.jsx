import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import ItemDetail from '../ProductDetail/ProductDetail';
import './ProductDetailContainer.css';
import ItemCount from "../../ListProductsSimple/ProductsSimple/ItemCount";

//assets
import imagen from '../../../../../assets/img/products/clasica.png';
function ItemDetailContainer(){

    const urlMenusApi = 'https://strapi.thefit-menu.com/menus';

    const [infoProduct, setInfoProduct] = useState([]);
    const [items, setItems] = useState(0);
    const [stock, setStock] = useState(5);

    useEffect(() =>{
        getMenus() 
    },[])

    const getMenus = async () =>{
        return await fetch(urlMenusApi)
        .then((response) => response.json())
        .then((data) =>{
            console.log(`FETCH.data`, data)
            setInfoProduct(data)
        })
        .catch(err => console.log(`err`, err))
    }

    const onAdd =() =>{
       items < stock && setItems(items + 1)
    }
    const onLess =() =>{
        items !== 0 && setItems(items - 1)
    }

    return(
        <div className="detail__container">
            <div className="detail__img">
                <img src={imagen} alt="" />
                <ItemCount onAdd={onAdd} onLess={onLess} quantity={items}/>
            </div>
            <div className="item__container">
                {console.log("endpoint: ", infoProduct)}
                <h4>PLATOS DE LA SEMANA: </h4>
                {
                    infoProduct &&
                    infoProduct.length &&
                    infoProduct[2] &&
                    infoProduct[2].plates.map((plato,index) =>(
                        <ItemDetail key={index} platos={plato.name}/>
                    ))
                }
                <Link to="/cart" className="link"><button>AGREGAR AL CARRITO</button></Link>
            </div>

        </div>
    )
}

export default ItemDetailContainer;