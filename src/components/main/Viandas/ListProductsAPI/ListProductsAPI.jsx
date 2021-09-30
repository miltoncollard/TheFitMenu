import React, {useState, useEffect} from 'react';
import ProductAPI from './ProductAPI/ProductAPI';
//css
import './ListProductsAPI.css';


export default function ListProductsAPI(){
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
                    return (<ProductAPI key={index} name={menu.name} price={menu.price}/>)
                })}
           </div>
        </div>
    )

}


