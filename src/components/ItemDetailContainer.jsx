import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[detail, setDetail]= useState({})
    // const params = useParams()
    // console.log(params, 'params')
      const {id} = useParams()
   
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
    },[id])
    
  return (
    <>
        <ItemDetail detail={detail}/>
    </>
  )
}

export default ItemDetailContainer