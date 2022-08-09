import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home";
import Movie from  "../Movie/Movie";
import TvShow from "../Tv/TvShow";
import People from "../People/People";
import About from "../About/About";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Network from "../Network/Network";
import Logout from '../Logout/Logout';
import Defoult from '../Defoult/Defoult';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Details from '../Details/Details';

export default function App() {

let [loginUser,setLogInUser]=useState(null);


let navigate=useNavigate();
function logOut(){
 localStorage.removeItem('token');
 setLogInUser(null);
 navigate('/Login')
}
 
 

function setUserData(){
  let token= localStorage.getItem('token');
  let decode=jwtDecode(token);
  setLogInUser(decode);

}

useEffect(()=>{
if(localStorage.getItem('token')){
  setUserData();
}
},[])

  return (
<div>
<Navbar loginData={loginUser} logOut={logOut}/>
<div className="container">
  <Routes>
    <Route path='/' element={<Defoult/>}></Route>
    <Route path='Home' element={<Home/>}></Route>
    <Route path='Movie' element={<Movie/>}></Route>
    <Route path='Detalis' element={<Details/>}></Route>

    <Route path='TvShow' element={<TvShow/>}></Route>
    <Route path='People' element={<People/>}></Route>
    <Route path='About' element={<About/>}></Route>
    <Route path='Login' element={<Login setUserDa={setUserData}/>}></Route>
    <Route path='Register' element={<Register/>}></Route>
    <Route path='Network' element={<Network/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    <Route path='Logout' element={<Logout/>}></Route>

    
  </Routes>
</div>
      </div>  )
}













