import React, {useState, useEffect} from 'react';
import ProductSimple from './ProductsSimple/ProductSimple';
//CSS
import './ListProductsSimple.css';

//ListProductsSimple: componente que informa todos los tipos de viandas existentes sin detalle
export default function ListProductsSimple(){

    //APIs
    const urlMenusApi = 'https://strapi.thefit-menu.com/menus'; 

    const [menus, setMenu] = useState([]);

    useEffect(() =>{
        getMenus() 
    },[])

    const getMenus = async () =>{
        return await fetch(urlMenusApi)
        .then((response) => response.json())
        .then((data) =>{
            setMenu(data)
        })
        .catch(err => console.log(`err`, err))
    }
    //Separo el 'name' en dos partes desde el caracter ' - '  [nombre vianda , cantidad]
    const nombreViandas = menus.map((menu,index) =>{   
        return(menu.name.split('-'))
    })

    //Ordeno el nuevo Array
    nombreViandas.sort();  

    //Genero nuevo Array con solo los nombres de Viandas y descarto las cantidades
    const tipoViandas = []  
    nombreViandas.forEach(selectViandaName);
    function selectViandaName(nombre){
        tipoViandas.push(nombre[0])
    }

    //Genero nuevo Array sin nombres de viandas duplicados
    const tipoViandasSrt = [... new Set(tipoViandas)];
    const tipoViandaFinal = tipoViandasSrt.map((element, index) =>{
        return(element.trim())
    })

    return(
        <div className="home__product__container"> 
            {tipoViandaFinal.map((vianda, index) =>{
              if(vianda === "Clásico" ||
                 vianda === "Light" ||
                 vianda === "Protéico" ||
                 vianda === "Veggie" ){  
                return (<ProductSimple key={index} name={vianda}/>)
            }
            })}
        </div>
    )

}


