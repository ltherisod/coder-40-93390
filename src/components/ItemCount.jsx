import React from 'react'
//1. Se importa de react
import {useState, useEffect} from 'react'


const ItemCount = ({stock}) => {
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
    
}
// useEffect(()=>{
//     //codigo
// },[array de dependencias])






console.log('ItemCount')
  return (
    <div>
        <button className='btn btn-danger' onClick={restar} disabled={count === 0}>-</button>
        <span className='btn '>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
        <button className='btn btn-primary'  onClick={purchase}>Comprar</button>
    </div>
  )
}

export default ItemCount