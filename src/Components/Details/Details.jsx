import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
export default function Details() {

    let [searchParams,setSearchParams]=useSearchParams();
let [details,setDetails]=useState([]);


let currentId=searchParams.get('id');
let avatar='./109815470-man-avatar-profile-male-face-icon-vector-illustration-.webp'
let prefix='https://image.tmdb.org/t/p/w500';


async function getDetails(){

let  {data}= await axios.get(`https://api.themoviedb.org/3/movie/${currentId}?api_key=713c1865a67a8a8c7ccbd9d35d2f8cb2&language=en-US`)
setDetails(data);
}

useEffect(()=>{
  getDetails();
},[])

  return (
    <div className='row'>
<div className='col-md-4'>
<img src={prefix+details.poster_path} alt='' className='w-100' />
</div>

<div className='col-md-8'>
<h2>{details.title}</h2>
<p >{details.overview}</p>
<p>vote:{details.vote_average}</p>
<p>vote:{details.vote_count}</p>

</div>
      </div>
  )
}
