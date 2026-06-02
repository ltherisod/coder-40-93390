import { useEffect, useState } from "react"
import { getProducts, productos } from "../mock/asyncData"
import Item from "./Item"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"


const ItemListContainer = ({saludo, alumno})=> {
    const[data, setData]= useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()




    //FIREBASE
     useEffect(()=>{
        setLoader(true)
        //1. CONECTARNOS CON NUESTRA COLLECTION / O CONECTAR CON QUERY
        const prodCollection = type ? query(collection(db,"items"), where("category", "==", type)) : collection(db,"items")
        //2.PEDIR LOS DATOS
        getDocs(prodCollection)
        .then((res)=>{
            //3. LIMPIO LA INFO
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            //4. GUARDARLO EN UN ESTADO
            setData(list)
        } )
        .catch((error)=> console.log(error))
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