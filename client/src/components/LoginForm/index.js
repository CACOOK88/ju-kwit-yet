import React, { Component } from 'react'
import Modal from '../Modal'
import './LoginForm.css'

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    }
  }

  handleToggleModal() {
    this.setState = {
      showModal: !this.state.showModal
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { userName, password } = this.props
    this.props.onLoginSubmit(userName, password)
  }

  render() {
    const { 
      onRegisterSubmit, 
      onChange, 
      onLogout, 
      userName, 
      password
    } = this.props
    return (
      <div className="loginForm">
        <form method="post" onSubmit={this.onSubmit}>
          <label htmlFor="userName">Username: </label>
          <input 
            className ="userNameInput"
            type="text"
            placeholder="Enter Username"
            name="userName"
            value={userName}
            onChange={onChange}
          />

          <label htmlFor="password">Password: </label>
          <input 
            className="passwordInput"
            type="password" 
            placeholder="Enter Password" 
            name="password" 
            value={password} 
            onChange={onChange}
          />
          <button className="loginBtn">LOGIN</button>
          {/* <span>OR </span> */}
        </form>
        <Modal 
          show={this.state.showModal}
          onRegisterSubmit={onRegisterSubmit}
          onLogout={onLogout}
        />
        
      </div>
    )
  }
}
