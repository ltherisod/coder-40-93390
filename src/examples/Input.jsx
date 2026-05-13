import React, { useState } from 'react'

const Input = () => {
    const [name, setName]= useState('')


    const handleChange = (event)=> {
        // console.log(event)
        //  console.log(event.target)
        //    console.log(event.target.value)
        setName(event.target.value)
    }

    
  return (
    <div>
       <h2>Input</h2> 
       <input placeholder='Ingresa tu nombre completo' type='text' name='nombre-completo' className='form-control' onChange={handleChange}/>
       <p>{name}</p>
    </div>
  )
}

export default Input