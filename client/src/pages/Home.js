import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
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
      this.getUserHabitRecords(userId)
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
        this.setState({habits: habitData})
      })
  }

  getUserHabitList = () => {
    axios.get('/api/userhabits/' + this.state.userId)
      .then(res => {
        this.setState({userHabitList: res.data})
      })
      .then(() => {
        this.fillHabitRecordHistory()
      })
  }

  getUserHabitRecords = (userId) => {
    // console.log('inside getUserHabitRecords', userId)
    axios.get('/api/habitrecords/'+userId)
      .then(res => {
        this.setState({userHabitData: res.data})
      })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onLoginSubmit = (userName, password) => {
    if (userName && password) {
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
          this.getUserHabitRecords(this.state.userId)
          this.getUserHabitList()
        })
        .catch(err => {
          if (err) {
            console.log(`ERROR`)
            console.log(err)
          }
        })
    }
  }

  onRegisterSubmit = (id, userName) => {
    this.setState({
      userId: id,
      userName: userName,
      loggedIn: true
    })
  }

  onLogout = () => {
    console.log(`clicked logout`)
    this.setState({
      loggedIn: false,
      userId: '',
      userName: '',
      password: '',
      habits: [],
      userHabitList: [],
      userHabitData: []
    })
  }

  addHabit = (habit) => {
    const habitNames = this.state.habits.map((item) => {
      return item.habit
    })
    
    // IF HABIT HAS ALREADY BEEN CREATED BY ANY USER...
    if ( habitNames.includes(habit) ) {
      // AND IF LOGGED IN USER ALREADY HAS HABIT
      if ( this.state.userHabitList.includes(habit) ) {
        //NO NEED TO ADD HABIT
        console.log(`habit already assigned to user`)
      } else {
        //ADD HABIT TO USER HABITS TABLE
        axios.post('/api/userHabits', {userID: this.state.userId, habitName: habit})
          .then(res => {
            console.log(`add to userhabits table response`, res.data)
            this.getAllHabits()
            this.getUserHabitList()
          })
        // THEN ADD FIRST HABIT RECORD
        this.addHabitRecord( habit, moment().format("YYYYMMDD"), "null")
      }
      
    } // ELSE IF HABIT HAS NOT BEEN CREATED BY ANY USER
    else {
      // ADD HABIT TO HABIT TABLE
      axios.post('/api/habits', {habitName: habit})
        .then(res => {
          // console.log(`created new habit in habits db`, res.data)
        })
      // THEN ADD HABIT TO USER HABITS TABLE
      axios.post('/api/userHabits', {userID: this.state.userId, habitName: habit})
        .then(res => {
          this.getAllHabits()
          this.getUserHabitList()
        })
        // THEN ADD FIRST HABIT RECORD
        this.addHabitRecord( habit, moment().format("YYYYMMDD"), "null")
    }
  }

  addHabitRecord = ( habitName, date, success) => {
    const habitRecordExists = this.state.userHabitData.filter(item => {
      return item.date === date && item.habitName === habitName
    })
    if ( habitRecordExists.length > 0 ) {
      console.log(`habit with date already exists`)
    } else {
      axios.post('/api/habitrecords', {
        userID: this.state.userId,
        habitName: habitName,
        date: date,
        success: success
      })
        .then(res => {
          this.getUserHabitRecords()
        })
    }
  }

  fillHabitRecordHistory = () => {
    console.log(`inside fill habits`)
    const {userHabitList, userHabitData} = this.state
    console.log(userHabitData, userHabitList)
    const sortedHabitArray = userHabitList.map( userHabit => {
      return userHabitData.filter( data => {
        return userHabit === data.habitName
      })
    })
    console.log(sortedHabitArray)
  }

  updateHabit = () => {

  }

  render() {
    const { loggedIn, userName, password, habits, userHabitList } = this.state
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
          userHabitList={userHabitList}
        />
        <Footer />
      </div>
    )
  }
}
