import React from 'react'
import Repo from '../Repo/Repo';

const Repos = ({repos}) => {
  return (
    <>
        <ul className='list-group list-group-flush'>
            {
                repos.map(repo =>(
                    <Repo key={repo.id} repo={repo}/>
                ))
            }
        </ul>
    </>
  )
}

export default Repos;