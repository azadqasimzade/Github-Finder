import React from 'react'
import { Link } from 'react-router-dom'

const User= ({user}) => {
  const {login,avatar_url} = user
  return (
    <>
        <div className="col-lg-3 col-md-4 col-6 mt-3">
          <div className="card">
            <img src={avatar_url} alt={login} />
            <div className="card-body">
              <h5 className='card-title'>{login}</h5>
              <Link to={`/user/${login}`} className='btn btn-primary btn-sm'>Go profile</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default User