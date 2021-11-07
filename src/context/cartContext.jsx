import React, {useState, createContext, useEffect} from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartProducts')) || [])
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(0)
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() =>{
        //setTotal(handleTotal())
        //setPrice(handleTotalPrice())
    }, [cartItems])

    //Agrego un item al carrito.
    const addItem = (product) => {
        let id
        product.map((e)=>{
            id = e.id
        })
        const idDuplicado = cartItems.some(item => item.id === id);
        console.log("PRODUCT: ", product[0])
        //ARMAR NUEVO ARRAY DE OBJETOS PARA ALMACENAR EN EL LOCAL STORAGE CON:
        /*  -ID producto
            -TIPO producto
            -CANTIDAD producto
            -PLATOS:    -ID plato
                        -CANTIDAD plato 
        */
        if(!idDuplicado){
            setCartItems([
                ...cartItems,
                product[0]
            ])
            addItemStorage()
        }else{
            setShowNotification(true)
            console.log("Notification: ",showNotification)
        }
    }

    const addItemStorage = () =>{
        localStorage.setItem("cartProducts", JSON.stringify(cartItems))
    }

    const handleNotification = () => {
        setShowNotification(false)
    }

    // * Quito el elemento del carrito
    const removeItem = (product) => {
        if (isInCart(product)) {
        // 1. FILTRO mi carrito para obtener el resto de los items.
        const cartElements = cartItems.filter(element => element.id !== product.id) || []
        // 2. actualizo el carrito, si solo tenia un elemento lo inicializo como []
        setCartItems([...cartElements])
        } 
    }

    const clear = () =>{
        return setCartItems([])
    }

    const isInCart = (product) =>{
        return cartItems && cartItems.some(element => element.id === product.id)
    }

    
    const updatePrice = (data,count) =>{
        console.log("DATA: ",data)
        console.log("COUNT: ",count) 
    }


     
    return(
        <CartContext.Provider value={{
            cartItems,
            addItem,
            removeItem,
            clear,
            showNotification,
            handleNotification,
            updatePrice
        }}>
            {children}
        </CartContext.Provider>
    )
}