import React from 'react'
    import {useState} from 'react';
    import axios from 'axios';
    import joi from 'joi';
    import {useNavigate} from 'react-router-dom';
export default function Login({setUserData}) {
  
    
    
      let [user,setUser]= useState({
        first_Name:"",
        last_Name:'',
        age:'',
        email:'',
        password:'',
      }); 
       let navigate=useNavigate;
       function gotToHome(){
        let path='/Home';
        navigate(path);
       }
      let [errorList,setErrorList]=useState([]);
      let [erorMsg,setErrorMsg]=useState('');
      let [loading,setLoading]=useState(false);
    
     async function submitFormData(e){
    e.preventDefault();
    setLoading(true);
    let {data} = await axios.post('http://localhost:3000/api/v1/users/signIn',user);
    if(data.message=='Done'){
      setLoading(false);
      localStorage.setItem('token',data.token);
    gotToHome();
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
          
          password:joi.string().required().pattern(new RegExp('[a-z][0-9]{3}$')),
          first_Name:joi.string().required().min(3).max(10),
      
        });
        return schema.validate(user,{abortEarly:false});
      }
    
      return (
        <div>
      <h1 className="my-5">login form</h1>
      {erorMsg?<div className='alert alert-danger'>{erorMsg}</div>:''}  
      {errorList.map((error,index)=>
      <div key={index}  className='alert alert-danger'>{error.message}</div> 
      )}
      <form onSubmit={submitFormData}>
      
    
      
    
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
      
