import React, {useState, useEffect} from 'react';
import ProductComplete from './ProductComplete/ProductComplete';
//css
import './ListProductsComplete.css';


export default function ListProductsComplete(){
    const [products, setProduct] = useState([])
    const urlMenusApi = 'https://strapi.thefit-menu.com/pricings'

    useEffect(() =>{
        getMenus() 
    },[])

    const getMenus = () =>{
        fetch(urlMenusApi)
        .then((response) =>{
            return response.json()
        })
        .then((data) =>{
            setProduct(data)
        })
    }

    return(
        <div className="product__container"> 
           <div className="product__content">
                {products.map((menu, index) =>{
                    return (<ProductComplete key={index} name={menu.name} price={menu.price}/>)
                })}
           </div>
        </div>
    )

}


