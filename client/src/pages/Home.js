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
    habits: [],
    userHabitList: [],
    userHabitData: []
  }

  componentDidMount() {
    this.isUserLoggedIn()
  }
  
  isUserLoggedIn = () => {
    const { loggedIn, userId } = this.state
    if ( loggedIn && userId !== '') {
      this.getUserHabitData(userId)
      this.getUserHabitList(userId)
    }
  }

  getAllHabits = () => {
    axios.get('/api/habits')
      .then(res => {
        const habitData = res.data.map(item => {
          const data = {
            id: item.id,
            habit: item.habitName
          }
          return data
        })
        console.log(`made it to getallhabits`, habitData)
        this.setState({habits: habitData})
      })
  }

  getUserHabitList = () => {
    axios.get('/api/userhabits/' + this.state.userId)
      .then(res => {
        console.log(`made it to getuserhabitlist`, res.data)
      })
  }

  getUserHabitData = (userId) => {
    // console.log('inside getUserHabitData')
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

  addHabit = (habit) => {
    const habitNames = this.state.habits.map((item) => {
      return item.habit
    })

    if ( habitNames.includes(habit) ) {
      // HABIT IS ALREADY IN HABITS DB
      // CHECK IF HABIT IS IN USER HABITS
      if ( this.state.userHabitList.includes(habit) ) {
        return false
      }

      axios.post('/api/userHabits', {userID: this.state.userId, habitName: habit})
        .then(res => {
          console.log(`add to userhabits table response`, res.data)
        })
      // IF NOT, ADD HABIT TO USER HABITS AND RECORDS TABLES

    } else {
      // HABIT DOES NOT EXIST IN HABITS DB
      axios.post('/api/habits', {habitName: habit})
        .then(res => {
          console.log(`created new habit in habits db`, res.data)
        })
      axios.post('/api/userHabits', {userID: this.state.userId, habitName: habit})
        .then(res => {
          console.log(`created new habit to userhabits`, res.data)
        })
      // THEN ADD HABIT TO USER HABIT RECORDS TABLES
    }
  }

  addHabitRecord = (userID, HabitName, date, success) => {

  }

  updateHabit = () => {

  }

  render() {
    const { loggedIn, userName, password, habits } = this.state
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
          getAllHabits={this.getAllHabits}
          habits={habits}
        />
        <Footer />
      </div>
    )
  }
}
