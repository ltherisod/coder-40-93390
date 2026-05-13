import React from 'react'
//1. Se importa de react
import {useState, useEffect} from 'react'


const ItemCount = ({stock, onAdd}) => {
    const[count, setCount ]= useState(0)
    // const[comprar, setComprar ]= useState(false)
//const [variableDeEstado, FuncionModificadora]= useState(ValorInicial)

const sumar = ()=> {
    if(count < stock){
        setCount(count + 1)
    }
}
const restar= ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}


const purchase = ()=>{
    onAdd(count)
}
// useEffect(()=>{
//     //codigo
// },[array de dependencias])






console.log('ItemCount')
  return (
       <div className="counter-container">
            <div className="counter-controls">
                <button className="btn btn-danger" onClick={restar}>-</button>

                <span className="counter-value">{count}</span>

                <button className="btn btn-success" onClick={sumar}>+</button>
            </div>
            <button className="btn btn-primary buy-btn"  onClick={purchase}>Comprar</button>
             {/* <button className="btn btn-primary buy-btn"  onClick={()=>onAdd(count)}>Comprar</button> */}
        </div>
  )
}

export default ItemCount