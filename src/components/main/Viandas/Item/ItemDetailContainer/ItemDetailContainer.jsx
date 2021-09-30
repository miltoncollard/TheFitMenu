import React,{useState, useEffect} from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

//assets
import imagen from '../../../../../assets/img/products/clasica.png';
function ItemDetailContainer(){

    const [menus, setMenus] = useState([]);
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
            <img src={imagen} alt="" />
            {
                infoProduct &&
                infoProduct.length &&
                infoProduct[1] &&
                infoProduct[1].plates.map((plato,index) =>(
                    <ItemDetail key={index} platos={plato.name}/>
                ))
            }
        </div>
    )
}

export default ItemDetailContainer;