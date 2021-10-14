import React,{useState, useEffect, useContext} from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from "../../ListProductsSimple/ProductsSimple/ItemCount";
import { CartContext } from '../../../../../context/cartContext';
//css
import './ProductDetailContainer.css';

//assets
import imagen from '../../../../../assets/img/products/clasica.png';


//
// PAGINA DETALLADA DEL MENU 
//
function ItemDetailContainer({plates}){

    const urlMenusApi = 'https://strapi.thefit-menu.com/menus';

    const [infoProduct, setInfoProduct] = useState([]);
    const [platos, setPlatos] = useState([])
    const [platosFinal, setPlatosFinal] = useState([])
    const {addItem} = useContext(CartContext)
    const handleOnAdd = count => addItem(plates,count)

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

    const filterPlates = (infoProduct) => {
        plates.map((plate) => {
            infoProduct.find( o => {
                o.plates.map((plateInfoProduct) => {
                     if(plateInfoProduct.id === plate){
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
            <div className="detail__preInfo">
                <div className="preInfo__img">
                    <img src={imagen} alt="" />
                </div>
                <div className="preInfo__stock">
                    <ItemCount stock={5} onAdd={handleOnAdd}/>
                </div>
            </div>
            <div className="item__container">
                <h4>PLATOS DE LA SEMANA: </h4>
                {showItem()}
                {
                  platosFinal.map((plato,index) => {
                    return( <ItemDetail key={index} platos={plato}/> )
                    
                })
                }
            </div>

        </div>
    )
}

export default ItemDetailContainer;