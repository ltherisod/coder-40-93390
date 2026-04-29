import React from 'react'
//1. Se importa de react
import {useState, useEffect} from 'react'


const ItemCount = () => {
    const[count, setCount ]= useState(0)
    const[comprar, setComprar ]= useState(false)
//const [variableDeEstado, FuncionModificadora]= useState(ValorInicial)

const sumar = ()=> {
    setCount(count + 1)
}
const restar= ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}
const purchase = ()=>{
    setComprar(!comprar)
}
// useEffect(()=>{
//     //codigo
// },[array de dependencias])



//1. SE EJECUTA SIEMPRE
//USO: CASI NUNCA/ NUNCA. 
useEffect(()=>{
    console.log('ME EJECUTO SIEMPRE 😱')
})



//2. SE EJECUTA UNA SOLA VEZ
//USO: CASI SIEMPRE. 
useEffect(()=>{
    console.log('ME EJECUTO UNA SOLA VEZ, CUANDO SE MONTA EL COMPONENTE 🤭')
},[])


//3. SE EJECUTA CUANDO MONTA EL COMPONENTE Y SIEMPRE QUE LO QUE ESTE ESCUCHANDO CAMBIE
//USO: CASI SIEMPRE / SIEMPRE. 
useEffect(()=>{
    console.log('ME EJECUTO UNA  CUANDO SE MONTA EL COMPONENTE  Y SIEMPRE QUE COMPRAR CAMBIE 🥳', comprar)
},[comprar])



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