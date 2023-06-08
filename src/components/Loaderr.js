import React, { Component } from 'react'
import loader from './load.gif'
export default class Loaderr extends Component {
  render() {
    return (
      <div className='text-center'>

        <img src={loader}/>
        
      </div>
    )
  }
}
