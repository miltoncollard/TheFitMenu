import React,{useState, useEffect} from "react";
import ItemDetail from '../ProductDetail/ProductDetail';
import './ProductDetailContainer.css';

//assets
import imagen from '../../../../../assets/img/products/clasica.png';
function ItemDetailContainer(){

    const urlMenusApi = 'https://strapi.thefit-menu.com/menus';

    const [infoProduct, setInfoProduct] = useState([]);

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

    return(
        <div className="detail__container">
            <div className="detail__img">
                <img src={imagen} alt="" />
            </div>
            <div className="item__container">
                <h4>PLATOS DE LA SEMANA: </h4>
                {
                    infoProduct &&
                    infoProduct.length &&
                    infoProduct[1] &&
                    infoProduct[1].plates.map((plato,index) =>(
                        <ItemDetail key={index} platos={plato.name}/>
                    ))
                }
            </div>

        </div>
    )
}

export default ItemDetailContainer;