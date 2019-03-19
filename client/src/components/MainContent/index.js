import React from 'react'
import Jumbotron from '../Jumbotron'
import HabitSlide from '../HabitSlide'
import AddHabit from '../AddHabit'
import HabitCard from '../HabitCard'

export default function index(props) {
    const { loggedIn, addHabit, getAllHabits, habits, userHabitList, sortedHabitArray, updateRecord } = props
    if (loggedIn) {
      return (
        <div>
          <AddHabit 
            addHabit={addHabit}
            getAllHabits={getAllHabits}
            habits={habits}
          />
          {userHabitList.length === 0 
            ?
            <h1>No Habits</h1>
            : userHabitList.length === sortedHabitArray.length
            ?
            userHabitList.map((habit, i) => {
              const habitData = sortedHabitArray[i]
              return (
                <HabitCard
                  key={i}
                  habit={habit}
                  habitData={habitData}
                  updateRecord={updateRecord}
                />
              )
            })
            : null
          } 
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
