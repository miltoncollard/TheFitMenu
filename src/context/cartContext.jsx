import React, {useState, createContext, useEffect} from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() =>{
        //setTotal(handleTotal())
        //setPrice(handleTotalPrice())
    }, [cartItems])

    //Agrego un item al carrito.
    const addItem = (item, count) => {
        let cartElement = {item, count}
        let cartAux = []

        if(isInCart(item)){
            console.log('Esta en carrito')
            
            cartElement = cartItems.find(element => element.item.id === item.id)
            cartElement.count = cartElement.count + count
            cartAux = [...cartItems]
        }else{
            console.log('No esta en carrito')
            cartAux = [cartElement, ...cartItems]
        }

        setCartItems(cartAux)
    }

    // * Quito el elemento del carrito
    const removeItem = (item) => {
        if (isInCart(item)) {
        // 1. FILTRO mi carrito para obtener el resto de los items.
        const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
        // 2. actualizo el carrito, si solo tenia un elemento lo inicializo como []
        setCartItems([...cartElements])
        } 
    }

    const clear = () =>{
        return setCartItems([])
    }

    const isInCart = (item) =>{
        return cartItems && cartItems.some(element => element.item.id === item.id)
    }

    



     
    return(
        <CartContext.Provider value={{
            cartItems,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}