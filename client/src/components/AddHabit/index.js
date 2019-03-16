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
    e.preventDefault()
    let habit;
    if ( this.state.selected === 'default' ) {
      habit = this.state.newHabit
    } else {
      habit = this.state.selected
    }
    this.props.addHabit(habit)
  }

  render() {
    return (
      <div className="addHabit">
        <form onSubmit={this.onSubmit} className="addHabitForm">
          <h3>Add Habit</h3>
          <select onChange={this.onChange} value={this.state.selected}>
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
            value={this.setState.input}
            disabled={this.state.selected === "default" ? false : true}
          ></input>
          <button>Add New Habit</button>
        </form>
      </div>
    )
  }
}
