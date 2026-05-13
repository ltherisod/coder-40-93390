import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import Item from "./Item"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"


const ItemListContainer = ({saludo, alumno})=> {
    const[data, setData]= useState([])
    const {type}= useParams()


    useEffect(()=>{
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
        //a la escucha del cambio de categoria
    },[type])


console.log(type)
    return( 
    <div>
        {/* <Input/> */}
       <h1>{saludo}</h1> 
       <ItemList data={data}/>
    </div>
    )
}

export default ItemListContainer