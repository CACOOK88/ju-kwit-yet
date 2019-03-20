import React, { Component } from 'react'
import './UserGreeting.css'

export default class index extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onLogout()
  }
  
  render() {
    return (
      <div className="loggedIn">
      <h3>Welcome, {this.props.userName}</h3>
      <form onSubmit={this.onSubmit}>
        <button className="logoutButton" >Logout</button>
      </form>
      </div>
    )
  }
}