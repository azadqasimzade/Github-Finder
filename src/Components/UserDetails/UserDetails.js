import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import Repos from '../Repos/Repos';

export class UserDetails extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }
  render() {
      const {loading,repos} = this.props;
      const {login, name, avatar_url, blog, bio, html_url,location, followers, following, public_repos} = this.props.user;
      if(loading){
          return <Loading/>
      }else{
        return (
            <>
              <div className="container mt-3">
                  <div className="row">
                      <div className="col-lg-4 col-md-12">
                          <div className="card">
                            <img src={avatar_url} alt={login} className="card-img-top" />
                            <div className="card-body">
                                <h5 className='card-title'>{login}</h5>
                                {
                                    location && (
                                        <p><i className="bi bi-geo-alt-fill"></i>{location}</p>
                                    )
                                }
                                <a href={html_url} className='btn btn-primary' target={'_blank'} rel='noreferrer'>Go profile</a>
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-8 col-md-12">
                         <div className="card">
                             <div className="card-body">
                             {
                              name && (
                                  <h3>{name}</h3>
                              )
                            }
                            {
                                <div className='my-3'>
                                    <span className='badge bg-primary m-1 p-2'>Followers: {followers}</span>
                                    <span className='badge bg-danger m-1 p-2'>Following: {following}</span>
                                    <span className='badge bg-success m-1 p-2'>Repos: {public_repos}</span>
                                </div>
                            }
                            {
                                bio && (
                                    <p>Bio: {bio}</p>
                                )
                            }
                            {
                                blog && (
                                    <p>Blog: <a href={blog} target={'_blank'} rel="noreferrer">{blog}</a></p>
                                )
                            }

                                <ul className='list-group'>
                                    
                                </ul>
                             </div>
                             {
                                 repos.length > 0 && (
                                     <>
                                        <h5 className='card-text ms-3'>Repositories: </h5>
                                        <Repos repos={repos}/>
                                     </>
                                 )
                             }
                         </div>
                      </div>
                  </div>
              </div>
            </>
          )
      }
  }
}

export default UserDetails