import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const[detail, setDetail]= useState({})
    const [loading, setLoading]= useState(true)
     const [invalid, setInvalid]= useState(null)
    // const params = useParams()
    // console.log(params, 'params')
      const {id} = useParams()

      //FIREBASE
        useEffect(()=>{
          //1. CONECTARNOS A NUESTRA COLLECCTION Y CREAR UNA REF
          const docRef = doc(db, "items",id )
          //2. TRAER EL DOC
          getDoc(docRef)
        .then((res)=>{
          if(res.data()){
            setDetail({id:res.id, ...res.data()})
          }else{
            setInvalid(true)
          }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])
   //PROMESA
    // useEffect(()=>{
    //     getOneProduct(id)
    //     .then((res)=> setDetail(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[id])


    
  return (
    <>
       {loading ? <LoaderComponent text='Cargando detalle...'/> : <ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer