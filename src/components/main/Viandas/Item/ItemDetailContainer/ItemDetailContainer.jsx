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

    useEffect(() =>{
        getProduct.then((response)=>{
            setInfoProduct(response)
        })
    },[])

    const getMenus = () =>{
        fetch(urlMenusApi)
        .then((response) =>{ 
            return response.json()
        })
        .then((data) =>{
            setMenus(data)
        })
    }

    const getProduct = new Promise((resolve)=>{
        setTimeout(()=>{
            const mockProduct = menus[1];
            console.log("mock:", mockProduct)
            resolve(mockProduct)
        }, 2000)
    })
    console.log("infoProduct:", infoProduct)
    return(
        <div className="detail__container">
            <img src={imagen} alt="" />
            {infoProduct.plates.map((platos, index) =>{
                return (<ItemDetail key={index}  dplatos={platos.name}/>)
            })}
        </div>
    )
}

export default ItemDetailContainer;