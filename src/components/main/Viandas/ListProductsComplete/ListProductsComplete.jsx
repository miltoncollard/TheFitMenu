import React, {useState, useEffect} from 'react';
import ProductComplete from './ProductComplete/ProductComplete';
//css
import './ListProductsComplete.css';

//ListProductsSimple: componente que informa todos los tipos de viandas existentes con detalle (NUESTRAS VIANDAS)
export default function ListProductsComplete(){
    const [products, setProduct] = useState([])
    const urlMenusApi = 'https://strapi.thefit-menu.com/pricings'

    useEffect(() =>{
        getMenus() 
    },[])

    //Tomo endpoint(urlMenuApi) y lo vuelvo en setProduct(products)
    const getMenus = () =>{
        fetch(urlMenusApi)
        .then((response) =>{
            return response.json()
        })
        .then((data) =>{
            setProduct(data)
        })
    }

    
    //Funcion para filtrar y tomar solo las viandas solicitadas del endpoint
    const FilterProducts = () =>{
        let lista = []
        let nombreVianda
        products.forEach(element => {
            nombreVianda = element.name.split('- ')[1]
            let configMenu
            let configLista
            if(nombreVianda === 'Clásico'){
                if(lista.some(tipo => tipo.type === "Clásico")){
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configMenu = {"quantity": 10,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }else{
                        configMenu = {"quantity": element.menuA.plates.length,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }
                    lista.map ((add, index) =>{ 
                        if(add.type === 'Clásico'){
                            add.menu.push(configMenu)}
                        })
                }else{
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": 10,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }else{
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": element.menuA.plates.length,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }
                    lista.push(configLista)
                }
            }
            if(nombreVianda === 'Protéico'){
                if(lista.some(tipo => tipo.type === "Protéico")){
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configMenu = {"quantity": 10,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }else{
                        configMenu = {"quantity": element.menuA.plates.length,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }
                    lista.map ((add, index) =>{ 
                        if(add.type === 'Protéico'){
                            add.menu.push(configMenu)}
                        })
                }else{
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": 10,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }else{
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": element.menuA.plates.length,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }
                    lista.push(configLista)
                }
            }
            if(nombreVianda === 'Veggie'){
                if(lista.some(tipo => tipo.type === "Veggie")){
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configMenu = {"quantity": 10,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }else{
                        configMenu = {"quantity": element.menuA.plates.length,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }
                    lista.map ((add, index) =>{ 
                        if(add.type === 'Veggie'){
                            add.menu.push(configMenu)}
                        })   
                }else{
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": 10,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }else{
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": element.menuA.plates.length,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }
                    lista.push(configLista)
                }
            }
            if(nombreVianda === 'Light'){
                if(lista.some(tipo => tipo.type === "Light")){
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configMenu = {"quantity": 10,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }else{
                        configMenu = {"quantity": element.menuA.plates.length,
                                      "price": element.price,
                                      "platos": element.menuA.plates}
                    }
                    lista.map ((add, index) =>{ 
                        if(add.type === 'Light'){
                            add.menu.push(configMenu)}
                        })
                }else{
                    if(element.hasOwnProperty('menuB') && element.menuB !== null){
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": 10,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }else{
                        configLista = {"id": element.id,
                                       "type": nombreVianda,
                                       "menu": [{"quantity": element.menuA.plates.length,
                                                 "price": element.price,
                                                 "platos": element.menuA.plates}]}
                    }
                    lista.push(configLista)
                }
            }
        });
        return lista
    }
    
    let productsFinal = FilterProducts()

    return(
        <div className="product__container"> 
           <div className="product__content">
                {productsFinal.map((menu) =>{
                   // return (<ProductComplete key={index} name={menu.name} price={menu.price} plates={menu.menuA.plates} id={menu.menuA.name}/>)
                   return (<ProductComplete key={`item-${menu.id}`} type={menu.type} id={menu.id} menu={menu.menu}/>)
                })}
           </div>
        </div>
    )

}


