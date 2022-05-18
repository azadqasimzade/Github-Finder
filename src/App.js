import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Users from './Components/Users/Users'
import axios from 'axios'
import Search from './Components/Search/Search';
import Alert from './Components/Alert/Alert';
import UserDetails from './Components/UserDetails/UserDetails'

export class App extends Component {
  constructor(props){
    super(props);

    this.searchInput = this.searchInput.bind(this);
    this.clearButton = this.clearButton.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
    this.getUser = this.getUser.bind(this);

    this.state={
      loading:false,
      users:[],
      user:{},
      alert: null
    }
  
  }

  componentDidMount(){
    const json = localStorage.getItem('github');
    const users = JSON.parse(json);

    if(users){
      this.setState({
        users: users
      })
    }
  }

  componentDidUpdate(prevState){
    if(prevState.users !== this.state.users){
      const json = JSON.stringify(this.state.users);
      localStorage.setItem('github',json)
    }
  }

  searchInput(keyword){
    this.setState({
        loading: true
      })
    
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res =>{
        this.setState({
          users: res.data.items,
          loading: false
      })
    })
  }

  getUser(username){
    this.setState({
      loading: true
    })

    axios.get(`https://api.github.com/users/${username}`)
      .then(res =>{
        this.setState({
          user: res.data,
          loading: false
      })
    })
  }

  clearButton(){
    this.setState({
      users: []
    })
  }

  setAlert(msg,type){
    this.setState({
      alert: {msg, type}
    })

    setTimeout(() => {
      this.setState({
        alert: null
      })
    }, 2000);
  }

  clearAlert(){
    this.setState({
      alert: null
    })
  }

  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={'/'} render={(routeProps =>{
            return(
              <>
                  <Alert 
                    alert={this.state.alert}
                    clearAlert={this.clearAlert}/>
                  <Search 
                    searchInput={this.searchInput}
                    clearButton={this.clearButton} 
                    showClearBtn={this.state.users.length>0 ? true : false}
                    setAlert={this.setAlert}/>
                  <Users users={this.state.users} loading={this.state.loading} user={this.state.user}/>
              </>
            )
          })}/>
          <Route path={'/user/:login'} render={(routeProps) =>{
            return (
              <>  
                <UserDetails {...routeProps} getUser={this.getUser} user={this.state.user}/>
              </>
            )
          }}/>
        </Switch>
      </Router>
      </>
    )
  }
}

export default App