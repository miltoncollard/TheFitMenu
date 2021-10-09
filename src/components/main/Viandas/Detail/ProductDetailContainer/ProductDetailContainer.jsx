import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import ItemDetail from '../ProductDetail/ProductDetail';
import './ProductDetailContainer.css';
import ItemCount from "../../ListProductsSimple/ProductsSimple/ItemCount";

//assets
import imagen from '../../../../../assets/img/products/clasica.png';

function ItemDetailContainer({plates}){

    const urlMenusApi = 'https://strapi.thefit-menu.com/menus';

    const [infoProduct, setInfoProduct] = useState([]);
    const [items, setItems] = useState(0);
    const [stock, setStock] = useState(5);
    const [platos, setPlatos] = useState([])
    const [platosFinal, setPlatosFinal] = useState([])
    useEffect(() =>{
        getMenus() 
        
    },[])

    const getMenus = async () =>{
        return await fetch(urlMenusApi)
        .then((response) => response.json())
        .then((data) =>{
            setInfoProduct(data)
            filterPlates(data)
            
        })
        .catch(err => console.log(`err`, err))
    }

    const onAdd =() =>{
       items < stock && setItems(items + 1)
    }
    const onLess =() =>{
        items !== 0 && setItems(items - 1)
    }

    const filterPlates = (infoProduct) => {
        plates.map((plate) => {
            infoProduct.find( o => {
                o.plates.map((plateInfoProduct) => {
                     if(plateInfoProduct.id === plate){
                         console.log(platos)
                            return setPlatos(prevPlato => {
                                return [ 
                                  ...prevPlato, 
                                  plateInfoProduct.name
                                ]
                              })
                        
                     }
                })
            })
        })
        
    }
    
    const showItem = () =>{
        platos.forEach((p) => {
            if (!platosFinal.includes(p)) {
                setPlatosFinal(prevPlato => {
                    return [ 
                      ...prevPlato, 
                      p
                    ]
                  })
            }
        });
        
    }

    return(
        <div className="detail__container">
            <div className="detail__img">
                <img src={imagen} alt="" />
                <ItemCount onAdd={onAdd} onLess={onLess} quantity={items}/>
            </div>
            <div className="item__container">
                <h4>PLATOS DE LA SEMANA: </h4>
                {showItem()}
                {
                  platosFinal.map((plato,index) => {
                    return( <ItemDetail key={index} platos={plato}/> )
                    
                })
                }
                <Link to="/cart" className="link"><button>AGREGAR AL CARRITO</button></Link>
            </div>
        </div>
    )
}

export default ItemDetailContainer;