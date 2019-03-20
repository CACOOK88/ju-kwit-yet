import React, { Component } from 'react'
import './AddHabit.css'

export default class index extends Component {
  state = {
    selected: 'default',
    newHabit: ''
  }

  componentDidMount() {
    this.props.getAllHabits()
  }

  onChange = (e) => {
    this.setState({
      selected: e.target.value
    })
  }

  onInputChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = (e) => {
    const { selected, newHabit } = this.state
    e.preventDefault()
    let habit;
    if ( selected === 'default' ) {
      habit = newHabit
    } else {
      habit = selected
    } 

    let localeHabit = habit.split(" ").map( item => {
      let firstLetter = item[0].toUpperCase()
      let rest = item.substring(1)
      return firstLetter + rest


    }).join(' ')
    console.log(localeHabit)

    this.props.addHabit(localeHabit)
    this.setState({newHabit: ''})
  }

  render() {
    const { selected, newHabit } = this.state
    return (
      <div className="addHabit">
        <form onSubmit={this.onSubmit} className="addHabitForm">
          <h3>Add Habit</h3>
          <select onChange={this.onChange} value={selected}>
            <option value="default" default>Select or Create New Habit</option>
            {this.props.habits.map(habit => {
              return <option key={habit.id} value={habit.habit}>{habit.habit}</option>
            })}
          </select>
          <input 
            type="text" 
            placeholder="" 
            name="newHabit" 
            onChange={this.onInputChange} 
            value={newHabit}
            disabled={selected === "default" ? false : true}
          ></input>
          <button className="newHabitButton">Add New Habit</button>
        </form>
      </div>
    )
  }
}
