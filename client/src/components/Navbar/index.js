import React, { Component } from 'react'
import './Navbar.css'
import navLogo from'../Images/project3_white2.png'

export default class index extends Component {


  render() {
    return (
      <div className="navbar">
        <a href="/" ><img src={navLogo} alt="Logo"></img></a>
        <form action="/profile">
          <label htmlFor="userName">User Name: </label>
          <input type="text" placeholder="Enter Username" name="userName" />

          <label htmlFor="password">Password: </label>
          <input type="text" placeholder="Enter Password" name="password" />

          <button>Submit</button>
        </form>
      </div>
    )
  }
}
