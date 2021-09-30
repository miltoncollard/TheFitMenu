import product_card from '../../../../data/product_data'
import React, {useState, useEffect} from 'react';
import Product from './Products/Product';
//css
import './ListProducts.css';


export default function ListProduct(){
    const [products, setProduct] = useState([])

    const getProducts = new Promise((resolve)=>{
        setTimeout(()=>{
            const mockProducts = product_card
            resolve(mockProducts)
        }, 2000)
    })

    useEffect(() =>{
        getProducts.then((res)=>{
            setProduct(res)
        })
    },[])

    return(
        <div className="product__container"> 
            {products.map((product, index) =>{
                return (<Product key={index} thumb={product.thumb} title={product.product_name}/>)
            })}
        </div>
    )

}


