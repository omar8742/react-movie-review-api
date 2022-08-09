import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import joi from 'joi';
import {useNavigate} from 'react-router-dom';
export default function register() {

  let [user,setUser]= useState({
    first_Name:"",
    last_Name:'',
    age:'',
    email:'',
    password:'',
  }); 

   let navigate=useNavigate;
   function gotToLogin(){
    let path='/Login';
    navigate(path);
   }

  let [errorList,setErrorList]=useState([]);
  let [erorMsg,setErrorMsg]=useState('');
  let [loading,setLoading]=useState(false);

 async function submitFormData(e){
e.preventDefault();
setLoading(true);
let {data} = await axios.post('http://localhost:3000/api/v1/users/signUp',user);
if(data.message=='success'){
  setLoading(false);
gotToLogin();
}
else{
  setErrorMsg(data.message);
  setLoading(false);
}
let validateResult=validateForm();
if(validateResult.error){
  setErrorList(validateResult.error.details);
}
  }
  
  function getFormValue(e){
let myUser = {...user}; 	 
myUser[e.target.name]=e.target.value;
setUser(myUser);
console.log(myUser);
  }

  function validateForm(){
    const schema = joi.object({
      first_Name:joi.string().required().min(3).max(10),
      last_Name:joi.string().required().min(3).max(10),
      age:joi.number().required().min(20).max(80),
      email:joi.string().required().email({tlds:{allow:['com','net']}}),
      password:joi.string().required().pattern(new RegExp('[a-z][0-9]{3}$')),
      first_Name:joi.string().required().min(3).max(10),
	
    });
    return schema.validate(user,{abortEarly:false});
  }

  return (
    <div>
  <h1 className="my-5">Regisrter form</h1>
  {erorMsg?<div className='alert alert-danger'>{erorMsg}</div>:''}  
  {errorList.map((error,index)=>
  <div key={index}  className='alert alert-danger'>{error.message}</div> 
  )}
  <form onSubmit={submitFormData}>
    <div className='mb-3'>
    <label htmlFor="first_Name" className="form-label">First_Name</label>
<input type="text" className="form-control" onChange={getFormValue} id="first_Name" name="first_Name" aria-describedby="basic-addon3" />
  </div>

  <div className='mb-3'>

    <label htmlFor="last_Name" className="form-label">Last_Name</label>
    <input onChange={getFormValue} type="text" className="form-control" id="last_Name" name='last_Name' aria-describedby="basic-addon3" />
 </div>

 <div className='mb-3'>
    <label htmlFor="age" className="form-label">Age</label>
    <input onChange={getFormValue} type="text" className="form-control" id="age" name='age' aria-describedby="basic-addon3" />
</div>

 <div className='mb-3'>
    <label htmlFor="email" className="form-label">Email</label>
    <input onChange={getFormValue} type="email" className="form-control" id="email" name='email' aria-describedby="basic-addon3" />
    </div>

    <div className='mb-3'>
    <label htmlFor="password" className="form-label">Password</label>
    <input onChange={getFormValue} type="password" className="form-control" id="password" name='password' aria-describedby="basic-addon3" />
</div>

<button className='btn btn-info'>
  {loading?<i className='fa fa-spinner fa-spin'></i>:'register'}
  </button>
  </form>
  
</div>
)
}
