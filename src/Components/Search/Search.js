import React, {useState } from 'react'

const Search = ({setAlert,searchInput,showClearBtn,clearButton}) =>{
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
                showClearBtn && <button onClick={clearButton} className='btn btn-secondary w-100 mt-3'>Clear Results</button> 
            }
        </div>
      </>
    )
}

export default Search