import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import Item from "./Item"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import LoaderComponent from "./LoaderComponent"


const ItemListContainer = ({saludo, alumno})=> {
    const[data, setData]= useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()


    useEffect(()=>{
        setLoader(true)
        //pedir datos
        getProducts()
        .then((res)=> {
            if(type){
                //filtrar
                setData(res.filter((prod)=> prod.category === type))
            }else{
                //todos los productos
                setData(res)
            }
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoader(false))
        //a la escucha del cambio de categoria
    },[type])


console.log(type)
    return( 
    <>
    {
        loader 
        ? <LoaderComponent text={type ? 'Cargando categoría...' : 'Cargando productos...'}/>
        :<div>
       <h1>{saludo}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1> 
       <ItemList data={data}/>
    </div>
    }
    </>
    )
}

export default ItemListContainer