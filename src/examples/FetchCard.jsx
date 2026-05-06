import React from 'react'

const FetchCard = ({pj}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={pj.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{pj.name}</h5>
   
   
  </div>
</div>
  )
}

export default FetchCard