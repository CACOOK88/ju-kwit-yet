import React, { Component } from 'react'
import { DatePicker } from '@y0c/react-datepicker';
import './HabitCard.css'


export default class index extends Component {

  onChange = (date) => {
    console.log(date);
  }

  render() {
    return (
      <div className="habitCard">
        <div className="habitCardContainer">
         
          <div className="exit">
            <i className="fa fa-close historyBox"></i>
          </div>

          <h4 className="habitName">{this.props.habit}</h4>
          
        <div className="weekHistoryContainer">
          <div className="captions weekday">
            <div>S</div>
            <i className="fa fa-check historyBox"></i>
          </div>
            
          <div className="captions weekday">
            <div>M</div>
            <i className="fa fa-close historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>T</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>W</div>
            <i className="fa fa-close historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>Th</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>F</div>
            <i className="fa fa-check historyBox"></i>
          </div>

          <div className="captions weekday">
            <div>Sa</div>
            <i className="fa fa-question historyBox"></i>
          </div>
        </div>

<div className="confirmContainer">

          <DatePicker className="calendar" locale="ko" onChange={this.onChange}/>
          <div className="completedContainer">
            <div className="captions status">
              <div>Completed</div>
              <i className="fa fa-check historyBox"></i>
            </div>
            
            <div className="captions status">
              <div>Not Completed</div>
              <i className="fa fa-close historyBox"></i>
            </div>
          </div>
</div>
          
        </div>
      </div>
    )
  }
}
