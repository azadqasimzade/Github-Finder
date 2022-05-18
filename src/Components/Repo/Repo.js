import React from 'react'

const Repo = ({repo}) => {
  return (
    <>
        <li className='list-group-item'>
            <a href={repo.html_url} style={{textDecoration:'none',fontWeight:'500'}} target={'_blank'} rel="noreferrer">
                <i className="bi bi-arrow-right-circle-fill me-2"></i>
                {repo.name}
            </a>
        </li>
    </>
  )
}

export default Repo;