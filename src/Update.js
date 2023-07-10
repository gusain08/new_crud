import React from 'react'
import { useState } from 'react'
const Update = () => {
    const [userid, setUserid] =  useState(null);
    
  const [name, setnewName]= useState('');
  const [email, setnewEmail]= useState('');
  const [designation, setnewDes]= useState('');

    function updateUserData(){
    
        console.log(name,email,designation,userid);
        const saveData = {name,email,designation,userid}
        fetch(`http://localhost:8001/employee/${userid}`,{
        method:"PUT",
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(saveData)
      }).then((res)=>{
        res.json().then((response)=>{
          console.log(response);
          getUserData();
        })
      })
     }
  return (
    <>
    <div className='form'>
   <h1 style={{textAlign:'center'}}>Update  form</h1>
      <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
      <input type='email' placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
      <input type='text' placeholder='designation' value={designation} onChange={(e)=>setDes(e.target.value)}/><br/>
      <button onClick={updateUserData} >Update Data</button>
      </div>
    
    </>
  )
}

export default Update