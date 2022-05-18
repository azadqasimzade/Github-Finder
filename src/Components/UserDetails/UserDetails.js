import React, { Component } from 'react'

export class UserDetails extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
  render() {
    return (
      <>
        {
            this.props.user.name
        }
      </>
    )
  }
}

export default UserDetails