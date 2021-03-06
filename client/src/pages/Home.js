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
    userHabitData: [],
    sortedHabitArray: [],
    loginError: ''
  }

  componentDidMount() {
    this.isUserLoggedIn()
  }
  
  isUserLoggedIn = () => {
    const { loggedIn, userId } = this.state
    if ( loggedIn && userId !== '') {
      this.getAllHabits()
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
        this.setState({habits: habitData}, () => {
          this.getUserHabitList()
        })
      })
  }

  getUserHabitList = () => {
    axios.get('/api/userhabits/' + this.state.userId)
      .then(res => {
        this.setState({userHabitList: res.data}, () => {
          this.getUserHabitRecords()
        })
      })
  }

  getUserHabitRecords = () => {
    axios.get('/api/habitrecords/'+ this.state.userId)
      .then(res => {
        this.setState({userHabitData: res.data}, () => {
          this.fillHabitRecordHistory()
        })
      })
  }

  fillHabitRecordHistory = () => {
    // Grab habit arrays
    const {userHabitList, userHabitData} = this.state
    // For each habit on the user's list, filter the data by
    // that name to return an array of sorted data
    const sortedHabitArray = userHabitList.map( userHabit => {
      return userHabitData.filter( data => {
        return userHabit === data.habitName
      })
    })
    this.setState({
      sortedHabitArray: sortedHabitArray
    })
    // Check through sorted data to fill in missing days
    // since last record
    for (let i = 0; i < sortedHabitArray.length; i++ ) {
      const doesTodayExist = sortedHabitArray[i].filter(data => {
        return data.date === moment().format("YYYYMMDD")
      })
      if ( !doesTodayExist.length ) {
        const reversedArray = sortedHabitArray[i].reverse()
        const [firstItem] = reversedArray
        const {date, habitName} = firstItem
        const today = moment()
        const missingDayCount = today.diff(date, 'days')
        for ( let i = 0; i < missingDayCount; i++ ) {
          const counter = i+1
          let newDate = moment(date).add(counter, 'days').format('YYYYMMDD')
          this.addHabitRecord(habitName, newDate, 'null')
        }
      }
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onLoginSubmit = (userName, password) => {
    if (userName && password) {
      this.setState({
        loginError: ''
      })
      axios.post('/api/users/login', {userName, password})
        .then(result => {
          if (result.data.errorMessage) {
            this.setState({
              loginError: result.data.errorMessage
            })
          } else {
            this.setState({
              loggedIn: true,
              userId: result.data.id,
              userName: result.data.userName,
              password: ''
            })

          }
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
      userHabitData: [],
      sortedHabitArray: []
    })
  }

  addHabit = (habit) => {
    const upperHabit = habit.toUpperCase()
    const habitNames = this.state.habits.map((item) => {
      return item.habit.toUpperCase()
    })
    
    // IF HABIT HAS ALREADY BEEN CREATED BY ANY USER...
    if ( habitNames.includes(upperHabit) ) {
      // AND IF LOGGED IN USER ALREADY HAS HABIT
      if ( this.state.userHabitList.includes(habit) ) {
        //NO NEED TO ADD HABIT
      } else {
        //ADD HABIT TO USER HABITS TABLE
        axios.post('/api/userHabits', {userID: this.state.userId, habitName: habit})
          .then(res => {
            this.getAllHabits()
          })
        // THEN ADD FIRST HABIT RECORD
        this.addHabitRecord( habit, moment().subtract(6, "days").format("YYYYMMDD"), "null")
      }
      
    } // ELSE IF HABIT HAS NOT BEEN CREATED BY ANY USER
    else {
      // ADD HABIT TO HABIT TABLE
      axios.post('/api/habits', {habitName: habit})
        .then(res => {
        })
      // THEN ADD HABIT TO USER HABITS TABLE
      axios.post('/api/userHabits', {userID: this.state.userId, habitName: habit})
        .then(res => {
          this.getAllHabits()
        })
        // THEN ADD FIRST HABIT RECORD
        this.addHabitRecord( habit, moment().subtract(6, "days").format("YYYYMMDD"), "null")
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

  updateRecord = (date, habit, success) => {
    axios.put('/api/habitrecords', {
      success: success,
      habitName: habit,
      date: date,
      userId: this.state.userId
    })
      .then( res => {
        this.getUserHabitRecords()
      })
  }

  deleteHabit = (habit) => {
    axios.delete('/api/habitrecords', {
      params: {
        userId: this.state.userId,
        habitName: habit
      }
    })
    .then(res => {
      axios.delete('/api/userhabits', {
        params: {
          userId: this.state.userId,
          habitName: habit
        }
      })
        .then(res => {
          this.getUserHabitList()
        })
    })
  }

  render() {
    const { 
      loggedIn, 
      userName, 
      password, 
      habits, 
      userHabitList, 
      sortedHabitArray,
      loginError
    } = this.state

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
          loginError={loginError}
        />
        <MainContent 
          loggedIn={loggedIn}
          addHabit={this.addHabit}
          getAllHabits={this.getAllHabits}
          updateRecord={this.updateRecord}
          habits={habits}
          userHabitList={userHabitList}
          sortedHabitArray={sortedHabitArray}
          deleteHabit={this.deleteHabit}
        />
        <Footer />
      </div>
    )
  }
}
