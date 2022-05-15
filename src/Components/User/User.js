import React, { Component } from 'react'

export class User extends Component {
  render() {
    const {login,avatar_url,html_url} = this.props.user
    return (
      <>
          <div className="col-lg-3 col-md-4 col-6 mt-3">
            <div className="card">
              <img src={avatar_url} alt={login} />
              <div className="card-body">
                <h5 className='card-title'>{login}</h5>
                <a href={html_url} className='btn btn-primary btn-sm' target={'_blank'} rel="noreferrer">Go profile</a>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default User