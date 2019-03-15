import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import HabitSlide from '../components/HabitSlide'


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
    axios.get('/api/habitrecords/userid' + userId)
      .then(res => {

        // /////////////////////////////////////////////////
        // /////////////////////////////////////////////////
        // /////////////////////////////////////////////////
        //    COME BACK HERE TO FINISH RESPONSE UDPATE
        // /////////////////////////////////////////////////
        // /////////////////////////////////////////////////
        // /////////////////////////////////////////////////
        console.log(res.data)
      })
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



  render() {
    const { userName, password } = this.state
    return (
      <div>
        <Navbar 
          onLoginSubmit={this.onLoginSubmit}
          onChange={this.onChange}
          userName={userName}
          password={password}
        />
        <Jumbotron />
        <br></br>
        <HabitSlide />
        <Footer />
      </div>
    )
  }
}
