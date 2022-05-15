import React, { Component } from 'react'
import loader from '../../image/Loading/loader.gif'

export default class Loading extends Component {
  render() {
    return (
      <>
        <img src={loader} alt="Loading..." style={{width:'200px',display:'block', margin:'auto'}}/>
      </>
    )
  }
}
