import React, { useState } from 'react'
import ItemCount from './ItemCount'
//4. CONSULTAR AL CONTEXTO
//NECSITO IMPORTAR EL HOOK P/ USAR EL CONTEXTO USECONTEXT
import { useContext } from 'react'
//NECESITO IMPORTAR EL CONTEXTO QUE QUIERO UTILIZAR
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
  //error comun
// const context= useContext()
// console.log(context, 'contexto')
const [purchase, setPurchase]= useState(false)

//como deberia ser
const {cart, addItem}= useContext(CartContext)
console.log(cart, 'contexto')
  const onAdd = (cantidad)=>{
   addItem(detail,cantidad)
   setPurchase(true)
  }

  return (
      <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <h2>Detalle del producto {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price}</p>
        <p>stock disponible: {detail.stock} unidades</p>
       {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail