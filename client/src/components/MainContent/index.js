import React from 'react'
import Jumbotron from '../Jumbotron'
import HabitSlide from '../HabitSlide'
import AddHabit from '../AddHabit'
import HabitCard from '../HabitCard'

export default function index(props) {
    const { loggedIn } = props
    if (loggedIn) {
      return (
        <div>
          <AddHabit />
          <HabitCard />
        </div>
      )
    }
    return (
      <div>
        <Jumbotron />
        <HabitSlide />
      </div>
    )
}
