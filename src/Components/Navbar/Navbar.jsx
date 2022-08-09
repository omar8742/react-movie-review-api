import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({loginData}) {
  return (

  <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
    <a className="navbar-brand" href="#">Noxe</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to='Home'>Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='Movie'>Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='TvShow'>TvShow</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='People'>People</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='About'>About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='Network'>Network</Link>
        </li>

        
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
      <form className="form-inline my-2 my-lg-0">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
</form>

    <li className="nav-item">
          <a className="nav-link" href='#'><i className='fa-brands fa-facebook'></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'><i className='fa-brands fa-youtube'></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'><i className='fa-brands fa-instagram'></i></a>
        </li>
        {loginData? <li className="nav-item">
          <Link className="nav-link" to='Logout' onClick={logout}>Logout</Link>
        </li>:
        <>
        <li className="nav-item">
          <Link className="nav-link" to='Login'>Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='Register'>Register</Link>
        </li>
        </>
       }
        

      </ul>
    </div>
  </nav>
  )
  }
