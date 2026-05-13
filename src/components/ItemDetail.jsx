import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {

  const onAdd = (cantidad)=>{
    alert(`Agregaste al carrito ${cantidad} unidades de ${detail.name}`)
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
        <ItemCount stock={detail.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail