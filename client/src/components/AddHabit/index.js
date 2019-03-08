import React, { Component } from 'react'
import './AddHabit.css'

export default class index extends Component {
  render() {
    return (
      <div className="addHabit">
        <div className="habitContainer">
          <h3>Add Habit</h3>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input type="text"></input>
          <i className="fa fa-check addHabitCheck"></i>
        </div>
      </div>
    )
  }
}
