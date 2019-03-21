import React from 'react'
import { DatePicker } from '@y0c/react-datepicker';
import './NoHabits.css'

export default function index() {
  return (
    <div className="habitCard">
      <div className="habitCardContainer">
        <div className="noHabits">
          <h4 className="habitName">No Habits to Display</h4>
          <h4>Choose from dropdown or create your own habit above</h4>
        </div>
      </div>
    </div>
  )
}
