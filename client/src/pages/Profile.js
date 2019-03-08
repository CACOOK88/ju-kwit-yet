import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import AddHabit from '../components/AddHabit'
import HabitCard from '../components/HabitCard'
import Footer from '../components/Footer'


export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* different jumbotron here for profile page?
            maybe some kind of inspirational photo? */}
        <Jumbotron /> 
        <AddHabit />
        <h1 className="habitTitle">Your Habits</h1>
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <Footer />
      </div>
    )
  }
}
