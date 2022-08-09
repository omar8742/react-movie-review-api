import React from 'react'
import  { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Movie() {
  
let navigate=useNavigate();

function goToDetail(id){
navigate({
  pathname:'/Detalis',
search:`?id=${id}`
})
}

  let avatar='./109815470-man-avatar-profile-male-face-icon-vector-illustration-.webp'
let prefix='https://image.tmdb.org/t/p/w500';

let [trendingMovies,setTrendingMovies]=useState([]);  

async function getTrendingItems(){
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=713c1865a67a8a8c7ccbd9d35d2f8cb2`); 
  setTrendingMovies(data.results);
    }

    
  useEffect(()=>{
    getTrendingItems();
  
    },[]);

    

  return (
<>
<div className='row'>

  {trendingMovies.map((movie,index)=>
  <div className='col-md-2 my-3' key={index}>
  <div className="item">
    <img src={prefix+movie.poster_path} alt='' className='w-100' />
    <h2  className='h6 text-center mt-3' onClick={()=>goToDetail(movie.id)}>{movie.title}</h2>
  </div>
  </div>
  )}
</div>

</>

)
}
