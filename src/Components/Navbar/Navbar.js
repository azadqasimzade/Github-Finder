import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className='navbar navbar-dark bg-primary'>
            <div className="container">
                <div className="row">
                    <a href="/" className='navbar-brand' rel="noreferrer">Github Finder <i className='bi bi-github'></i></a>
                </div>
            </div>
        </nav>    
    </>
  )
}
