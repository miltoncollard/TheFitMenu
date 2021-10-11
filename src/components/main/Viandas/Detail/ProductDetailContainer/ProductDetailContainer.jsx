import React,{useState, useEffect, useContext} from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

//css
import './ProductDetailContainer.css';

import ItemCount from "../../ListProductsSimple/ProductsSimple/ItemCount";
import { CartContext } from '../../../../../context/cartContext';
//assets
import imagen from '../../../../../assets/img/products/clasica.png';

function ItemDetailContainer(props){

    const urlMenusApi = 'https://strapi.thefit-menu.com/menus';

    const [infoProduct, setInfoProduct] = useState([]);
    const [items, setItems] = useState(0);
    const [stock, setStock] = useState(5);
    const {productID} = useParams()

    useEffect(() =>{
        getMenus() 
    },[])

    const getMenus = async () =>{
        return await fetch(urlMenusApi)
        .then((response) => response.json())
        .then((data) =>{
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

    //Logica Carrito
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () =>{
        console.log("addToCart")
        const itemVianda = {nameVianda: 'nombrevianda', namePlatos: 'nombre plato', price: 2000}
        setCart(currentState => [...currentState, itemVianda]);
        console.log("itemVianda:", itemVianda)
        console.log("cart: ",cart)
    }

    console.log("infoProduct: ", infoProduct) 
    console.log("plates: ", infoProduct.plates) 
    return(
        <div className="detail__container">
            <div className="detail__img">
                <img src={imagen} alt="" />
                <ItemCount onAdd={onAdd} onLess={onLess} quantity={items}/>
            </div>
            <div className="item__container">
                <h4>PLATOS DE LA SEMANA: </h4>
                {   
                    infoProduct &&
                    infoProduct.length &&
                    infoProduct[2] &&
                    infoProduct[2].plates.map((plato,index) =>(
                        <ItemDetail key={index} platos={plato.name}/>
                    ))
                }
                <button onClick={addToCart}>AGREGAR AL CARRITO</button>
            </div>

        </div>
    )
}

export default ItemDetailContainer;