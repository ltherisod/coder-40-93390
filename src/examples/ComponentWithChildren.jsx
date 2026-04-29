import React from 'react'

const ComponentWithChildren = ({children}) => {
  return (
    <div
     style={{
        backgroundColor:'#d292ed',
        width:'90%',
        height:'30rem',
        borderRadius:'5%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:15}}
    >
        <h2>ComponentWithChildren</h2>
        <div>
             {children}
        </div>
           
    </div>
  )
}

export default ComponentWithChildren