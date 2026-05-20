import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const[detail, setDetail]= useState({})
    const [loading, setLoading]= useState(true)
    // const params = useParams()
    // console.log(params, 'params')
      const {id} = useParams()
   
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])
    
  return (
    <>
       {loading ? <LoaderComponent text='Cargando detalle...'/> : <ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer