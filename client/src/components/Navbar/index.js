import React, { Component } from 'react'
import './Navbar.css'
import navLogo from'../Images/project3_white2.png'

import Greeting from '../Greeting'

export default class index extends Component {

  onSubmit = (e) => {
    e.preventDefault()
    const { userName, password } = this.props
    this.props.onLoginSubmit(userName, password)
  }

  render() {
    const { 
      loggedIn, 
      userName, 
      password, 
      onLoginSubmit, 
      onRegisterSubmit, 
      onChange, 
      onLogout,
      loginError
    } = this.props

    return (
      <div className="navbar">
        <a href="/" ><img src={navLogo} alt="Logo"></img></a>
        <Greeting 
          onLoginSubmit={onLoginSubmit}
          onRegisterSubmit={onRegisterSubmit}
          onChange={onChange}
          onLogout={onLogout}
          userName={userName}
          password={password}
          loggedIn={loggedIn}
          loginError={loginError}
        />
      </div>
    )
  }
}
