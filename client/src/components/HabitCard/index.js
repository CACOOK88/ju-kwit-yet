import React, { Component } from 'react'
import './HabitCard.css'

export default class index extends Component {
  render() {
    return (
      <div className="habitCard">
        <div className="habitCardContainer">
          <h4>Quit Smoking</h4>
          <p>Last 7 Days:</p>
          <i className="fa fa-check historyBox"></i>
          <i className="fa fa-close historyBox"></i>
          <i className="fa fa-check historyBox"></i>
          <i className="fa fa-close historyBox"></i>
          <i className="fa fa-check historyBox"></i>
          <i className="fa fa-check historyBox"></i>
          <i className="fa fa-check historyBox"></i>
        </div>
      </div>
    )
  }
}
