import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'

const FetchContainer = () => {
    // const [personajes, setPersonajes]= useState([])
    // const [error, setError]= useState(null)
    const {data, error, loading}= useFetch('https://rickandmortyapi.com/api/character')
    const {data: dataDB }= useFetch('https://dragonball-api.com/api/characters')
    console.log({data, error, loading}, {dataDB})
    ///THEN Y CATCH
    // useEffect(()=>{
    //     //1. PIDO DATOS
    //     fetch('https://rickandmortyapi.com/api/character')
    //     .then((res)=> res.json()) //2. TRADUCIR LA RESPUESTA
    //     .then((data)=> setPersonajes(data.results)) //3. GUARDO LA DATA
    //     .catch((error)=>{
    //          console.log(error)
    //          setError(true)
    //     })//4. ATRAPAMOS EL ERROR
    // },[])


    //ASYNC/AWAIT
    // useEffect(()=>{
    //     const pedirPjs = async()=> {
    //       try{
    //           //1. PIDO DATOS
    //         const res = await fetch('https://rickandmortyapi.com/api/character')
            
    //         //2. TRADUCIR LA RESPUESTA
    //         const data = await res.json()
    //         //3. Guando en un estado
    //         setPersonajes(data.results)
    //       }catch(error){
    //         //4.atrapamos el error
    //         console.log(error)
    //       }

    //     }
    //     pedirPjs()
    // },[])

// console.log(personajes)
  return (
    <>
    <FetchList personajes={data?.results}/>
    </>
  )
}

export default FetchContainer