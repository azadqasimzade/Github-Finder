import React, {useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import axios from 'axios'
import Search from './Components/Search/Search';
import Alert from './Components/Alert/Alert';
import UserDetails from './Components/UserDetails/UserDetails'

const App =()=> {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState(null)

  useEffect(() =>{
    const users = JSON.parse(localStorage.getItem('github'))

    if(users){
      setUsers(users)
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem('github',JSON.stringify(users))
  }, [users])

  const searchInput =(keyword) =>{
    setLoading(true)
    
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res =>{
        setUsers(res.data.items)
        setLoading(false)
    })
  }

  const getUser =(username) =>{
    setLoading(true)

    axios.get(`https://api.github.com/users/${username}`)
      .then(res =>{
        setUser(res.data)
        setLoading(false)
    })
  }

  const getUserRepos = (username) =>{
    setLoading(true)

    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res =>{
        setRepos(res.data)
        setLoading(false)
    })
  }

  const clearButton =() =>{
    setUsers([])
    setUser({})
    setRepos([])
  }

  const showAlert =(msg,type) =>{
    setAlert({msg, type})

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const clearAlert =() =>{
    setAlert(null)
  }

    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={'/'} render={(routeProps =>{
            return(
              <>
                  <Alert 
                    alert={alert}
                    clearAlert={clearAlert}/>
                  <Search 
                    searchInput={searchInput}
                    clearButton={clearButton} 
                    showClearBtn={users.length>0 ? true : false}
                    setAlert={showAlert}/>
                  <Users users={users} loading={loading} user={user}/>
              </>
            )
          })}/>
          <Route path={'/user/:login'} render={(routeProps) =>{
            return (
              <>  
                <UserDetails 
                  {...routeProps}
                  getUser={getUser} 
                  user={user} 
                  loading={loading}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  />
              </>
            )
          }}/>
        </Switch>
      </Router>
      </>
    )
}

export default App