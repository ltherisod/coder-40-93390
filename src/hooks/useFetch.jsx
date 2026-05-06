import { useEffect, useState } from "react"

export const useFetch = (url)=>{
const [data, setData]= useState(null)
const [error, setError]= useState(null)
const [loading, setLoading]= useState(true)

useEffect(()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((result)=> setData(result))
    .catch((error)=> setError(error))
    .finally(()=> setLoading(false))
},[url])

return {data, error, loading}

}