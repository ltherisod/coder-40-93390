import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {
  return (
    <div>
        <h2>Detalle del producto {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price}</p>
        <p>stock disponible: {detail.stock} unidades</p>
        <ItemCount stock={detail.stock}/>
    </div>
  )
}

export default ItemDetail