import React, {useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import Search from './Components/Search/Search';
import Alert from './Components/Alert/Alert';
import UserDetails from './Components/UserDetails/UserDetails'
import GithubState from './Components/Context/Github/githubState'
import AlertState from './Components/Context/Alert/alertState';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

const App =()=> {

    return (
      <>
        <GithubState>
          <AlertState>
              <Router>
                <Navbar/>
                <Alert/>
                <Switch>
                  <Route exact path={'/'} component={Home}/>
                  <Route path={'/user/:login'} component={UserDetails}/>
                  <Route component={NotFound}/>
                </Switch>
              </Router>
          </AlertState>
        </GithubState>
      </>
    )
}

export default App