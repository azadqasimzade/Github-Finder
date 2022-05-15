import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import User from '../User/User'

export class Users extends Component {
  render() {
    if(this.props.loading){
      return <Loading/>
    }else{
      return (
        <>
          <div className="container">
            <div className="row">
              {
                this.props.users.map(user =>(
                  <User key={user.id} user={user}/>
                ))
              }
            </div>
          </div>
        </>
      )
    }
  }
}

export default Users