import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    )
  }
}
