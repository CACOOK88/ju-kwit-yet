import React from 'react'
import Jumbotron from '../Jumbotron'
import HabitSlide from '../HabitSlide'
import AddHabit from '../AddHabit'
import HabitCard from '../HabitCard'

export default function index(props) {
    const { loggedIn, addHabit, getAllHabits, habits, userHabitList } = props
    if (loggedIn) {
      return (
        <div>
          <AddHabit 
            addHabit={addHabit}
            getAllHabits={getAllHabits}
            habits={habits}
          />
          {userHabitList.length === 0 ?
            <h1>No Habits</h1>
            :
            userHabitList.reverse().map((habit, i) => {
            return (
              <HabitCard
                key={i}
                habit={habit}
              />
            )
          })}
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
