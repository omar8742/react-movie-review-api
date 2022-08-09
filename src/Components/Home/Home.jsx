import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import style from './Home.module.css';
export default function Home() {
let [trendingMovies,setTrendingMovies]=useState([]);  
let [trendingTv,setTrendingTv]=useState([]);
let [trendingPerson,setTrendingPerson]=useState([]);

let avatar='./109815470-man-avatar-profile-male-face-icon-vector-illustration-.webp'
let prefix='https://image.tmdb.org/t/p/w500';

 async function getTrendingItems(mediaType,callback){
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=713c1865a67a8a8c7ccbd9d35d2f8cb2`); 
callback(data.results);
  }

  useEffect(()=>{
getTrendingItems('movie',setTrendingMovies);
getTrendingItems('tv',setTrendingTv);
getTrendingItems('person',setTrendingPerson);
},[]);

  return (

    <>
    <div className='row'>
  <div className='col-md-4 d-flex align-items-center'>
    <div>
    <div className={`w-25 mb-3 ${style.brdr}`} ></div>
    <h2>Trending<br/>Movies<br/>To Watch Now</h2>
    <p>most watched movie by day</p>
    <div className={`w-100 ${style.brdr}`}></div>
    </div>
  </div>
  {trendingMovies.map((movie,index)=>
  <div className='col-md-2 my-3' key={index}>
  <div className="item">
    <img src={prefix+movie.poster_path} alt='' className='w-100' />
    <h2  className='h6 text-center mt-3'>{movie.title?movie.title:movie .name}</h2>
  </div>
  </div>
  )}
</div>

<div className='row'>
  <div className='col-md-4 d-flex align-items-center'>
    <div>
    <div className={`w-25 mb-3 ${style.brdr}`} ></div>
    <h2>Trending<br/>Tv<br/>To Watch Now</h2>
    <p>most watched movie by day</p>
    <div className={`w-100 ${style.brdr}`}></div>
    </div>
  </div>
  {trendingTv.map((movie,index)=>
  <div className='col-md-2 my-3' key={index}>
  <div className="item">
    <img src={prefix+movie.poster_path} alt='' className='w-100' />
    <h2  className='h6 text-center mt-3'>{movie.title?movie.title:movie .name}</h2>
  </div>
  </div>
  )}
</div>

<div className='row'>
  <div className='col-md-4 d-flex align-items-center'>
    <div>
    <div className={`w-25 mb-3 ${style.brdr}`} ></div>
    <h2>Trending<br/>person<br/>To Watch Now</h2>
    <p>most watched movie by day</p>
    <div className={`w-100 ${style.brdr}`}></div>
    </div>
  </div>
  {trendingPerson.map((movie,index)=>
  <div className='col-md-2 my-3' key={index}>
  <div className="item">
    <img src={movie.profile_path?prefix+movie.profile_path:avatar} alt='' className='w-100' />
    <h2  className='h6 text-center mt-3'>{movie.title?movie.title:movie .name}</h2>
  </div>
  </div>
  )}
</div>
    </>

    )
}
