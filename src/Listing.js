import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Listing = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    function loadDetails(id){
        console.log(id); 
        navigate(`/employee/details/${id}`);   
     }

     function removeData(id){
       if(window.confirm('Do You Wand Remove Data ?')){
        fetch(`http://localhost:5001/company/${id}`,{
            method:"DELETE" 
        }).then((res)=>{
            // console.log(res);
            alert('Removed SuccessFully');
            window.location.reload();
        })
       }
     }


       function UpdateData(id){
            navigate(`http://localhost:5001/company/${id}`)
            navigate(`/employee/edit/${id}`);  
       }


    useEffect(()=>{
        fetch('http://localhost:5001/company').then(res=> res.json()).then((respons)=>{
            console.log(respons);
            setUser(respons);
        })
    },[]);
  return (
<>
<div className='container'>
<div className='card'>
        <h1 className='card-title'>DATa</h1>
        <div className='card-body'>
            <div>
                <Link to='/create'className='btn btn-primary my-4'>Add New Record +</Link>
            </div>
            <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Addrss</td>
                        <td>Phone</td>
                        <td>Gender</td>
                        <td>Action</td>
                    </tr>

            </thead>
            <tbody>
                {
                    user.map((items , index)=>{
                        return(
                            <tr key={index}>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                    <td>{items.gender}</td>
                                    <td>
                                        <a className='btn btn-primary m-2'onClick={()=>UpdateData(items.id)}>Edit</a>
                                        <a  className='btn btn-danger m-2' onClick={()=>removeData(items.id)}>Delete</a>
                                        <a onClick={()=>loadDetails(items.id)} className='btn btn-success m-2'>Details</a>
                                    </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    </div>
</div>

</>
  )
}

export default Listing