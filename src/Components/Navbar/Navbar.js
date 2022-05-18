import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className='navbar navbar-dark bg-primary'>
            <div className="container">
                <div className="row">
                    <Link to="/" className='navbar-brand' rel="noreferrer">Github Finder <i className='bi bi-github'></i></Link>
                </div>
            </div>
        </nav>    
    </>
  )
}
