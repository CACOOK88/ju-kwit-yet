import React, { Component } from 'react'
import './Navbar.css'
import navLogo from'../Images/project3_white2.png'
import Modal from '../Modal'

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
    console.log(`clicked login`)
    const { userName, password } = this.props
    this.props.onLoginSubmit(userName, password)
  }

  render() {
    const { onChange, userName, password } = this.props
    return (
      <div className="navbar">
        <a href="/" ><img src={navLogo} alt="Logo"></img></a>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="userName">User Name: </label>
          <input type="text" placeholder="Enter Username" name="userName" value={userName} onChange={onChange} />

          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Enter Password" name="password" value={password} onChange={onChange} />

          <button>LOGIN</button>
        </form>
        <Modal show={this.state.showModal} />
      </div>
    )
  }
}
