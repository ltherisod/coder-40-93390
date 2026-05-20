import { createContext, useState } from "react";


//1. CREAR Y EXPORTAR MI CONTEXTO
export const CartContext = createContext()

//2. CREAMOS Y EXPORTAMOS AL PROVEEDOR DEL CONTEXTO
export const CartProvider = ({children})=> {
const [cart, setCart]= useState([])

//funciones que usern setCart para modificar el estado del carrito


    //AGREGAR UN ITEM AL CARRITO (CONTEMPLAR REPETIDOS)
    const addItem =(item, qty)=>{
        // console.log(item, qty)
        // console.log({...item, quantity:qty})
        if(isInCart(item.id)){
            //existe 
            //modifico cantiddes
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id){
                        //sumo cantidades
                        return {...prod, quantity: prod.quantity + qty }
                    }else{
                        //retornar ese prod SIN MODIFICARLO
                        return prod
                    }
                })
            )
        }else{
//no existe lo agrego al array como viene
            setCart([...cart,{...item, quantity:qty}])
        }
    }

        //VACIA EL CARRITO
    const clear =()=>{
            setCart([])
    }  
    
        //ELIMINA U ITEM DEL CARRITO
    const removeItem =(id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

           //SI EXISTE EN EL CARRITO (BOOLEAN)
    const isInCart =(id)=>{
        return cart.some((prod)=> prod.id === id)
        
    }

              //TOTAL A PAGAR
    const total =()=>{
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
    }

    
              //TOTAL A PAGAR con imp
    const totalImp =()=>{
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),1.5)
    }

              //CANTIDAD TOTAL DE ITEMS
    const totalQty =()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity,0)
    }



    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, total, totalQty}}>
            {children}
        </CartContext.Provider>
    )
}