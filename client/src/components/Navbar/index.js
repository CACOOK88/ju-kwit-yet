import React, { Component } from 'react'
import axios from 'axios'
import './Navbar.css'
import navLogo from'../Images/project3_white2.png'
import Modal from '../Modal'

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      userName: '',
      password: ''
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
    const { userName, password } = this.state
    axios.post('/api/users/login', {userName, password})
      .then(result => {
        console.log(result.data)
        console.log(`axios callback`)
      })
      .catch(err => {
        if (err) {
          console.log(`ERROR`)
          console.log(err)
        }
      })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  render() {
    return (
      <div className="navbar">
        <a href="/" ><img src={navLogo} alt="Logo"></img></a>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="userName">USERNAME: </label>
          <input type="text" placeholder="Enter Username" name="userName" value={this.state.userName} onChange={this.onChange} />

          <label htmlFor="password">PASSWORD: </label>
          <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} />

          <button>LOGIN</button>
        </form>
        <Modal show={this.state.showModal} />
      </div>
    )
  }
}
