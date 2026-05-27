import  { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {
  const [buyer, setBuyer]= useState({})
  const [secondMail, setSecondMail]= useState('')
  const [orderId, setOrderId]= useState('')
   const [errors, setErrors]= useState(null)
    const [loading, setLoading]= useState(false)
  const {cart, total, clear}= useContext( CartContext)
  

  const buyerData = (e)=> {
    setBuyer(
        {
            ...buyer,
            [e.target.name]: e.target.value
        }
    )
  }
   




console.log(buyer,'comprador')

const terminarCompra = (e)=>{

    //1. PREVENIR QUE EL FORM RECARGUE
    e.preventDefault()
    //2. VALIDAR EL FORM

    if(!buyer.name  || !buyer.lastname || !buyer.address || !buyer.mail || !secondMail){
        setErrors('Por favor complete todos los campos!')
    }else if( buyer.mail !== secondMail){
        setErrors('Los correos no coinciden!')
    }else{
        setErrors(null)
        setLoading(true)
        let orden = {
            comprador: buyer,
            carrito:cart,
            total:total(),
            fecha:serverTimestamp()
        }
    
        const orderColl = collection(db, "orders")
        //agregamos el doc
        addDoc(orderColl, orden)
        .then((res)=> {
            clear()
            setOrderId(res.id)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }

}

    if(!cart.length && !orderId ){
        return <EmptyCart/>
    }



  return (
    <>
     
       {
        orderId 
        ? <div>
            <h1>Muchas gracias por tu compra! </h1>
            <h2> Tu orden es: {orderId}</h2>
            <Link className='btn btn-dark' to='/'>Volver a home</Link>
        </div>
        : <div>
                <h1>Complete con sus datos</h1>
                {errors && <span style={{color:'red'}}>{errors}</span>}
                <form className='p-4 border rounded shadow-sm bg-light' onSubmit={terminarCompra}  >
                    <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' onChange={buyerData} />
                    <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' onChange={buyerData}/>
                    <input className='form-control' name='address' type='text' placeholder='Ingresa su direccion' onChange={buyerData}/>
                    <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo'onChange={buyerData} />
                    <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo' onChange={(e)=> setSecondMail(e.target.value)} />
                    <button type='submit' className='btn btn-success' disabled={loading} >{loading ? 'Cargando compra...' : 'Terminar Compra'}</button>
                </form>
         </div>
       }
       
        
     
       
    
    </>
  )
}

export default Checkout