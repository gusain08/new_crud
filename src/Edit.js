import React, { useEffect, useState } from 'react'

import {Link, useParams ,useNavigate } from 'react-router-dom'

const Edit = () => {
  const [newid, setNewId] = useState([]);
  
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [active, setActive] = useState(true);
  const [validate, setvalidation] = useState(true);
  const [gender,setGender] = useState('');
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(()=>{
    fetch(`http://localhost:5001/company/${id}`).then(res=> res.json()).then((respons)=>{
         setNewId(respons);
         setName(respons.name);
         setEmail(respons.email);
         setPhone(respons.phone);
         setActive(respons.active);
         setGender(respons.gender);
    }) 
},[]);

function updateData(e){
  e.preventDefault();
  let data = {name, email , phone, active,gender}
  fetch(`http://localhost:5001/company/${id}`,{
      method:'PUT',
      headers:{
          'Accept':'application/json',
          'Content-type':'application/json',
      },body:JSON.stringify(data)
  }).then((respons)=>{
    alert("Data Saved SuccesFully");
    navigate('/')
  }).catch((err)=>{
      console.log(err.message);
  })
}
  

  return (
    <>
      <div className='container'>
        <div className='card'>
        <h1 className='card-title p-5'>Edit Employee Data</h1>
        <div className='card-body'>
                <form className='row' onSubmit={updateData}>
                                    <fieldset className='col-md-6'>
                        <label>Name</label>
                        <input type='text' required value={name} onKeyUp={(e)=>setvalidation(true)} onChange={(e)=>setName(e.target.value)} className='form-control mb-4'/>
                       {name.length==0 && validate && <span className='text-danger'>Enter Your Name *</span> } 
                    </fieldset>
                    <fieldset className='col-md-6'>
                    <label>Email</label>
                        <input type='email'  value={email}  onChange={(e)=>setEmail(e.target.value)} className='form-control mb-4'/>
                    </fieldset>
                    <fieldset className='col-md-6'>
                    <label>Phone</label>
                        <input type='number' value={phone} onChange={(e)=>setPhone(e.target.value)}  className='form-control mb-4'/>
                    </fieldset>
                    <fieldset className='col-md-6'>
                        <select style={{width:'100%'}} onChange={(e)=>setGender(e.target.value)}>
                         <option>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </fieldset>
                    <fieldset className='col-md-12'>
                        <input required type='checkbox' value={active} onChange={(e)=>setActive(e.target.value)} className='form-check-input'/>
                        <label className='form-check-label'>is Active</label>
                    </fieldset>
                    <fieldset className='col-md-12'>
                        <button type='submit' className='btn btn-primary my-4'>Save</button>
                        <Link to='/' className="btn btn-danger ms-4" >Back</Link>
                    </fieldset>
                </form>
        </div>
        </div>
     </div>
    </>
  )
}

export default Edit