import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'


export default class Home extends Component {
  state = {
    loggedIn: false,
    userId: '',
    userName: '',
    password: '',
    habitData: []
  }

  componentDidMount() {
    this.isUserLoggedIn()
  }

  isUserLoggedIn = () => {
    console.log(`inside isUserLoggedIn`)
    const { loggedIn, userId } = this.state
    if ( loggedIn && userId !== '') {
      this.getUserHabitData(userId)
    }
  }

  getUserHabitData = (userId) => {
    console.log('inside getUserHabitData')
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onLoginSubmit = (userName, password) => {
    axios.post('/api/users/login', {userName, password})
      .then(result => {
        this.setState(
          {
            loggedIn: true,
            userId: result.data.id,
            userName: result.data.userName,
            password: ''
          }
        )
        this.getUserHabitData(this.state.userId)
      })
      .catch(err => {
        if (err) {
          console.log(`ERROR`)
          console.log(err)
        }
      })
  }

  onRegisterSubmit = (id, userName) => {
    console.log(`inside onRegisterSubmit`)
    this.setState({
      userId: id,
      userName: userName,
      loggedIn: true
    })
    console.log(this.state)
  }

  onLogout = () => {
    console.log(`clicked logout`)
    this.setState({
      loggedIn: false,
      userId: '',
      userName: '',
      password: '',
      habitData: []
    })
  }

  addHabit = () => {

  }

  updateHabit = () => {

  }

  render() {
    const { loggedIn, userName, password } = this.state
    return (
      <div>
        <Navbar 
          onLoginSubmit={this.onLoginSubmit}
          onRegisterSubmit={this.onRegisterSubmit}
          onChange={this.onChange}
          onLogout={this.onLogout}
          userName={userName}
          password={password}
          loggedIn={loggedIn}
        />
        <MainContent 
          loggedIn={loggedIn}
          addHabit={this.addHabit}
        />
        <Footer />
      </div>
    )
  }
}
