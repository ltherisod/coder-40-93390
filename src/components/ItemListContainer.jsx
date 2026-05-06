import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncData"
import Item from "./Item"
import ItemList from "./ItemList"


const ItemListContainer = ({saludo, alumno})=> {
    const[data, setData]= useState([])
    // const {saludo, alumno}=props
    // console.log(props)
    useEffect(()=>{
        //pedir datos
        getProducts()
        .then((res)=> setData(res))//guardo la respuesta
    },[])

    return( 
    <div>
       <h1>{saludo}</h1> 
       {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
       {/* {data.map((prod)=> <Item key={prod.id} prod={prod}/>)} */}
       <ItemList data={data}/>
    </div>
    )
}

export default ItemListContainer