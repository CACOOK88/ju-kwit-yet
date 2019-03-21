import React from 'react'
import Jumbotron from '../Jumbotron'
import HabitSlide from '../HabitSlide'
import AddHabit from '../AddHabit'
import NoHabits from '../NoHabits'
import HabitCard from '../HabitCard'

export default function index(props) {
    const { 
      loggedIn, 
      addHabit, 
      getAllHabits, 
      habits, 
      userHabitList, 
      sortedHabitArray, 
      updateRecord,
      deleteHabit
    } = props

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
            <NoHabits />

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
                  deleteHabit={deleteHabit}
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
