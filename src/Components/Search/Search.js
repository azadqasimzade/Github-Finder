import React, {useContext, useState } from 'react'
import AlertContext from '../Context/Alert/alertContext'
import GithubContext from '../Context/Github/githubContext'

const Search = () =>{
    const {searchInput,clearButton,users} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const [keyword, setKeyword] = useState('')

    const onChange = (e) =>{
        setKeyword(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if(keyword === ''){
            setAlert('Enter keyword!','danger')
        }else{
            searchInput(keyword)
            setKeyword('')
        }
    }

    return (
      <>
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className='form-control' />
                    <button type='submit' className='btn btn-primary'>Search</button>
                </div>
            </form>
            {
                users.length > 0 && <button onClick={clearButton} className='btn btn-secondary w-100 mt-3'>Clear Results</button>
            }
        </div>
      </>
    )
}

export default Search