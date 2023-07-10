import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
  const{id} = useParams();
  const [newid, setNewId] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5001/company/${id}`).then(res=> res.json()).then((respons)=>{
         setNewId(respons);
    }) 
},[]);


  return (
   <>
   <div className="card">
{
       newid &&  <h1>Name:{newid.name} :  <span>{newid.id}</span></h1>
}
   </div>
   </>
  )
}

export default Details