import React, { useContext } from 'react'
import Loading from '../Loading/Loading'
import User from '../User/User'
import GithubContext from '../Context/Github/githubContext'

const Users =() =>{
  const {users,loading} = useContext(GithubContext)

  if(loading){
    return <Loading/>
  }else{
    return (
      <>
        <div className="container">
          <div className="row">
            {
              users.map(user =>(
                <User key={user.id} user={user}/>
              ))
            }
          </div>
        </div>
      </>
    )
  }
}

export default Users