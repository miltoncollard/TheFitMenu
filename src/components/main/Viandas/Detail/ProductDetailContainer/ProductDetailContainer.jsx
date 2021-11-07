import React,{useState, useEffect, useContext} from "react";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { useLocation } from "react-router";
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from "../../../ItemCount/ItemCount";
import { CartContext } from '../../../../../context/cartContext';
import CarouselDetail from "../../../CarouselDetail/CarouselDetail";
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
function ItemDetailContainer({plates, id, type}){

    const location = useLocation();

    let productID = location.state.id;
    let productType = location.state.type
    plates.id= productID
    plates.type = productType
    let product = [plates]
    let plats =[]
    plats = plates.platos

    const urlMenusApi = 'https://strapi.thefit-menu.com/menus';

    //constante en desuso
    const [infoProduct, setInfoProduct] = useState([]);

    //constantes para filtrar los platos seleccionados 
    const [platos, setPlatos] = useState([])
    const [platosFinal, setPlatosFinal] = useState([])
    const [superPlato, setSuperPlato] = useState([]);
    const [isExeded, setIsExeded] = useState(
        {
            state: undefined,
            message: ''
        }
    );
    const [showNotificationExeded, setShowNotificationExeded] = useState(false)
    //constante para agregar item al carrito
    const {addItem} = useContext(CartContext)
  
    //MODIFICAR parametro PRODUCT para enviar solo esta informacion: 
        /*  -ID producto
            -TIPO producto
            -CANTIDAD producto
            -PLATOS:    -ID plato
                        -CANTIDAD plato  (segun selecciona en cada plato)
        */
    const handleOnAdd = count => addItem(product,count)

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    //     setOpen(false);
    //   };
     //cerrar notificacion
     const handleNotification = () => {
        setShowNotificationExeded(false)
    }
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
    useEffect(() =>{
         
    })

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

    //contador de selects
    const countSelectPlates = (e) => {
        isExeded.state = undefined;
        const count = e.target.value;
        const id = e.target.id;
        const quantity = product[0].quantity;
        const productoModifciado = superPlato.find(t => t.id === id);
        productoModifciado.quantity = parseInt(count, 10);
        
        let totalPlates = 0;
        superPlato.forEach((sp) =>{ 
            totalPlates += sp.quantity;
        });

        if (totalPlates > quantity) {
            console.log("mostrar true")
            isExeded.state = true;
            isExeded.message = `La cantidad de platos maxima es ${product[0].quantity}`
            setShowNotificationExeded(true)
        } else if(totalPlates < quantity) {
            console.log("mostrar false")
            isExeded.state = false;
            isExeded.message = `La cantidad de platos minima es ${product[0].quantity}`
            setShowNotificationExeded(true)
        }

        setSuperPlato([...superPlato]); 
    }

    const formChange = (e) => {
        console.log("formSelect", e)
    }

    if (product[0]?.platos && !superPlato.length) {
        setSuperPlato(product[0]?.platos?.map((p) => {
            return {
                id: p,
                quantity: 1,
            };
        }));
    }
    
    return(
        <div className="detail__container">
            <div className="detail__preInfo">
                <div className="preInfo__img">
                    <CarouselDetail type={productType}/>
                </div>
                <div className="preInfo__text">
                    <h4>VIANDAS {productType} {product[0].quantity} PLATOS</h4>
                    <h3>PLATOS DE LA SEMANA:</h3>
                    {showItem()}
                    <form onChange={formChange}>
                    {
                        superPlato.length && superPlato.map((producto,index) => {
                            console.info(producto)
                            return( <ItemDetail id={producto.id} key={producto.id} platos={platosFinal[index]} stock={producto.quantity} changeSelect={countSelectPlates}/> )
                        })
                    }
                    </form>
                </div>
            </div>
            <div className="detail__options">
                <h3>OPCIONES DE PEDIDO</h3>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Tomamos pedidos hasta el Lunes anterior a las 16hs.</p>
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Estas viandas saludables contienen variedad de insumos; carne, pollo, verduras y pastas.</p>
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Menú apto para hipertensos y diabéticos.</p>
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Realizamos envíos a domicilio.</p>
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Dentro de esta opción podés realizar un cambio si un plato no te gustara. Es decir, podés sacar un plato (ponerlo en "0") y repetir otro plato (ponerlo en "2"). Sólo se puede realizar un cambio.</p>
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Los pedidos se toman hasta el Sábado a las 12h. La entrega es semanal los días Lunes dentro de la franja horaria 11.30-22h.</p>
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Las viandas se entregan frescas para que vos las congeles.</p> 
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> ¡Cocinamos sin sal!</p>
                </div>
                <div className="detail__options__text">
                    <p id="dot">•</p>
                    <p> Métodos de pago: Podés abonar en efectivo, por transferencia o con tarjeta de crédito o débito por Mercado Pago con un 10% adicional.</p>
                </div>   
            </div>
            <div className="detail__BtnAddCart">
                <button onClick={handleOnAdd} disabled={isExeded.state == true || isExeded.state == false}>Agregar al carrito</button>       
            </div>
            <Snackbar open={showNotificationExeded} autoHideDuration={5000} onClose={handleNotification} message={isExeded.message} action={action}/>
        </div>
    )
}

export default ItemDetailContainer;