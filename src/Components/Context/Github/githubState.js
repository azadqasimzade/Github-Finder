import React, { useReducer } from "react"
import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import axios from 'axios'

const GithubState = (props) =>{
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchInput =(keyword) =>{
        setLoading()
        
        axios.get(`https://api.github.com/search/users?q=${keyword}`)
          .then(res =>{
            dispatch({
                type: 'SEARCH_USERS',
                payload: res.data.items
            })
        })
    }

    const getUser =(username) =>{
        setLoading()
    
        axios.get(`https://api.github.com/users/${username}`)
          .then(res =>{
            dispatch({
                type: 'GET_USER',
                payload: res.data
            })
        })
      }

    const getUserRepos = (username) =>{
        setLoading()

        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res =>{
            dispatch({
                type: 'GET_REPOS',
                payload: res.data
            })
        })
    }

    const clearButton =() =>{
        dispatch({
            type: 'CLEAR_BUTTON'
        })
      }

    const setLoading = () =>{
        dispatch({type: 'SET_LOADING'})
    }

    return(
        <GithubContext.Provider
            value={{
                users: state.users, 
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchInput,
                clearButton,
                getUser,
                getUserRepos
            }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;