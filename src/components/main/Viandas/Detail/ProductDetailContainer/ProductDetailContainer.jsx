import React,{useState, useEffect, useContext} from "react";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { useLocation } from "react-router";
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from "../../../ItemCount/ItemCount";
import { CartContext } from '../../../../../context/cartContext';
//css
import './ProductDetailContainer.css';

//assets
import imgClasica from '../../../../../assets/img/products/clasica.png';
import imgLight from '../../../../../assets/img/products/light.png';
import imgProteica from '../../../../../assets/img/products/proteica.png';
import imgVeggie from '../../../../../assets/img/products/veggie.png';

//
// PAGINA DETALLADA DEL MENU 
//
function ItemDetailContainer({plates, id}){

    const location = useLocation();

    let productID = location.state.id;
    let productType = location.state.type
    plates.id= productID
    plates.type = productType
    let product = [plates]
    let plats =[]
    plats = plates.platos

    const urlMenusApi = 'https://strapi.thefit-menu.com/menus';

    const [infoProduct, setInfoProduct] = useState([]);
    const [platos, setPlatos] = useState([])
    const [platosFinal, setPlatosFinal] = useState([])
    const {addItem} = useContext(CartContext)
    const {showNotification, handleNotification} = useContext(CartContext)
    const [open, setOpen] = React.useState(showNotification);
  
    //const handleOnAdd = count => addItem(plates,count)
    const handleOnAdd = count => addItem(product,count)

    const handleClose = (event, reason) => {
        console.log("entra en handleClose")
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
 
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleNotification}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

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
        plats.map((plato) => {
            infoProduct.find( o => {
                o.plates.map((plateInfoProduct) => {
                     if(plateInfoProduct.id === plato){
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

   //Se selecciona la imagen segun tipo de vianda
    const selectImg = () =>{
        let img
        product.map((item) =>{
            if(item.type === 'Clásico'){
                img = imgClasica
            }else{
                if(item.type === 'Protéico'){
                    img = imgProteica
                }else{
                    if(item.type === 'Veggie'){
                        img = imgVeggie
                    }else{
                        if(item.type === 'Light'){
                            img =imgLight
                        }
                    }
                }
            }
        })             
        return img
    }
    
    return(
        <div className="detail__container">
            <div className="detail__preInfo">
                <div className="preInfo__img">
                    <img src={selectImg()} alt="" />
                </div>
                <div className="preInfo__text">
                    <h4>VIANDAS {product.type} 5 PLATOS</h4>
                    <h3>PLATOS DE LA SEMANA:</h3>
                    {showItem()}
                    {
                    platosFinal.map((plato,index) => {
                        return( <ItemDetail key={index} platos={plato}/> )
                    })
                    }
                </div>
            </div>
            <div className="detail__options">
                <h3>OPCIONES DE PEDIDO</h3>
                <p>• Tomamos pedidos hasta el Lunes anterior a las 16hs.</p>
                <p>• Estas viandas saludables contienen variedad de insumos; carne, pollo, verduras y pastas.</p>
                <p>• Menú apto para hipertensos y diabéticos.</p>
                <p>• Realizamos envíos a domicilio.</p>
                <p>• Dentro de esta opción podés realizar un cambio si un plato no te gustara. Es decir, podés sacar un plato (ponerlo en "0") y repetir otro plato (ponerlo en "2"). Sólo se puede realizar un cambio.</p>
                <p>• Los pedidos se toman hasta el Sábado a las 12h. La entrega es semanal los días Lunes dentro de la franja horaria 11.30-22h.</p>
                <p>• Las viandas se entregan frescas para que vos las congeles.</p>
                <p>• ¡Cocinamos sin sal!</p>
                <p>• Métodos de pago: Podés abonar en efectivo, por transferencia o con tarjeta de crédito o débito por Mercado Pago con un 10% adicional.</p>
            </div>
            <div className="detail__BtnAddCart">
                <button onClick={handleOnAdd}>Agregar al carrito</button>       
            </div>
            
            <Snackbar open={showNotification} autoHideDuration={6000} onClose={handleNotification} message="El producto ya fue agregado" action={action}/>
        </div>
    )
}

export default ItemDetailContainer;